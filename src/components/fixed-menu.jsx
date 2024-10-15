import {House, CircleUserRound, Book, Code} from 'lucide-react';
import DarkModeToggle from "@/components/dark-mode-toggle";

const FixedMenu = ({style}) => {
    return (
        <ul style={style}
            className="z-50 fixed right-3 bottom-3 menu bg-primary dark:bg-gray-500 rounded-box shadow-sm grid gap-1 md:scale-100 sm:scale-75">
            <li>
                <a className="tooltip tooltip-left" data-tip="Home" href="#home">
                    <House className="w-5 text-gray-50"/>
                </a>
            </li>
            <li>
                <a className="tooltip tooltip-left" data-tip="Skill" href="#skills">
                    <Book className="w-5 text-gray-50"/>
                </a>
            </li>
            <li>
                <a className="tooltip tooltip-left" data-tip="Projects" href="#projects">
                    <Code className="w-5 text-gray-50"/>
                </a>
            </li>
            <li>
                <a className="tooltip tooltip-left" data-tip="Contact Me" href="#contact">
                    <CircleUserRound className="w-5 text-gray-50"/>
                </a>
            </li>

        </ul>
    );
};

export default FixedMenu;
