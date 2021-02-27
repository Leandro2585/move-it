import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 820px;
  height: 100vh;

  margin: auto;
  margin-top: 2rem;
  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
    color: ${props => props.theme.colors.title};
  }
  .table {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    main {
      width: 100%;
      height: 100%;
      max-height: 75vh;
      display: flow-root;
      overflow: auto;
    }
    .row {
      width: 100%;
      height: 80px;
      margin-bottom: 0.5rem;
      background: ${({ theme }) => theme.colors.counterBackground};
      display: grid;
      grid-template-columns: 1fr 5fr 2fr 2fr;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      > div {
        margin: 0 20%;
        > img {
          width: 4rem;
          height: 4rem;
        }
      }
      b {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
      }
      p {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        font-weight: 500;
        i {
          font-style: normal;
          color: ${({ theme }) => theme.colors.blue};
        }
      }
    }
  }
    .header {
        height: 50px;
        background: transparent;
        b {
          font-size: 0.8rem !important;
          color: rgba(0,0,0,0.5);
        }
      }
    }
  }
`
