import { v4 as uuid } from 'uuid'


const initialTeamList = [
  {
    id: uuid(), 
    name: 'Michael',
    email: 'michael@michael.com',
    role: 'Student',
  },
]


export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialTeamList })
  },
  post(url, { name, email, role }) {
    const newTeam = { id: uuid(), name, email, role }
    return Promise.resolve({ status: 200, success: true, data: newTeam })
  }
}
