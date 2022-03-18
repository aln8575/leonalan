import styled from 'styled-components'
import { media } from '../../styles/GlobalStyles'

export const HomeBody= styled.section`
height:75vh;
width:100%;
display:flex;
display: flex;
flex-direction: column;
align-content: space-between;
justify-content: center;
align-items: flex-start;

@media (min-width:${media.width.mobile}){
  height:100vh;
  }
`

export const Wrapper=styled.div`
display:flex;
width:100%;
`