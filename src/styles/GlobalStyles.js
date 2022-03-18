import styled, { createGlobalStyle } from 'styled-components'

// variables Colors

export const palette = {
  primary: {
    main: '#151515',
    light: '#F4F4F4',
    dark: '#151515',
  },
  secondary: {
    main:'#e10613',
    light:'#009EE1',
    dark:'#e10613',
  },
}

export const fonts = {
  weight: {
    ExtraLight: '300',
    Light: '400',
    Normal: '500',
    Large: '600',
  },
  size: {
    UltraSmall: '1rem',
    small: '1.2rem',
    Normal: '1.4rem',
    Large: '2rem',
  },
}

export const GlobalStyles = createGlobalStyle`
::-webkit-scrollbar{
        width: 10px;
    }

::-webkit-scrollbar-track {
    background: rgba(37, 37, 37, 0.0);
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 25px;
}

::-webkit-scrollbar-thumb:hover {
  background: ${palette.primary.light};
}

::-webkit-scrollbar-thumb:scroll {
  background: ${palette.primary.light};
}

html{
  scroll-behavior: smooth;
}

body{
    box-sizing: border-box;
    font-family: "Nunito";
    margin: 0;
    background-color: ${palette.primary.dark};
    color: ${palette.primary.light};
    overflow-x: hidden;
    scroll-behavior: smooth;
    overflow-y: overlay;
   
}
`

export const Title = styled.h1`
  text-align: center;
  font-weight: ${fonts.weight.Normal};

  @media (min-width: 600px) {
    font-size: 2.5rem;
  }
`

export const Span = styled.p`
  font-size: small;
  text-align: end;
  padding-right: 1em;
  font-weight: ${fonts.weight.Light};

  @media (min-width: 600px) {
    font-size: 1rem;
  }
`

export const Text = styled.p`
  font-weight: ${fonts.weight.Light};
  padding: 0 0.3em;
  text-align: ${props => props.align};
  font-size: ${fonts.size.UltraSmall};

  @media (min-width: 600px) {
    font-size: ${fonts.size.Normal};
    max-width: 30em;
  }
`

export default GlobalStyles
