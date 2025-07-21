
import './LoginRef.module.css'

export default function LoginRef ({children, ...props}) {

  return (
    <a {...props} className='login_ref accent_btn'>{children}</a>
  )
}