import { createContext, useState } from "react";

export interface SearchInterface {
  text: string;
  setText: (text: string) => void;
  show: boolean;
  setShow: (show: boolean) => void;
  count: number;
  setCount: (count: number) => void;
}

const defaultState: SearchInterface = {
  text: "",
  setText: () => {},
  show: false,
  setShow: () => {},
  count: 0,
  setCount: () => {},
};

export const MyContext = createContext(defaultState);

const SearchContext = ({ children }: any) => {
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <MyContext.Provider
      value={{ text, setText, show, setShow, count, setCount }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default SearchContext;
