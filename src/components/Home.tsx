import { useEffect, useState, useContext } from "react";
import Card from "./Card";
import { createApi } from "unsplash-js";
import { MyContext } from "../context/MyContext";
import { PageContext } from "../context/PageContext";
import { Photo } from "../type";
import HeroSection from "./HeroSection";
import ModalImage from "./ModalImage";

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
      <ModalImage modalData={modalData} currentImg={currentImg} setCurrentImg={setCurrentImg}/>
        <main className="mb-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
          {data.response.results.map((photo: Photo) => (
            <Card
              key={photo.id}
              photo={photo}
              handleClick={setCurrentImg}
              getModalData={setModalData}
            />
          ))}
        </main>
      </>
    );
  }
};

export default Home;
