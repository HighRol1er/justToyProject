
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Link to="/luckydraw">
      <button>luckydraw</button>
    </Link>
    <Link to="krw-usd">
      <button>usd-krw</button>
    </Link>
    </>
  )
}

export default Home