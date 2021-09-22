import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react'
import { mdiSprout } from '@mdi/js';

import { StyledNavContainer, StyledHeaderLinks } from './HeaderStyles';

import { StyledButton } from '../../theme/Theme';
import { PersonAdd } from '@mui/icons-material';
 import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { AccountBox } from '@mui/icons-material';

const Header = () => {
    const token = localStorage.getItem("token")
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
                    <nav><Link to='/login' className="btn btn-click"><AccountBox sx={{fontSize: 45, color: '#45492C'}}/></Link></nav>
                    <nav><Link to='/sign-up' className="btn btn-click"><PersonAdd sx={{ fontSize: 45, color: '#60492C'}}/></Link></nav>
                </StyledHeaderLinks>

                {/* <Link to='/add-plant' className="btn btn-click">Plants</Link>*/}

                <Link to='/logout' className="btn btn-click">Logout</Link>

            </StyledNavContainer>
        </div>
    );
};

export default Header;