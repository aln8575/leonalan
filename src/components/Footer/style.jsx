import styled from 'styled-components'
import plab_Logo from '../../img/plab_Logo.svg'



export const FooterBody=styled.footer`
position:absolute
width:100%;
height:12em;
bottom:0;
color:black;
background-color:#202020;
border-top: 0.1em solid #E10613;
`
export const Logo = styled.a`
margin-top: 10%;
position:absolute;
background: url(${plab_Logo});
background-position: center center;
background-repeat: no-repeat;
background-size:contain;
width:300px;
height:75px;
`



export const Menu=styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-content: space-around;
align-items: flex-start;
justify-content: space-between;
width: 700px;
margin: auto;
`

export const Wrapper=styled.div`
    margin: .7em;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: space-evenly;
    align-items: flex-start;
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