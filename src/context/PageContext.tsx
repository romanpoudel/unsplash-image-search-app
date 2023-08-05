import { createContext, useState } from 'react';

export interface PageInterface {
    page:number;
    setPage:(page: number)=>void;
    pageno:number;
    setPageno:(pageno: number) => void;
}

const defaultState:PageInterface=
    {
        page:1,
        setPage:()=>{},
        pageno:1,
        setPageno:()=>{}
    }  

export const PageContext = createContext(defaultState);


const PaginationContext = ({children}:any)=>{
    const [page,setPage]=useState(1);
    const [pageno,setPageno]=useState(1);
    return (
        <PageContext.Provider value={{page,setPage,pageno,setPageno}}>
            {children}
        </PageContext.Provider>
    )
}
export default PaginationContext;