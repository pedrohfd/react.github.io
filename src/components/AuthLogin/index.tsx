import { Link } from 'react-router-dom'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { Container, Form, FormContent } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { UserActions } from '../../store/userSlice'
import { FormEvent, useRef, useState } from 'react'
import { UserProps } from '../../@types/User'
import { ErrorProps } from '../../@types/Error'
import { AuthToast } from '../AuthToast'

export const AuthLogin = () => {
  const [messageToUser, setMessageToUser] = useState<ErrorProps>({
    title: '',
    description: '',
    color: '',
    active: false,
  })

  const dispatch = useDispatch()
  const { users } = useSelector((state: any) => state.user)
  const { logIn } = UserActions
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: FormEvent) => {
    const email = emailInputRef.current?.value
    const password = passwordInputRef.current?.value
    event.preventDefault()

    try {
      if (email && password) {
        const findUser = users.find((user: UserProps) => user.email === email)

        if (!findUser) {
          throw new Error('Usuário não existe')
        }
        if (findUser.password !== password && findUser.email !== email) {
          throw new Error('Dados nao conferem!!!')
        } else {
          dispatch(logIn())
        }
      }
    } catch (error) {
      setMessageToUser({
        title: 'Ocorreu um erro !',
        description: error.message,
        color: 'var(--red)',
        active: true,
      })
    }
  }

  const toggleToast = () => {
    setMessageToUser({ title: '', description: '', color: '', active: false })
  }

  const toast = (
    <AuthToast
      color={messageToUser.color}
      title={messageToUser.title}
      description={messageToUser.description}
      onClickClose={toggleToast}
      handleSvgError={false}
    />
  )

  const onBlurEmail = () => {
    if (emailInputRef.current?.value) {
      const regexValidEmail = /^[\w+.]*@\w+.(?:[A-Z]{2,})?.[\w\w]*$/.test(
        emailInputRef.current?.value
      )
      try {
        if (!regexValidEmail) {
          throw new Error(
            'Digite um email valido. Exemplos: meu.email+categoria@gmail.com, juca_malandro@bol.com.br, pedrobala@hotmail.uy, sandro@culinaria.dahora'
          )
        }
      } catch (error) {
        setMessageToUser({
          title: 'Email Invalido',
          description: error.message,
          color: 'var(--red)',
          active: true,
        })
      }
    }
  }

  return (
    <Container>
      {messageToUser.active && toast}
      <h2>
        <strong>Authentication</strong>
      </h2>
      <Form onSubmit={handleSubmit}>
        <FormContent>
          <input
            type='email'
            id='email'
            placeholder='email'
            required
            ref={emailInputRef}
            onBlur={() => onBlurEmail()}
          />
          <input
            type='password'
            id='password'
            placeholder='password'
            required
            ref={passwordInputRef}
          />
        </FormContent>
        <Link to='/reset-password'>I forget my password</Link>
        <button type='submit' className='sign-in'>
          <span>Log In</span>

          <HiOutlineArrowRight />
        </button>
      </Form>
      <button className='sign-up'>
        <Link to='/sign-up'>Sign Up</Link> <HiOutlineArrowRight />
      </button>
    </Container>
  )
}
