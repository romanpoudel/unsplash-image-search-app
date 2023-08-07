import { createContext, useState } from 'react';

export interface SearchInterface {
    text:string;
    setText:(text: string)=>void;
    show:boolean;
    setShow:(show: boolean)=>void;
}

const defaultState:SearchInterface=
    {
        text:'',
        setText:()=>{},
        show:false,
        setShow:()=>{}
    }  

export const MyContext = createContext(defaultState);


const SearchContext = ({children}:any)=>{
    const [text,setText]=useState("");
    const [show,setShow]=useState(false);
    return (
        <MyContext.Provider value={{text,setText,show,setShow}}>
            {children}
        </MyContext.Provider>
    )
}
export default SearchContext;