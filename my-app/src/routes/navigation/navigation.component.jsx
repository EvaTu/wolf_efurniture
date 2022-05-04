import {Outlet, Link} from "react-router-dom"
import "./navigation.styles.scss"
import {ReactComponent as Logo} from "../../assets/crown.svg"
import {useContext} from 'react'
import {UserContext} from "../../contexts/user.context"
import {SignOutUser} from "../../utils/firebase/firebase.utils"

const Navigation = () => {
    const { currentUser, setCurrentUser} = useContext(UserContext)
    // console.log(currentUser)

    // const handleSignOut = async () => {
    //   await SignOutUser()
    //   setCurrentUser(null)
    // }
    return(
      <>
        <div className="navigation">
          <Link className="logo-container" to="/">
            <Logo className="logo"/>
          </Link>
          
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">SHOP</Link>
            { currentUser ? 
              <span className="nav-link" onClick={SignOutUser}>SIGN OUT</span> : <Link className="nav-link" to="/auth">SIGN IN</Link>
            }
            
          </div>
        </div>
        <Outlet />
      </>
    )
  }

  export default Navigation