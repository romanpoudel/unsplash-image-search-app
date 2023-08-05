import { createContext } from 'react';

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