import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='flex justify-between items-center bg-black text-white h-[71px] md:px-8 px-4'>
       <h2><img src="../../../public/imgs/nabvar/icon-logo.svg" alt="" /></h2>
       <div className='flex gap-6 font-sans items-center py-4 text-sm'>
        <Link className='text-blue-600 flex gap-3'>
          <img className='w-5' src="../../../public/imgs/nabvar/Vector.svg" alt="" />
          <p>Crear publicacion</p></Link>
        <Link to="/register">Log In</Link>
        <Link to="/">Sign Up</Link>
       </div>
    </nav>
  )
}

export default NavBar