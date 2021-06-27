import { ButtonHTMLAttributes } from "react"
import darkMode from '../assets/images/dark-mode.svg';
import '../styles/button.scss';


type ButtonDarkProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isDark?: boolean
};

export function ButtonDark({ isDark = false, ...props }: ButtonDarkProps) {
    return (
        <button
            className={`button ${isDark ? 'dark' : ''}`}
            {...props}
        >
            <img src={darkMode} alt="" />
        </button>
    )
}
