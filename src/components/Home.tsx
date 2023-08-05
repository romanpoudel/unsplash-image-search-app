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
  const{setPage,pageno}=useContext(PageContext)
  const [data, setDataResponse] = useState<any>(null);

  useEffect(() => {
    api.search
      .getPhotos({
        query: text,
        page: pageno,
        perPage: 10,
        color: "green",
        orientation: "landscape",
      })
      .then((result) => {
        setDataResponse(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
      setPage(data?.response?.total_pages)
    console.log(data);
    console.log(pageno)
  }, [text,pageno]);

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
