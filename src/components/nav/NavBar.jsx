import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='flex justify-around items-center'>
       <h2>PC?</h2>
       <div className='flex gap-6'>
        <Link to="/register">REGISTro richard</Link>
        <Link to="/">Homes</Link>
       </div>
    </nav>
  )
}

export default NavBar