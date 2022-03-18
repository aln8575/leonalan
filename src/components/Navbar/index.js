import React from 'react'
import { Nav, Menu, MenuLink, Burger, Svg, Theme, Logo,Dot } from './style'
import react, {useState} from "react"

function Navbar() {
  const[menu,setMenu]= useState(false)


  const onMenuClick = react.useCallback(()=>{
    setMenu(v => !v);
  })

  return (
    <Nav id="Nav">
    <Menu id="Menu">
      <Logo href='/'/>
      <Dot/>
      <MenuLink href="/">Inicio</MenuLink>
      <MenuLink href="/sobre">Sobre</MenuLink>
      <MenuLink href="/fastdating">Fastdating</MenuLink>
      <MenuLink href="/programas">Programas</MenuLink>
    </Menu>
    {/*<Theme id="Theme" onClick={() => console.log('Tema Mudado2')}/>*/} 
    <Svg id="Nav_Mobile">
      <Burger onClick={() => console.log(menu? "visible": "hidden")} />
      {/*<Theme onClick={() => console.log('Tema Mudado')} />*/}
    </Svg>
  </Nav>
  )
}

export default Navbar