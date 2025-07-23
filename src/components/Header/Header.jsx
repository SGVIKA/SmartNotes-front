import logo from '/logo.svg'
// import LoginRef from '../LoginRef/LoginRef'
import './Header.css'
import { useNavigate } from 'react-router-dom'

export default function Header({children}) {
  const navigate = useNavigate();
  return (
    <header>
        <span onClick={() => navigate('/intro')}>
          <img src={logo} alt="logo" width= '150'/>
        </span>

        {children}
        
    </header>
  )
}