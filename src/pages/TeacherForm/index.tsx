import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'

// Components
import PageHeader from 'components/PageHeader'
import Input from 'components/Input'
import Textarea from 'components/Textarea'
import Select from 'components/Select'
import api from 'services/api'

// Icons
import warningIcon from 'assets/images/icons/warning.svg'

// Style
import './style.css'

const weekdayItemsList = [
  { value: '0', label: 'Domingo' },
  { value: '1', label: 'Segunda-feira' },
  { value: '2', label: 'Terça-feira' },
  { value: '3', label: 'Quarta-feira' },
  { value: '4', label: 'Quinta-feira' },
  { value: '5', label: 'Sexta-feira' },
  { value: '6', label: 'Sábado' }
]

function TeacherForm() {
  // Form
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')

  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState('')

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '9:00', to: '4:00' }
  ])

  const history = useHistory()

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }])
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItems = scheduleItems.map((item, key) => {
      if (key === position) {
        return { ...item, [field]: value }
      }

      return item
    })

    setScheduleItems(updatedScheduleItems)
  }

  async function handleCreateClass(e: FormEvent) {
    e.preventDefault()
    e.stopPropagation()

    try {
      api.post('/classes', {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems
      })
      alert('Sucesso!')
      history.push('/')
    } catch (error) {
      alert('error')
    }
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aula"
        description="O primeiro passo é bla bla bla bla bla"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus Dados</legend>
            <Input
              name="name"
              label="Nome Completo"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={e => setAvatar(e.target.value)}
            />
            <Input
              name="whatsapp"
              label="Whatsapp"
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
            />
            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={e => setBio(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a Aula</legend>
            <Select
              name="subject"
              label="Matéria"
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Artes', label: 'Artes' },
                { value: 'Artes', label: 'Artes' },
                { value: 'Artes', label: 'Artes' }
              ]}
              value={subject}
              onChange={e => {
                setSubject(e.target.value)
              }}
            />
            <Input
              name="cost"
              label="Custo da sua hora por aula"
              value={cost}
              onChange={e => {
                setCost(e.target.value)
              }}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários Disponíveis
              <button type="button" onClick={() => addNewScheduleItem()}>
                + Novo Horário
              </button>
            </legend>

            {scheduleItems.map((item, key) => {
              return (
                <div className="schedule-item" key={key}>
                  <Select
                    name="week_day"
                    label="Dia da Semana"
                    options={weekdayItemsList}
                    onChange={e =>
                      setScheduleItemValue(key, 'week_day', e.target.value)
                    }
                    value={item.week_day}
                  />
                  <Input
                    name="from"
                    label="Das"
                    type="time"
                    value={item.from}
                    onChange={e =>
                      setScheduleItemValue(key, 'from', e.target.value)
                    }
                  />
                  <Input
                    name="to"
                    label="Até"
                    type="time"
                    value={item.to}
                    onChange={e =>
                      setScheduleItemValue(key, 'to', e.target.value)
                    }
                  />
                </div>
              )
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso Importante" />
              Importante! <br />
              Preencha todos os campos
            </p>
            <button type="submit">Salvar Cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm
