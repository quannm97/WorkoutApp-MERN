import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <div className="container">
            <Link to="/">
                <h1>Workout</h1>
            </Link>
            <nav>
              <div>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign up</Link>
              </div>
            </nav>
        </div>
    </header>
  )
}

export default Navbar