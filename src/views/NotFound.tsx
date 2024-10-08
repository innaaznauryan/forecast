import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
        <h3>404</h3>
        <p>Sorry, the page you are looking for is not found</p>
        <NavLink to='/' replace>Return to the homepage</NavLink>
    </div>
  )
}

export default NotFound