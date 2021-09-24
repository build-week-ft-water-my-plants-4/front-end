import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react'
import { mdiSprout } from '@mdi/js';

import { AddPlantIcon, StyledNavContainer, StyledHeaderLinks } from './HeaderStyles';

// import { StyledButton } from '../../theme/Theme';
import { PersonAdd } from '@mui/icons-material';
import { AccountCircle } from '@mui/icons-material';
import { ExitToApp } from '@mui/icons-material';

const Header = (props) => {

    const { userLoggedIn } = props;
    
    return (
        <div>
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
                        <Link to='/sign-up'><PersonAdd sx={{ fontSize: 45, color: 'black'}}/></Link>
                        <Link to='/login'><AccountCircle sx={{fontSize: 45, color: 'black'}}/></Link>
                        </>
                        : 
                        <>
                        <Link to='/profile-page'><AccountCircle sx={{fontSize: 45, color: 'black'}}/></Link>
                        <Link to='add-plant'><img src={AddPlantIcon} alt='add plant icon' style={{width: "45px"}}/></Link>
                        <Link to='/logout'><ExitToApp sx={{ fontSize: 45, color: 'black'}}/></Link>
                        </>
                    }

                    
                </StyledHeaderLinks>
                
            </StyledNavContainer>
        </div>
    );
};

export default Header;