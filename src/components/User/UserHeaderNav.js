import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import styles from './UserHeaderNav.module.css'
import { ReactComponent as Feed } from '../../assets/feed.svg'
import { ReactComponent as Stats } from '../../assets/estatisticas.svg'
import { ReactComponent as Post } from '../../assets/adicionar.svg'
import { ReactComponent as Exit } from '../../assets/sair.svg'
import useMedia from '../../hooks/useMedia'

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext)

  const mobile = useMedia('(max-width: 40rem)')
  const [mobileMenu, setMobileMenu] = React.useState(false)

  const {pathname} = useLocation()

  React.useEffect(() => {
    setMobileMenu(false)
  },[pathname])

  return (
    <>
      {mobile && (
        <button
          aria-label="menu"
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="/user" end>
          <Feed />
          {mobile && 'Minhas fotos'}
        </NavLink>
        <NavLink to="/user/stats">
          <Stats />
          {mobile && 'Estatística'}
        </NavLink>
        <NavLink to="/user/photo-post">
          <Post />
          {mobile && 'Adicionar foto'}
        </NavLink>
        <button onClick={userLogout}>
          <Exit />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  )
}

export default UserHeaderNav
