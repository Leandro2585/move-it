import styled, { css } from 'styled-components';

interface CountdownButtonProps {
  isActive?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.title};
  & > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;
export const TimeContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: ${({ theme }) => theme.colors.counterBackground};
  box-shadow: 0 0 68px rgba(0,0,0,0.05);
  border-radius: 5px;
  font-size: 8.5rem;
  text-align: center;
  span {
    flex: 1;
  }
  span:first-child {
    border-right: 1px solid #d7d8da;
  }
  span:last-child {
    border-left: 1px solid #d7d8da;
  }
`;
export const StartCountdownButton = styled.button<CountdownButtonProps>`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 5px;
  font-size: 1.25rem;
  font-weight: 600;
  transition: background-color 0.1s;
  ${props => props.isActive ?
    css`
      background-color: ${({ theme }) => theme.colors.counterBackground};
      color: ${({ theme }) => theme.colors.title};
    `
    :
    css`
      background-color: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.white};
      `
    }
  svg {
    margin-left: 0.5rem;
  }
  &:not(:disabled):hover {
    ${props =>
      props.isActive ?
      (
      css`
        background-color: ${({ theme }) => theme.colors.red};
        color:  ${({ theme }) => theme.colors.white};
      `
    ):(
      css`
        background: ${({ theme }) => theme.colors.blueDark}
      `)
    }
  }
}
&:disabled {
  background: ${({ theme }) => theme.colors.counterBackground};
  color: ${({ theme }) => theme.colors.text};
  cursor: not-allowed;
  border-bottom: 4px solid ${({ theme }) => theme.colors.green};
  svg {
    color: ${({ theme }) => theme.colors.green};
  }
}
`;
