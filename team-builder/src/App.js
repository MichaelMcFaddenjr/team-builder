import './App.css';
import React, { useState, useEffect } from 'react';
import axios from './axios';
import Form from './components/Form'
import Team from './components/Team'

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [ team, setTeam ] = useState([])
  const [ formValues, setFormValues ] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) return

    axios
    .post('fakeapi.com', newTeamMember)
    .then(res =>{
      setTeam([...team, res.data])
      setFormValues(initialFormValues)
    })
    .catch(err=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    axios
    .get('fakeapi.com')
    .then(res=>setTeam(res.data))
  },[])
  return (
    <div className="App">
      <h1>Da Best Team</h1>
      <Form
       values={formValues}
       update={updateForm}
       submit={submitForm}
       />
      {
        team.map(team => {
          return (
            <Team key={team.id} details={team} />
          )
        })
      }
    </div>
  );
}

export default App;
