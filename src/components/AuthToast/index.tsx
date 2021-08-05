import { ToastProps } from '../../@types/Modal'
import { BackDrop, CardWrapper } from './styles'

export const AuthToast = ({
  title,
  description,
  color,
  handleSvgError,
  onClickClose,
}: ToastProps) => (
  <BackDrop>
    <CardWrapper color={color}>
      <header>
        <h2>{title}</h2>
      </header>
      <div>
        <p>{description}</p>
      </div>

      <footer>
        <button onClick={onClickClose}>Close</button>
      </footer>
    </CardWrapper>
  </BackDrop>
)
