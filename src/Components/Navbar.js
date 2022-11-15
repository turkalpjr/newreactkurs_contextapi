import React, { useContext } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext'
import { AuthContext } from '../Contexts/AuthContext'


const Navbar = () => {

const { isAuthenticated, toggleAuth } = useContext(AuthContext);
const { isLightTheme, dark, light } = useContext(ThemeContext);
const theme = isLightTheme ? light : dark;

return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>
            AOS App
        </h1>
        <div onClick={toggleAuth}> {isAuthenticated ? "Çıkış Yap" : "Giriş Yap"} </div>
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




}

export default Navbar ;