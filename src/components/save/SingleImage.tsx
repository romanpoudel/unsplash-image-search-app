import { MyContext } from "../../context/MyContext";
import { Photo } from "../../type";
import { useContext, Dispatch, SetStateAction } from "react";
// import {Dispatch,SetStateAction} from "react"

const SingleImage = ({
  photo,
  handleClick,
  getModalData,
}: {
  photo: Photo;
  handleClick: Dispatch<SetStateAction<string | null>>;
  getModalData: Dispatch<SetStateAction<(string | number)[]>>;
}) => {
  const { setCount } = useContext(MyContext);
  const { urls, description, alt_description } = photo;
  const displayText = description || alt_description;
  console.log(displayText);
  //for modal
  const name = photo.user.name;
  const username = photo.user.username;
  const thumb = photo.urls.regular;
  const likes = photo.likes;
  const pic = photo.user.profile_image.large;
  const html = photo.user.links.html;
  const totalPics = photo.user.total_photos;

  //remove from localStorage
  const handleRemove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    const savedImagesJSON: any = window.localStorage.getItem("images");
    const savedImages: any = JSON.parse(savedImagesJSON) || [];
    const filteredArray = savedImages.filter(
      (savedPhoto: any) => savedPhoto.id !== photo.id,
    );
    window.localStorage.setItem("images", JSON.stringify(filteredArray));
    // change badge count
    setCount(filteredArray.length);
  };
  return (
    <div
      className="rounded-lg bg-white transition duration-100 hover:scale-105 hover:cursor-pointer hover:shadow-lg"
      onClick={() => {
        handleClick(urls.small);
        getModalData([
          name,
          username,
          thumb,
          likes,
          pic,
          html,
          totalPics,
          displayText,
        ]);
      }}
    >
      <img
        src={urls.small}
        alt=""
        loading="lazy"
        className="h-3/4 w-full rounded-t-lg object-cover"
      />
      <div className="mx-2 flex h-1/4  items-center justify-center  py-4">
        <p className="my-2 line-clamp-1 h-4 w-3/4 overflow-hidden  px-1 text-xs font-semibold capitalize  text-gray-600 sm:line-clamp-2 sm:h-10  sm:text-sm lg:h-12 lg:text-base">
          {displayText}
        </p>
        <button
          type="button"
          className="w-24 rounded-full bg-indigo-600  py-1 text-white hover:bg-indigo-700 hover:shadow-lg "
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default SingleImage;
