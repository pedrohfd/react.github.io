import { Fragment } from 'react'

import { LinkButton } from './styles'

interface ButtonProps {
  name: string
  isGreen: boolean
  route: string
}

const Button = ({ name, isGreen, route }: ButtonProps) => {
  return (
    <Fragment>
      <LinkButton to={route} isGreen={isGreen}>
        {name}
      </LinkButton>
    </Fragment>
  )
}

export default Button
