import React from 'react'
import { FooterBody,Logo, Menu, MenuLink, Wrapper } from './style'

export default function Footer() {
  return(
     <FooterBody>
       <Wrapper>
      <Logo/>
      </Wrapper>
       <Menu>
         <Wrapper>
         <MenuLink id='principle'>Inicio</MenuLink>
         <MenuLink href='#'>Home</MenuLink>
         </Wrapper>
           <Wrapper>
         <MenuLink id='principle'>Sobre Nós</MenuLink>
         <MenuLink href='#'>informações da Empresa</MenuLink>
         <MenuLink href='#'>Contato</MenuLink>
         </Wrapper>
         <Wrapper>
         <MenuLink id='principle'>Suporte</MenuLink>
         <MenuLink href='#'>FAQ</MenuLink>
         <MenuLink href='#'>Telefones</MenuLink>
         </Wrapper>
       </Menu>
     </FooterBody>
     )
}
