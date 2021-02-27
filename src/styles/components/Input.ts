import styled from 'styled-components';

export const InputContainer = styled.div`
  width: calc(340px + 3rem);
  height: 80px;
  box-sizing: border-box;
  background: linear-gradient(90deg, hsla(235, 44%, 50%, 1) 0%,hsla(235, 44%, 50%, 0.2)  100%);
  input {
    background: none;
    border: none;
    height: 80px;
    width: calc(260px + 3rem);
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.white};
    &::placeholder {
      color: ${({ theme }) => theme.colors.textHighlight};
    }
  }
  button {
    width: 80px;
    height: 80px;
    background: ${({ theme }) => theme.colors.blueDark};
    border: 0;
    color: ${({ theme }) => theme.colors.white};
    transition: background 0.2s;
    &:hover {
      background: ${({ theme }) => theme.colors.green};
    }
  }
`;
