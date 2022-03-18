import styled from 'styled-components'
import backgroundSvg from "../../assets/Background.svg"
import { media, palette } from '../../styles/GlobalStyles'

export const BannerBody=styled.div`
background:url(${backgroundSvg});
background-repeat:no-repeat;
background-size:cover;
background-position:center center;
width:100%;
height:30vh;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: space-evenly;
align-items: center;

@media (min-width:${media.width.mobile}){
flex-direction:row;
height:40vh;
}
`

export const BannerPhoto=styled.img`
width:25em;

@media (min-width:${media.width.mobile}){
 width:45
  }
`