import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='w-[100%] h-[100px] bg-[red] flex justify-around items-center'>
       <h2>PC?</h2>
       <div className='flex gap-6'>
        <Link to="/register">REGISTER</Link>
        <Link to="/">Home</Link>
       </div>
    </nav>
  )
}

export default NavBar