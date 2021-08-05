import Title from '../../components/Title'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container } from './styles'

const ResetPassword = () => {
  return (
    <Container>
      <Title />
      <div>
        <form>
          <div>Reset password</div>
          <Input name={'Email'} />

          <Button route='/home' isGreen={true} name={'Send link'} />
        </form>
        <section>
          <Button route='/login' isGreen={false} name={'Back'} />
        </section>
      </div>
    </Container>
  )
}

export default ResetPassword
