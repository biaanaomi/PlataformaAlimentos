  
import styled from 'styled-components';

export const PageHeaderComponent = styled.header`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.primary};
  @media (min-width: 700px) {
    height: 340px;
  }
`

export const TopBarContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.colors.textInPrimary};
  padding: 1.6rem 0;
  > img {
    height: 1.6rem;
  }
  a {
    height: 3.2rem;
    transition: opacity 0.2s;
  }
  a:hover {
    opacity: 0.6;
  }
  @media (min-width: 700px) {
    max-width: 1100px;
  }
`

export const HeaderContent = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;
  strong {
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
    color: ${props => props.theme.colors.titleInPrimary};
  }
  p {
    max-width: 30rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: ${props => props.theme.colors.textInPrimary}
    margin-top: 2.4rem;
  }
  @media (min-width: 700px) {
    flex: 1;
    max-width: 740px;
    margin: 0 auto;
    padding-bottom: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    strong {
      max-width: 350px;
    }
  }
`