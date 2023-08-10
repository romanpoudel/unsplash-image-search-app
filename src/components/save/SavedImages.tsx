import { Photo } from "../../type";
import SingleImage from "./SingleImage";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { IoArrowBack } from "react-icons/io5";
import ModalImage from "../ModalImage";
import { MyContext } from "../../context/MyContext";

const SavedImages = () => {
  const [currentImg, setCurrentImg] = useState<string | null>(null);
  const [modalData, setModalData] = useState<(string | number)[]>([]);
  const [savedImages, setSavedImages] = useState<any[]>([]); // Use state to manage savedImages
  console.log(savedImages)
  const { setCount } = useContext(MyContext);

  // Load saved images from localStorage when component mounts
  useEffect(() => {
    const savedImagesJSON: any = window.localStorage.getItem("images");
    const parsedSavedImages: any = JSON.parse(savedImagesJSON) || [];
    setSavedImages(parsedSavedImages);
  }, []);
   // Remove an image and update state
   //remove from localStorage
  const handleRemove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>,photoId:number) => {
    e.stopPropagation();
    const savedImagesJSON: any = window.localStorage.getItem("images");
    const parsedSavedImages: any = JSON.parse(savedImagesJSON) || [];
    const filteredArray = parsedSavedImages.filter(
      (savedPhoto: any) => savedPhoto.id !== photoId,
    );
    window.localStorage.setItem("images", JSON.stringify(filteredArray));
    setSavedImages(filteredArray)
    // change badge count
    setCount(filteredArray.length);
  };
  return (
    <div className="mx-auto max-w-screen-2xl px-4">
      <header className="sticky top-0 mb-4 flex items-center justify-center  bg-gray-100 py-3 text-center text-3xl font-bold text-indigo-600 shadow-lg ">
        <div className="absolute left-4 ">
          <Link to="/">
            <IoArrowBack />
          </Link>
        </div>
        <h1>Saved Images</h1>
      </header>
      <ModalImage
        modalData={modalData}
        currentImg={currentImg}
        setCurrentImg={setCurrentImg}
      />
      <main className=" mb-8 grid  grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
        {savedImages.map((image: Photo) => (
          <SingleImage
            photo={image}
            key={image.id}
            handleClick={setCurrentImg}
            getModalData={setModalData}
            handleRemove={handleRemove} // Pass the remove handler
          />
        ))}
      </main>
    </div>
  );
};

export default SavedImages;
