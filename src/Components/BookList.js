import React, { useContext } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext'
import { BookContext } from '../Contexts/BookContext'
const BookList=()=> {
    

     
        const {isLightTheme,dark,light}=useContext(ThemeContext);
        const theme=isLightTheme ? light:dark;
        const {books}=useContext(BookContext);
        return (
            <div className="book-list" style={{background:theme.bg,color:theme.syntax}}>
                <ul>
                    {books.map(book=>{
                        return(
                            <li key={book.id} style={{background:theme.ui}}>{book.ad}</li>
                        )
                    })}
                    
                </ul>
            </div>
        )
    } 
export default BookList;