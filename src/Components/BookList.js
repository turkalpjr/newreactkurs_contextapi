import React, { Component } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext'
export default class BookList extends Component {
    static contextType = ThemeContext;

    render() {
        const {isLightTheme,dark,light}=this.context;
        const theme=isLightTheme ? light:dark;
        return (
            <div className="book-list" style={{background:theme.bg,color:theme.syntax}}>
                <ul>
                    <li style={{background:theme.ui}}>   Var mısın</li>
                    <li style={{background:theme.ui}}>   Hayvan çiftliği </li>
                    <li style={{background:theme.ui}}> Bir ömür nasıl yaşanır</li>
                </ul>
            </div>
        )
    }
}
