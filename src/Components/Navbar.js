import React from 'react'
import {ThemeContext} from '../Contexts/ThemeContext'




export default function Navbar() {
  return (
    <ThemeContext.Consumer>{(context)=>{

            const {isLightTheme,dark,light}=context;
            const theme= isLightTheme? light:dark;

            return(
                <nav style={{background:theme.ui,color:theme.syntax}}>
                <h1>
                    AOS App
                </h1>
                <ul>
                    <li>
                        Anasayfa
                    </li>
                    <li>
                        Hakkımızda
                    </li>
                    <li>
                        İletişim
                    </li>
                </ul>
            </nav>

            )


    }}</ThemeContext.Consumer>
  )
}
