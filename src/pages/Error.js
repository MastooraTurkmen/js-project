import { Link } from "react-router-dom"
import img from '../assets/images/not-found.svg'
import Wraaper from '../assets/wrappers/ErrorPage'

const Error = () => {
  return (
    <Wraaper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>Ohh! Page not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to='/'>back home</Link>
      </div>
    </Wraaper>
  )
}

export default Error