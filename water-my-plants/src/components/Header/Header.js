import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react'
import { mdiSprout } from '@mdi/js';

import { StyledNavContainer, StyledHeaderLinks } from './HeaderStyles';

// import { StyledButton } from '../../theme/Theme';
import { PersonAdd } from '@mui/icons-material';
import { AccountCircle } from '@mui/icons-material';
import { ExitToApp } from '@mui/icons-material';

const Header = (props) => {
    const { userLoggedIn } = props;
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

               <StyledHeaderLinks>
                    {
                        !userLoggedIn ?  
                        <>
                        <Link to='/sign-up'><PersonAdd title='Sign Up'sx={{ fontSize: 45, color: 'black'}}/></Link>
                        <Link to='/login'><AccountCircle title='Login'sx={{fontSize: 45, color: 'black'}}/></Link>
                        </>
                        : <><Link to='/logout'><ExitToApp sx={{ fontSize: 45, color: 'black'}}/></Link></>
                    }

                    
                </StyledHeaderLinks>
                
            </StyledNavContainer>
        </div>
    );
};

export default Header;