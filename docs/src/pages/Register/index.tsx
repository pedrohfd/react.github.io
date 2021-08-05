import Title from '../../components/Title'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container } from './styles'

const Register = () => {
  return (
    <Container>
      <Title />
      <div>
        <form>
          <div>Registration</div>
          <Input name={'Name'} />
          <Input name={'Email'} />
          <Input name={'Password'} />

          <Button route='/home' isGreen={true} name={'Register'} />
        </form>
        <section>
          <Button route='/login' isGreen={false} name={'Back'} />
        </section>
      </div>
    </Container>
  )
}

export default Register
