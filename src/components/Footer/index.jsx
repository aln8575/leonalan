import React from 'react'
import { FooterBody,Logo, Menu, MenuLink, Wrapper } from './style'
import { Text } from '../../styles/GlobalStyles'

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
        <Wrapper justifyContent="flex-end">
       <Text align="center">Feito com &#x1F496; pmenosLab. ©Copyright 2022 pmenosLab.</Text>
       </Wrapper>
     </FooterBody>
     )
}
