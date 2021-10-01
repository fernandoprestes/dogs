import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import styles from './UserHeaderNav.module.css'
import { ReactComponent as Feed } from '../../assets/feed.svg'
import { ReactComponent as Stats } from '../../assets/estatisticas.svg'
import { ReactComponent as Post } from '../../assets/adicionar.svg'
import { ReactComponent as Exit } from '../../assets/sair.svg'

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null)
  const { userLogout } = React.useContext(UserContext)
  return (
    <nav className={styles.nav}>
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
  )
}

export default UserHeaderNav
