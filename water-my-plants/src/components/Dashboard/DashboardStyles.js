import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

export const StyledDash = styled.div`
.plant-card{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-shadow: 6px 4px 2px 2px;
    margin: 2%;
    margin-left: 30%;
    margin-right: 30%;
    border-radius: 10px;
    height: 60px;
    color: lightgreen;
    background-color: ${props => props.theme.colors.mainBrown};
}
.edit-btn{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
`