import { createContext, useState } from 'react';

export interface SearchInterface {
    text:string;
    setText:(text: string)=>void;
}

const defaultState:SearchInterface=
    {
        text:'',
        setText:()=>{}
    }  

export const MyContext = createContext(defaultState);


const SearchContext = ({children}:any)=>{
    const [text,setText]=useState("");
    return (
        <MyContext.Provider value={{text,setText}}>
            {children}
        </MyContext.Provider>
    )
}
export default SearchContext;