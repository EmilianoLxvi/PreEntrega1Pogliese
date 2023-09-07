import { AppBar, Button, Toolbar, Typography} from '@mui/material';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

import Cartwitget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (<AppBar>
           <Toolbar className='toolbar-navbar' sx={{display:"flex", justifyContent:"space-around"}}>
            
            
            <Typography sx={{color:"Yellow"}}>
            StreetRules IND


            </Typography>
            <Button sx={{color: 'white'}}>
            Inicio
            </Button >
            <Button sx={{color: 'white'}}>
            Productos
            </Button>
            <Button sx={{color: 'white'}}>
            Envios
            </Button>
           <Cartwitget />
           </Toolbar>

    </AppBar> );

}

export default Navbar;
