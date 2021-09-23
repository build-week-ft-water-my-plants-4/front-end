import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react'
import { mdiSprout } from '@mdi/js';

import { StyledNavContainer, StyledHeaderLinks } from './HeaderStyles';

// import { StyledButton } from '../../theme/Theme';
import { PersonAdd } from '@mui/icons-material';
 import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { AccountBox } from '@mui/icons-material';
import { Login }  from '@mui/icons-material';

const Header = () => {
    return (
        <div>
            {/* <h1>Garden of Eden</h1> */}
            <StyledNavContainer>

                <Link to='/'>
                    <Icon
                    path={mdiSprout}
                    size={4}
                    color={'#629460'}
                />
                </Link>
               
               <StyledHeaderLinks className='header-links'>
                    <nav><Link to='/login' className="btn btn-click"><Login title='Login'sx={{fontSize: 45, color: 'black'}}/></Link></nav>
                    <nav><Link to='/sign-up' className="btn btn-click"><PersonAdd title='Sign Up'sx={{ fontSize: 45, color: 'black'}}/></Link></nav>
                    <Link to='add-plant'>Add Plant Component</Link>
                </StyledHeaderLinks>
            </StyledNavContainer>
        </div>
    );
};

export default Header;