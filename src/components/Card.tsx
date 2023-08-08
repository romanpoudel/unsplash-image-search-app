import { Dispatch, SetStateAction, useContext } from "react";
import { MyContext } from "../context/MyContext";
import { Photo } from "../type";

const Card = ({
  photo,
  handleClick,
  getModalData,
}: {
  photo: Photo;
  handleClick: Dispatch<SetStateAction<string | null>>;
  getModalData: Dispatch<SetStateAction<(string | number)[]>>;
}) => {
  const { setShow } = useContext(MyContext);
  const { urls, description, alt_description } = photo;
  //for modal
  const name = photo.user.name;
  const username = photo.user.username;
  const thumb = photo.urls.regular;
  const likes = photo.likes;
  const pic = photo.user.profile_image.large;
  const html = photo.user.links.html;
  const totalPics = photo.user.total_photos;
  //display alt_desctiption if description is null
  const displayText = description || alt_description;

  //save to localStorage
  const handleSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
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
    <div
      className="rounded-lg bg-white"
      onClick={() => {
        handleClick(urls.thumb);
        getModalData([name, username, thumb, likes, pic, html, totalPics]);
      }}
    >
      <img
        src={urls.regular}
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
