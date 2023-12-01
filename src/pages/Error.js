import { Link } from "react-router-dom"
import img from '../assets/images/not-found.svg'
import Wraaper from '../assets/wrappers/ErrorPage'

const Error = () => {
  return (
    <Wraaper className="full-page">
      <div>
        <img src={img} alt="" />
      </div>
    </Wraaper>
  )
}

export default Error