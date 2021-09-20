import React from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

const theme = {
    colors: {
        mainGreen: "#629460",
        secondaryGreen: "#869D7A",
        accentGreen: "#9BB291",
        mainBrown: "#645244",
        secondaryBrown: "#60492C",
        accentBrown: "#91785D",
    },
    fontSizes: {
        small: "1rem",
        medium: "2rem",
        large: "3rem"
    }
};

const StyledButton = styled.button`
    background-color: ${props => props.theme.colors.accentGreen};
    border: 1px solid ${props => props.theme.colors.secondaryBrown};
    outline: none;
    color: #fff;
    padding: 6px;
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: 400;
    margin: 3px;

    &:hover {
        cursor: pointer;
        background-color: #fff;
        color: ${props => props.theme.colors.accentGreen};
    }
`

const StyledTheme = ({ children }) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
);

export { StyledButton };

export default StyledTheme;
