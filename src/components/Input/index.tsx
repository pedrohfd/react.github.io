import React from 'react'

import { Container } from './styles'

interface InputProps {
  name: string
}

const Input = ({ name }: InputProps) => {
  return <Container placeholder={name} />
}

export default Input
