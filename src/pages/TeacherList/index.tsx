import React, { useState, useEffect, FormEvent } from 'react'
import PageHeader from 'components/PageHeader'
import PageArticle from 'components/PageArticle'
import Input from 'components/Input'
import Select from 'components/Select'
import api from 'services/api'

// Styles
import 'pages/TeacherList/style.css'

const subjectItemsList = [
  { value: 'Artes', label: 'Artes' },
  { value: 'Artes', label: 'Artes' },
  { value: 'Artes', label: 'Artes' },
  { value: 'Artes', label: 'Artes' }
]

const weekdayItemsList = [
  { value: '0', label: 'Domingo' },
  { value: '1', label: 'Segunda-feira' },
  { value: '2', label: 'Terça-feira' },
  { value: '3', label: 'Quarta-feira' },
  { value: '4', label: 'Quinta-feira' },
  { value: '5', label: 'Sexta-feira' },
  { value: '6', label: 'Sábado' }
]

interface TeacherItem {
  id: number
  subject: string
  cost: string
  users_id: number
  name: string
  avatar: string
  whatsapp: string
  bio: string
}

function TeacherList() {
  const [subject, setSubject] = useState('')
  const [weekDay, setWeekDay] = useState('')
  const [time, setTime] = useState('')
  const [teachers, setTeachers] = useState([])

  async function getAllClasses() {
    const { classes } = (await api.get('/classes/all')).data
    setTeachers(classes)
  }

  useEffect(() => {
    getAllClasses()
  }, [])

  async function searchTeachers(e: FormEvent) {
    e.preventDefault()
    e.stopPropagation()

    const data = { subject, weekDay, time }
    console.log(data)

    const { classes } = (
      await api.get(
        `/classes?week_day=${weekDay}&subject=${subject}&time=${time}`
      )
    ).data
    setTeachers(classes)
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            options={subjectItemsList}
            value={subject}
            onChange={e => {
              setSubject(e.target.value)
            }}
          />
          <Select
            name="week_day"
            label="Dia da Semana"
            options={weekdayItemsList}
            value={weekDay}
            onChange={e => {
              setWeekDay(e.target.value)
            }}
          />
          <Input
            name="time"
            label="Hora"
            type="time"
            value={time}
            onChange={e => {
              setTime(e.target.value)
            }}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      {teachers.map((teacher: TeacherItem, key) => {
        return (
          <PageArticle
            key={key}
            id={teacher.users_id}
            img={teacher.avatar}
            alt={teacher.name}
            price={teacher.cost}
            teacher={teacher.name}
            class={teacher.subject}
            text={teacher.bio}
          />
        )
      })}
    </div>
  )
}

export default TeacherList
