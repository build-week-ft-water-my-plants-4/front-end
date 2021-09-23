import styled from 'styled-components'

export const GrowingPlantImage='https://images.unsplash.com/photo-1611511449908-4835bf24a62c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGdyb3dpbmclMjBwbGFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'

export const StyledImage=styled.img`
object-fit:contain;
max-width:100%;
box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`
export const StyledFormandImage=styled.div`
 display:flex;
margin-left:4%;
 `

 export const StyledButtonContainer=styled.div`
 display:flex;
 margin: 10% 0%;
 `

 export const StyledLoginForm=styled.form`
 display:flex;
 flex-direction:column;
 box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
 background-color:#869D7A;
 width:50%;
 padding:0% 1%;
 height:auto;
 color:white;
 `

 export const StyledLoginLabel=styled.label`
 display:flex;
 flex-direction:column;
 width:90%;
 margin:2% 0%;
 justify-content:space-between;
 `

 export const StyledButtonsforLoginSignup=styled.button`
  background-color: #629460;   border: 1px solid white;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .1) 0 2px 4px 0;
  color: white;
  width:100px;
  font-size: 16px;
  font-weight: 400;
  padding: 10px 25px;
  text-align: center;
  

  transition:transform .4s;
  &:hover{transform: scale(1.1);}
 `