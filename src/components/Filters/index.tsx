import { Fragment } from 'react'
import { Button } from './styles'

interface ButtonProps {
  name: string
}

const Filters = ({ name }: ButtonProps) => {
  return (
    <Fragment>
      <Button>{name}</Button>
    </Fragment>
  )
}

export default Filters
