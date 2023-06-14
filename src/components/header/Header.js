import './Header.scss';
import { Menu } from 'semantic-ui-react';

export default function Header() {
    return(
        <div className='header-menu'>
            <Menu secondary>
                <Menu.Item name='Inicio' onClick={()=> console.log("haciendo click en el menu")} />
                <Menu.Item name='Comics' onClick={()=> console.log("haciendo click en el comics")} />
                <Menu.Item name='Series' onClick={()=> console.log("haciendo click en el series")} />
            </Menu>
        </div>
    );

}