import React,{createContext,useState} from 'react';


export const BookContext=createContext();

const BookContextProvider= (props)=>{
    const [books,setBooks]=useState([
         {ad: 'Var Mısın',id:1},
         {ad: 'Hayvan çiftliği ',id:2},
         {ad: 'bir ömür nasıl yaşanır ',id:3}

    ])  ///--->usestate..

    return (
        <BookContext.Provider value={{books}}>
          {props.children}
        </BookContext.Provider>
    )
}


export default BookContextProvider


