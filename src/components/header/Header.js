import './Header.scss';
import { Menu } from 'semantic-ui-react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export default function Header() {
    const currentPath = useLocation();
    console.log(currentPath);
    const finalCurrentPath = currentPath.pathname.replace("/", "");
    const {activeItem, setActiveItem} =useState("");
    const history = useHistory();
    const itemClick = (e, {name}) => {
        setActiveItem (name);
        history.push(name);
    };
    
    return(
        <div className='header-menu'>
            <Menu secondary>
                <Menu.Item name='Inicio' active={activeItem==="Inicio"} onClick={itemClick} />
                <Menu.Item name='Comics' active={activeItem==="Comics"}onClick={itemClick} />
                <Menu.Item name='Series' active={activeItem==="Series"}onClick={itemClick} />
            </Menu>
        </div>
    );

}