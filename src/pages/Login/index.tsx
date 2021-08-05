import Title from '../../components/Title'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container } from './styles'

const Login = () => {
  return (
    <Container>
      <Title />
      <div>
        <form>
          <div>Authentication</div>
          <Input name={'Email'} />
          <Input name={'Password'} />
          <section>
            <Button
              route='/reset-password'
              isGreen={false}
              name={'I forget my password'}
            />
          </section>

          <Button route='/games' isGreen={true} name={'Log in'} />
        </form>
        <section>
          <Button route='/register' isGreen={false} name={'Sign Up'} />
        </section>
      </div>
    </Container>
  )
}

export default Login
