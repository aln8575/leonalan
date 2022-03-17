import React, { useEffect, useState } from 'react'
import Perfil from '../../img/Perfil.png'
import { Span, Text, Title } from '../../styles/GlobalStyles'
import {
  AboutMeWrapper,
  Background,
  Bubble,
  Bubbles,
  Carousel,
  Content,
  ContentWrapper,
  Name,
  Profile,
  ProfileWrapper,
  TextWrapper,
} from './style'

function AboutMe() {

  
  const word = [ 
    'Front-end', 
    'Back-end', 
    'Designer'
  ]; //Array das palavras
   
  
  const [index, setindex] = useState(0); //index para indicar a posição do Array Word[index]
  const [words, setWords] = useState(''); // estado inicial das palavras

  const carouselWord = () => {
    const pos = index + 1 === word.length 
      ? 0 
      : index + 1; //se o index + 1 for igual ao tamanho do array == 3, então vai pra zero, caso contrario add +1
    setindex(pos); //addicionando a constante na posição do array
    document.getElementById("Carousel").animate(
      [{opacity:0,transform:"translate(-1em, 0)" },{opacity:1, transform:"translate(0, 0)"}],
      {duration: 900}
    ) //Animação de opacidade e indo da esquerda pra direita
    document.getElementById("Carousel").animate(
      [{opacity:1,transform:"translate(0, 0)" },{opacity:0, transform:"translate(1em, 0)"}],
      {delay: 2200, duration: 800},
    )
  }

  setTimeout(carouselWord, 2900) // delay para cada iteração
  

  useEffect(() => {
    setWords(word[index]);
    // eslint-disable-next-line
  }, [index]);


  return (
    <ContentWrapper id="Section-A">
      <Title id="Who">Quem?</Title>
      <Background id="Background">
        <Content id="Content">
          <Name id="My_Name">Leony Leal</Name>
          <AboutMeWrapper id="About_Me_Wrapper">
            <TextWrapper id="Text_Wrapper">
              <Text id="Description">
                Desenvolvedor Front-end e Back-End e tenho como objetivo
                colocação na área como Desenvolvedor Junior. procuro adquirir
                novas habilidades para expandir o meu leque de habilidades que
                tragam retorno de valor em projetos.{' '}
              </Text>
              <Span id="Phrase">Focado em desenvolver o melhor de mim</Span>
            </TextWrapper>
            <ProfileWrapper id="DivWrapper">
              <Profile src={Perfil} id="Profile_Photo"></Profile>
              <Carousel id="Carousel">{words}</Carousel>
            </ProfileWrapper>
          </AboutMeWrapper>
        </Content>
        <Bubbles id="Bubbles">
          <Bubble id="Bubble" />
          <Bubble id="Bubble" />
          <Bubble id="Bubble" />
          <Bubble id="Bubble" />
          <Bubble id="Bubble" />
          <Bubble id="Bubble" />
          <Bubble id="Bubble" />
          <Bubble id="Bubble" />
          <Bubble id="Bubble" />
        </Bubbles>
      </Background>
    </ContentWrapper>
  )
}

export default AboutMe
