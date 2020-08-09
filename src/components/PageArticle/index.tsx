import React from 'react'
import api from 'services/api'

// Icons
import whatsAppIcon from 'assets/images/icons/whatsapp.svg'

// Styles
import './style.css'

interface PageArticleProps {
  id: number
  img: string
  alt: string
  teacher: string
  class: string
  text: string
  price: string
}

const PageArticle: React.FC<PageArticleProps> = props => {
  async function createNewConnection(user_id: number) {
    try {
      const data = { user_id }
      const { status } = (await api.post('/connections', data)).data

      if (status) alert('Sucesso!')
    } catch (error) {
      alert('Ocorreu um erro!')
    }
  }

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
          <button type="button" onClick={() => createNewConnection(props.id)}>
            <img src={whatsAppIcon} alt="Whatsapp" />
            Entrar em contato
          </button>
        </footer>
      </article>
    </main>
  )
}

export default PageArticle
