import styled from 'styled-components'

export const ProgramsBody= styled.section`
display: flex;
min-height: fit-content;
margin-top: 25vh;
flex-direction: column;
flex-wrap: wrap;
align-content: center;
align-items: center;
justify-content: center;

> #Projects{
  margin: 0;
  font-size: 2rem;
  @media (min-width:1370px){
    font-size: 2.5rem;
  }
}
`