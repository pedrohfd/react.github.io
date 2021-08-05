import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface ColorProps {
  isGreen: boolean
}

export const LinkButton = styled(Link)<ColorProps>`
  background: transparent;
  margin-top: 44px;
  border: 0;
  color: ${props => (props.isGreen ? '#B5C401' : '#707070')};
  font-size: 35px;
  font-style: italic;
  font-weight: bold;
  text-decoration: none;
`
