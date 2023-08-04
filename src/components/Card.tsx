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
  const { urls, description, alt_description } = photo;
  //display alt_desctiption if description is null
  const displayText = description || alt_description;
  return (
    <div className="rounded-lg bg-white">
      <img src={urls.thumb} alt="" className="w-full rounded-t-lg h-3/4 object-cover" />
      <div className="h-1/4 flex items-center  justify-center">
      <p className="px-4 my-2 h-4 sm:h-10 lg:h-12 text-center text-xs sm:text-sm lg:text-base font-semibold  text-gray-600 line-clamp-1 sm:line-clamp-2  overflow-hidden capitalize ">
        {displayText}
      </p>
      </div>
    </div>
  );
};

export default Card;
