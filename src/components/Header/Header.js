import './Header.scss';
import { Menu } from 'semantic-ui-react';
import { useState } from 'react';
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";

export default function Header() {
    const currentPath = useLocation();
    console.log(currentPath);
    const finalCurrentPath = currentPath.pathname.replace("/", "");
    const history = useHistory();
    const {activeItem, setActiveItem} =useState("finalCurrentPath");
    const handleItemClick = (e, {name}) => {
        setActiveItem (name);
        history.push(name);
    };
    
    return(
        <div className='header-menu'>
            <Menu secondary>
                <Menu.Item name='Inicio' active={activeItem==="Inicio"} onClick={handleItemClick} />
                <Menu.Item name='Comics' active={activeItem==="Comics"} onClick={handleItemClick} />
                <Menu.Item name='Series' active={activeItem==="Series"} onClick={handleItemClick} />
            </Menu>
        </div>
    );

}