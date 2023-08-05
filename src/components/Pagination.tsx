import Pagination from "@mui/material/Pagination";
import {  useContext } from "react";
import { PageContext } from "../context/PageContext";

const pagination = () => {
  const { page, setPageno } = useContext(PageContext);
  // useEffect(() => {
  //   setPageno(pages);
  // }, [pages]);
  const handleChange = (e: any, p: any) => {
    console.log(e, p);
    
    setPageno(p)
  };
  return (
    <div className="flex justify-center">
      <Pagination
        count={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </div>
  );
};

export default pagination;
