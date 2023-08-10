import { Tooltip } from "@mui/material";
import { BiSolidLike } from "react-icons/bi";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalImage = ({
  modalData,
  currentImg,
  setCurrentImg,
}: {
  modalData: (string | number)[];
  currentImg: string | null;
  setCurrentImg: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const [name, username, thumb, likes, pic, html, totalPics, displayText] =
    modalData;
  return (
   
      <Modal
        isOpen={!!currentImg}
        onRequestClose={() => setCurrentImg(null)}
        className="absolute  max-h-[680px] max-w-[800px] rounded-lg  bg-white shadow-xl"
        style={customStyles}
      >
        <div className="h-5/6">
          <img
            src={String(thumb)}
            alt=""
            height={599}
            className="max-h-[598.5px] w-full rounded-t-lg object-cover "
          />
        </div>

        <section className="mx-2 flex h-1/6 flex-row items-center justify-between">
          <a href={String(html)} target="_blank" rel="noopener noreferrer">
            <Tooltip title="View Page" placement="right" arrow>
              <div className="flex items-center gap-4 p-2">
                <div className="w-16">
                  <img
                    src={String(pic)}
                    alt=""
                    width={100}
                    height={100}
                    className="w-16 rounded-full border-4 border-indigo-500"
                  />
                </div>
                <div className="text-indigo-600">
                  <div className="whitespace-nowrap font-bold ">{name}</div>
                  <div className="whitespace-nowrap text-sm">@{username}</div>
                </div>
              </div>
            </Tooltip>
          </a>
          <div className="flex h-9 flex-grow">
            <p className="capitalize-first mx-2 hidden text-xs text-indigo-600 sm:inline-block ">
              {displayText}
            </p>
          </div>
          <div className="my-4 flex items-center gap-4 text-indigo-600 sm:flex-col sm:items-start sm:gap-0">
            <div className="flex items-center gap-2 font-bold text-indigo-600 sm:gap-4">
              <BiSolidLike size={26} />
              {likes}
            </div>
            <div className="whitespace-nowrap font-bold">
              Total Pics: {totalPics}
            </div>
          </div>
        </section>
      </Modal>
 
  );
};

export default ModalImage;
