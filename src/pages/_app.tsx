// styles
import { useEffect, useState } from 'react'
import ToggleTheme from '../components/ToggleTheme/ToggleTheme'
import '../styles/globals.scss'
import StyleDark from "../styles/themes/dark"
import StyleLight from "../styles/themes/light"

function App({ Component, pageProps }) {

    const [theme, setTheme] = useState('light')

    function onClickToggle() {
        if (theme == 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    return (
        <>
            {theme == 'light' ? <StyleDark /> : <StyleLight />}
            <ToggleTheme onClick={onClickToggle} theme={theme} />
            <Component {...pageProps} />
        </>
    )
}

export default App