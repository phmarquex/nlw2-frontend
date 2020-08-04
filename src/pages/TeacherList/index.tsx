import React from 'react'
import PageHeader from 'components/PageHeader'
import PageArticle from 'components/PageArticle'

// Styles
import 'pages/TeacherList/style.css'

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Materia</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da Semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>
      <PageArticle
        img="https://avatars3.githubusercontent.com/u/22161225?s=460&u=4d5d58863b58c1235fb937cb33fef2356d6c9ef3&v=4"
        alt="Paulo Marques"
        price="80,00"
        teacher="Paulo Marques"
        class="Química"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, velit ex iure perferendis, unde illum repudiandae voluptatibus officiis inventore nobis modi voluptatum doloremque nemo minus. Incidunt hic ipsum magnam blanditiis!"
      />
      <PageArticle
        img="https://avatars3.githubusercontent.com/u/22161225?s=460&u=4d5d58863b58c1235fb937cb33fef2356d6c9ef3&v=4"
        alt="Paulo Marques"
        price="80,00"
        teacher="Paulo Marques"
        class="Química"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, velit ex iure perferendis, unde illum repudiandae voluptatibus officiis inventore nobis modi voluptatum doloremque nemo minus. Incidunt hic ipsum magnam blanditiis!"
      />
    </div>
  )
}

export default TeacherList
