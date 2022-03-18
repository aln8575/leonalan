import styled from 'styled-components'
import { media, palette } from '../../styles/GlobalStyles'
import BurgerSVG from '../../img/BurgerSVG.svg'
import ThemeSVG from '../../img/ThemeSVG.svg'
import MenuSVG from '../../img/Menu_Squaves.svg'
import plab_Logo from '../../img/plab_Logo.svg'
import vector_vt from '../../assets/Vector_vertical.svg'
import vector_hr from '../../assets/Vector_horizontal.svg'

export const Nav = styled.nav`
  visibility: hidden;
  background: #252525;
  background-size: contain;
  user-select: none;
  z-index: 1000;
  position: fixed;
  overflow: hidden;
  top:0;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  
  @media (min-width:${media.width.mobile}){
    align-content:center;
    visibility:visible;
    background:url();
    background-color:${palette.primary.dark};
    top:0;
    width:100%;
    height: 90px;
  }
`

export const Menu = styled.div`
  visibility: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 2.75em;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;
  justify-items: center;
  

  @media (min-width: ${media.width.mobile}) {
    visibility: visible;
    min-height: 2.75em;
    flex-direction: row;
    margin: 0 3.125em;
    width: fit-content;
    text-align: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
    border-top: 5px  ${palette.secondary.light};
  }
`
export const MenuLink = styled.a`
  color: ${palette.primary.light};
  padding: 0 10px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
`

export const Svg = styled.div`
  position: fixed;
  top: 1em;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0px 1em;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  height: fit-content;

  @media (min-width: ${media.width.mobile}) {
    visibility: hidden;
  }
`

export const Burger = styled.a`
  background: url(${BurgerSVG});
  visibility: visible;
  background-position: center center;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  cursor: pointer;
  @media (min-width:${media.width.mobile}) {
    visibility: hidden;
  }
`
export const Theme = styled.a`
  background: url(${ThemeSVG});
  background-position: center center;
  background-size: contain;
  width: 30px;
  height: 30px;
  cursor: pointer;

  &#Theme {
    visibility: hidden;
    @media (min-width:${media.width.mobile}) {
      visibility: visible;
      margin: 0 25px;
    }
  }
`

export const Logo = styled.a`
background: url(${plab_Logo});
background-position: center center;
background-repeat: no-repeat;
background-size:contain;
width:300px;
height:75px;
cursor:pointer;
`

export const Dot = styled.a`
background:url(${vector_hr});
height:5px;
width:25em;
background-position: center center;
background-repeat: no-repeat;
background-size:contain;

@media(min-width:${media.width.mobile}){
  background:url(${vector_vt});
  height:5em;
  width:5px;
}
`
