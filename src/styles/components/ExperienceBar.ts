import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  margin-left: 4.25rem;
  span {
    font-size: 1rem;
  }
  & > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.grayLine};
    margin: 0 1.5rem;
    position: relative;
    & > div {
      height: 4px;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors.green};
    }
  }
`;

export const ExperienceLabel = styled.span`
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
`;
