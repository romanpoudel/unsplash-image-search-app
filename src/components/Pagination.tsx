import Pagination from "@mui/material/Pagination";
import { useContext } from "react";
import { PageContext } from "../context/PageContext";
import { MyContext } from "../context/MyContext";

const pagination = () => {
  const { page, setPageno } = useContext(PageContext);
  const { text} = useContext(MyContext);
  // useEffect(() => {
  //   setPageno(pages);
  // }, [pages]);
  //set current page number
  const handleChange = (_e: any, p: any) => {
    // console.log(_e, p);

    setPageno(p);
  };
  return (
    <div className="flex justify-center">
      {text!=="" && !!page && (
        <Pagination
          count={page}
          variant="outlined"
          shape="rounded"
          size="large"
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default pagination;
