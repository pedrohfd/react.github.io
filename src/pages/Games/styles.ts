import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
`

export const Bar = styled.div`
  display: flex;
  align-items: center;

  margin-top: 74px;
  margin-left: 140px;
  margin-right: 140px;

  & label {
    font-size: 24px;
    font-style: italic;
    font-weight: bold;
  }

  & section {
    margin-right: 950px;
    display: flex;
  }

  & section > label {
    font-size: 17px;
    margin-right: 15px;
  }

  & a {
    text-decoration: none;
    display: flex;
    color: #b5c401;
    flex-direction: row;
  }
`
