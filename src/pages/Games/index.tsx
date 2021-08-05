import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Filters from '../../components/Filters'
import Header from '../../components/Header'

import data from '../../assets/games.json'

import { Container, Bar } from './styles'

const Games: React.FC<{ item: [] }> = () => {
  const newData = data.map(item => item.types)

  return (
    <Fragment>
      <Header />
      <Container>
        <Bar>
          <label>Recent Games</label>
          <section>
            <label>Filters</label>
            {newData.map((item: any) => {
              return <Filters name={item.type} />
            })}
          </section>
          <Link to='/new-game'>New Bet</Link>
        </Bar>
      </Container>
    </Fragment>
  )
}

export default Games
