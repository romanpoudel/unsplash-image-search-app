import { useEffect, useState, useContext } from "react";
import Card from "./Card";
import { createApi } from "unsplash-js";
import { MyContext } from "../context/MyContext";
import { PageContext } from "../context/PageContext";
// import Modal from "./Modal";
import Modal from "react-modal";
import { Photo } from "../type";
import { BiSolidLike } from "react-icons/bi";
import { Tooltip } from "@mui/material";
import HeroSection from "./HeroSection";

const access_key = import.meta.env.VITE_ACCESS_KEY;

//access unsplash API
const api = createApi({
  accessKey: access_key,
});

const Home = () => {
  const { text } = useContext(MyContext);
  const { setPage, pageno } = useContext(PageContext);
  const [data, setDataResponse] = useState<any>(null);
  const [itemno, setItemno] = useState<number>();
  const [currentImg, setCurrentImg] = useState<string | null>(null);
  const [modalData, setModalData] = useState<(string | number)[]>([]);
  const [name, username, thumb, likes, pic, html, totalPics] = modalData;

  //for rendering different number of cards according to width for responsive design
  useEffect(() => {
    function handleResize() {
      console.log(window.innerWidth);
      if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
        setItemno(9);
      } else if (window.innerWidth >= 1024 && window.innerWidth <= 1280) {
        setItemno(12);
      } else if (window.innerWidth >= 1536) {
        setItemno(15);
      }
    }
    window.addEventListener("resize", handleResize);
  });
  useEffect(() => {
    api.search
      .getPhotos({
        query: text,
        page: pageno,
        perPage: itemno,
        // color: "green",
        orientation: "landscape",
      })
      .then((result) => {
        setDataResponse(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
    setPage(data?.response?.total_pages);
    console.log(data);
    console.log(data?.response?.results);
    console.log(pageno);
  }, [text, pageno, itemno]);

  //when search field is empty
  if (text === "") {
    return (
      <HeroSection />
      // <div className="mt-28 flex items-center">
      //   <div className="relative mx-auto my-auto flex h-[400px] w-[400px]  justify-center rounded-xl bg-[url(/Sailor.jpg)] bg-cover">
      //     {/* <img src="public/Sailor 03.jpg"  alt="search image" width={440} style={borderRadius:50%}/> */}
      //     <p className="absolute bottom-8 font-pacifico text-2xl font-bold tracking-widest text-white">
      //       Search images
      //     </p>
      //   </div>
      // </div>
    );
  }
  //checking data
  if (data === null) {
    return <div>Loading...</div>;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  } else {
    return (
      <>
        <Modal
          isOpen={!!currentImg}
          onRequestClose={() => setCurrentImg(null)}
          className="mx-auto mt-16 h-[680px] w-[800px] rounded-lg border bg-white"
        >
          <img
            src={String(thumb)}
            alt=""
            className="h-5/6 w-full rounded-t-lg object-cover"
          />
          <div className="mx-4 flex h-1/6 flex-row items-center justify-between">
            <a href={String(html)} target="_blank" rel="noopener noreferrer">
            <Tooltip title="View Page"  placement="right" arrow>
              <div className="flex items-center gap-4">
                <div>
                  <img
                    src={String(pic)}
                    alt=""
                    className="w-16 rounded-full border-4 border-blue-500"
                  />
                </div>
                <div className="text-blue-600">
                  <div className="font-bold">{name}</div>
                  <div className="text-sm">@{username}</div>
                </div>
              </div>
              </Tooltip>
            </a>
            <div className="gap-4 text-blue-500">
              <div className="flex items-center gap-4 font-bold text-blue-500">
                <BiSolidLike size={26} />
                {likes}
              </div>
              <div className="font-bold">Total Pics: {totalPics}</div>
            </div>
          </div>
        </Modal>
        <div className="mb-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
          {data.response.results.map((photo: Photo) => (
            <Card
              key={photo.id}
              photo={photo}
              handleClick={setCurrentImg}
              getModalData={setModalData}
            />
          ))}
        </div>
      </>
    );
  }
};

export default Home;
