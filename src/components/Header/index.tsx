import { Container, Button, Green } from './styles'

const Header = () => {
  return (
    <Container>
      <Button to='/games'>TGL</Button>
      <Green />
      <section>
        <Button to='/account'>Account</Button>
        <Button to='/login'>Sair</Button>
      </section>
    </Container>
  )
}

export default Header
