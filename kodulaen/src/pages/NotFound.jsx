import { Link } from "react-router-dom"


function NotFound() {
  return (
    <div>
      <h1>Page not found</h1>
      <Link to="/">
        Tagasi avalehele
      </Link>
    </div>
  )
}

export default NotFound
