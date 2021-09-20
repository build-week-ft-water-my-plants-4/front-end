import React from 'react';
import { ThemeProvider } from 'styled-components';

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
        small: "1em",
        medium: "2em",
        large: "3em"
    }
};

const StyledTheme = ({ children }) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
);

export default StyledTheme;
