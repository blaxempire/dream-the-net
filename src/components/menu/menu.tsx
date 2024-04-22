import React, { useState } from 'react';
import './menu.css';
import { Link } from 'react-router-dom';


const Menu = (options: { title: string; link: string; }[]) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const [selectOption, setSelectedOption] = useState('')

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen)
    }

    const handleOptionClick = (link: string) => {
        setSelectedOption(link);
        setSidebarOpen(false);
     };

    const menuArray = (options) => {
        let arrayLL = [];

        arrayLL = options?.map((option: {title: string, link: string}, index: number) => {
            console.log(option)
            return (
                    <li key={index} onClick={() => handleOptionClick(option.link)}>
                        <Link to={option.link}> {option.title}</Link>
                    </li>

            )
        })

        return arrayLL
}
        console.log(options)
    return (
        <div className="dropdown">
            <button onClick={toggleSidebar} className="dropdown-button">
                {options[0].title}
            </button>
            <ul className="dropdown-menu">
             {isSidebarOpen ? menuArray(options) : null}
            </ul>
        </div>
    )
}
export default Menu