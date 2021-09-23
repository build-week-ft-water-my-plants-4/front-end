import styled from "styled-components";

export const GeneralStyles = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
`;

export const FormStyles = styled.form`
  //   border: 1px solid black;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
`;

export const AddPlantButton = styled.button`
  cursor: pointer;
  height: fit-content;
  width: fit-content;
  padding: 15px;
  margin: 0 10px;
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: bold;
  background: linear-gradient(#fff, #869d7a);
  border: none;
  border-radius: 10px;
  text-transform: uppercase;

  &:hover {
    background: ${(props) => props.theme.colors.mainGreen};
    transition: background-color 1s ease-in-out;
  }
`;

export const StyledInputs = styled.label`
  margin: 10px 0;
  padding-bottom: 10px;
  font-style: italic;
`;

export const StyledHeading = styled.h2`
  color: ${(props) => props.theme.colors.mainGreen};
  font-size: ${(props) => props.theme.fontSizes.large};
`;

export const ButtonCenter = styled.div`
  display: flex;
  justify-content: center;
`;
