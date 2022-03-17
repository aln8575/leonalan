import React from 'react'
import { Nav, Menu, MenuLink, Burger, Svg, Theme, Logo } from './style'

function Navbar() {
  return (
    <Nav id="Nav">
    <Menu id="Menu">
      <Logo/>
      <MenuLink href="/">Home</MenuLink>
      <MenuLink href="/sobre">Sobre</MenuLink>
      <MenuLink href="/fastdating">Fastdating</MenuLink>
      <MenuLink href="/programas">Programas</MenuLink>
    </Menu>
    {/*<Theme id="Theme" onClick={() => console.log('Tema Mudado2')}/>*/} 
    <Svg id="Nav_Mobile">
      <Burger onClick={() => console.log('Menu')} />
      {/*<Theme onClick={() => console.log('Tema Mudado')} />*/}
    </Svg>
  </Nav>
  )
}

export default Navbar