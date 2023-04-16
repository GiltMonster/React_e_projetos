import { useContext } from "react"
import ThemeContext from "./ThemeContext";
import './Navbar.css'

export default function Navbar() {

    const { theme, toggleTheme} = useContext(ThemeContext);

    return (

        <div className={theme}>
            <h1>
                {theme}
            </h1>

            <button className={`btn btn-dark`} onClick={toggleTheme}>thema</button>
        </div>

    )
}