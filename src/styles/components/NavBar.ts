import styled from 'styled-components';

export const Header = styled.header`
  height: 100%;
  width: 4.5rem;
  position: absolute;
  background: ${({ theme }) => theme.colors.navBar};
  display: grid;
  grid-template-rows: 10% 90%;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  nav {
    margin:auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    > div {
      padding: 1rem;
      width: 4.5rem;
      text-align: center;
      &:hover:before {
        content: '';
        position: absolute;
        left: 0;
        height: 32px;
        width: 4px;
        background: ${({ theme }) => theme.colors.blue};
        border-radius: 0 6px 6px 0;
      }
    }
    svg {

      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;
