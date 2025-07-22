import logo from '/logo.svg'
// import LoginRef from '../LoginRef/LoginRef'
import './Header.css'

export default function Header({children}) {
  return (
    <header>
        <a href="#">
          <img src={logo} alt="logo" width= '150'/>
        </a>

        {children}
        
    </header>
  )
}