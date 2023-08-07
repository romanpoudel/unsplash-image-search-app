import { useEffect, useState, useContext } from "react";
import Card from "./Card";
import { createApi } from "unsplash-js";
import { MyContext } from "../context/MyContext";
import { PageContext } from "../context/PageContext";

type Photo = {
  id: number;
  description: string;
  alt_description: string;
  width: number;
  height: number;
  urls: {
    large: string;
    regular: string;
    raw: string;
    small: string;
    thumb: string;
  };
  color: string | null;
  user: {
    username: string;
    name: string;
  };
};

//access unsplash API
const api = createApi({
  accessKey: "LE0QeIJsF4XoyFf56rofjQajP9La-nCmGzkFOpYbrWE",
});

const Home = () => {
  const { text } = useContext(MyContext);
  const { setPage, pageno } = useContext(PageContext);
  const [data, setDataResponse] = useState<any>(null);
  const [itemno, setItemno] = useState<number>();

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
    console.log(pageno);
  }, [text, pageno, itemno]);

  //when search field is empty
  if (text === "") {
    return (
      <div className="flex items-center mt-28">
        <div className="mx-auto my-auto h-[400px] w-[400px] rounded-xl bg-[url(/Sailor.jpg)]  bg-cover relative flex justify-center">
          {/* <img src="public/Sailor 03.jpg"  alt="search image" width={440} style={borderRadius:50%}/> */}
          <p className="text-white font-bold text-2xl absolute bottom-8 font-pacifico tracking-widest">Search images</p>
        </div>
      </div>
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
      <div className="mb-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
        {data.response.results.map((photo: Photo) => (
          <Card key={photo.id} photo={photo} />
        ))}
      </div>
    );
  }
};

export default Home;
