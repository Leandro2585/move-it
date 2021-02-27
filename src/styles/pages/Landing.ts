import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.blue};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 40% 30%;
  grid-gap: 15%;
  > img {
    margin:auto;
    margin-left: -20%;
  }
  > div {
    display: flex;
    flex-direction: column;
    margin: 15vh auto;
    h1 {
      margin-top: 5rem;
      color: ${({ theme }) => theme.colors.white};
    }
    span {
      display: flex;
      margin: 2.5rem 0;
      color: ${({ theme }) => theme.colors.textHighlight};
      img {
        padding-right: 1rem;
      }
      p {
        width: 14rem;
        flex-wrap: wrap;
      }
    }
  }
`;
