import './index.css'
import TwitterFollowCard from './TwitterFollowCard.jsx'

const list = [
  {
    userName: 'NeiderNieto10',
    name: 'Neider Nieto',
    isFollowing: true
  },
  {
    userName: 'jorgegarcia',
    name: 'Jorge Garcia',
    isFollowing: false
  },
  {
    userName: 'rodolfoortega',
    name: 'Rodolfo Ortega',
    isFollowing: true
  },
  {
    userName: 'sebastiancanon',
    name: 'Sebastian Cañon',
    isFollowing: true
  }
]

const App = () => {
  return (
    <section className="App">
      <p>A quién seguir</p>
      {list.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          name={name}
          isFollowing={isFollowing}
        />
      ))}
      <a href="/">Mostrar Más</a>
    </section>
  )
}

export default App

{
  /* <TwitterFollowCard
      isFollowing
      userName="neidernieto10"
      name="Neider Nieto"
    />
    <TwitterFollowCard
      isFollowing
      userName="midudev"
      name="Miguel Angel Durán"
    />
    <TwitterFollowCard
      isFollowing={false}
      userName="cristianpaez"
      name="Cristian Paez"
    />
    <TwitterFollowCard isFollowing userName="Elonmusk" name="Elon Musk" /> */
}
