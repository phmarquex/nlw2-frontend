import React from 'react'
import { Link } from 'react-router-dom'

// Images
import LogoImg from 'assets/images/logo.svg'

// Icons
import backIcon from 'assets/images/icons/back.svg'

// Style
import 'components/PageHeader/style.css'

interface PageHeaderProps {
  title: string
}

const PageHeader: React.FC<PageHeaderProps> = props => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={LogoImg} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        {props.children}
      </div>
    </header>
  )
}

export default PageHeader
