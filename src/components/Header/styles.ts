import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 76px;
  border-bottom: 2px solid #ebebeb;

  & section {
    margin-right: 150px;
  }

  & section > a {
    margin-left: 100px;
    font-size: 20px;
  }
`

export const Button = styled(Link)`
  margin-left: 150px;
  font-size: 44px;
  font-style: italic;
  font-weight: bold;
  text-decoration: none;
  color: #707070;
`

export const Green = styled.div`
  height: 7px;
  width: 110px;
  background: #b5c401;
  position: absolute;
  left: 140px;
  top: 74px;
  border-radius: 6px;
`
