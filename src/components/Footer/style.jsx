import styled from 'styled-components'
import plab_Logo from '../../img/plab_Logo.svg'
import { media } from '../../styles/GlobalStyles'



export const FooterBody=styled.footer`
display:flex;
flex-direction:column;
width:100%;
height:100%;
color:black;
background-color:#202020;
border-top: 0.1em solid #E10613;
align-items:center;
justify-content;center;

@media (min-width:${media.width.medium}){
  flex-direction:row;
  height:12em;
  }
`
export const Logo = styled.a`
background: url(${plab_Logo});
background-position: center center;
background-repeat: no-repeat;
background-size:contain;
width:300px;
height:75px;
`



export const Menu=styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-content: space-around;
align-items:center;
justify-content: space-between;
width: 100%;
margin: auto;

@media (min-width:${media.width.medium}){
  flex-direction:row;
  width:700px;
  align-items: flex-start;
  }
`

export const Wrapper=styled.div`
    margin-top:1.2em;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: ${(props) => props.justifyContent || "space-evenly"};;
    align-items: center;

    @media (min-width:${media.width.medium}){
       flex-direction: column;
      margin-top:0;
      justify-content: ${(props) => props.justifyContent || "space-evenly"};;
      align-items: center;
      }
`

export const MenuLink=styled.a`
margin-top: 0.5em;
color:white;
cursor:pointer;
text-decoration:none;

 &#principle{
font-weight:900;
cursor:text;
}
`