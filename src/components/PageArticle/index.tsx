import React from 'react'

// Icons
import whatsAppIcon from 'assets/images/icons/whatsapp.svg'

// Styles
import './style.css'

interface PageArticleProps {
  img: string
  alt: string
  teacher: string
  class: string
  text: string
  price: string
}

const PageArticle: React.FC<PageArticleProps> = props => {
  return (
    <main>
      <article className="teacher-item">
        <header>
          <img src={props.img} alt={props.alt} />
          <div>
            <strong>{props.teacher}</strong>
            <span>{props.class}</span>
          </div>
        </header>
        <p>{props.text}</p>

        <footer>
          <p>
            Preço/Hora
            <strong>R$ {props.price}</strong>
          </p>
          <button type="button">
            <img src={whatsAppIcon} alt="Whatsapp" />
            Entrar em contato
          </button>
        </footer>
      </article>
    </main>
  )
}

export default PageArticle
