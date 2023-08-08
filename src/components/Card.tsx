import {useContext} from "react";
import { MyContext } from "../context/MyContext";

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

const Card = ({ photo }: { photo: Photo }) => {
  const {setShow}=useContext(MyContext)
  const { urls, description, alt_description } = photo;
  //display alt_desctiption if description is null
  const displayText = description || alt_description;

  //save to localStorage
  const handleSave = () => {
    const savedImagesJSON: any = window.localStorage.getItem("images");
    const savedImages: any = JSON.parse(savedImagesJSON) || [];
    const isAlreadySaved = savedImages.some(
      (savedPhoto: any) => savedPhoto.id === photo.id,
    );
    if (!isAlreadySaved) {
      savedImages.push({ ...photo });
      window.localStorage.setItem("images", JSON.stringify(savedImages));
      //implement popup function
      setShow(true);
    }
  };
  return (
    <div className="rounded-lg bg-white">
      <img
        src={urls.small}
        alt=""
        className="h-3/4 w-full rounded-t-lg object-cover"
      />
      <div className="mx-2 flex h-1/4  items-center justify-center gap-1 py-4">
        <p className="my-2 line-clamp-1 h-4 w-3/4 overflow-hidden  px-1 text-xs font-semibold capitalize  text-gray-600 sm:line-clamp-2 sm:h-10  sm:text-sm lg:h-12 lg:text-base">
          {displayText}
        </p>
        <button
          type="button"
          className="w-20 rounded-full bg-blue-500  py-1 text-white hover:bg-blue-600 hover:shadow-lg "
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Card;
