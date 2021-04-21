import react from 'react';

export default function Form ({ values, update, submit }) {
    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
    }
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <label>Name:
                <input 
                    type='text'
                    value={values.name}
                    onChange={onChange}
                    name="name"
                    placeholder='What is your Name?'
                />
            </label>
            <label>Email:
                <input 
                    type='text'
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    placeholder='What is your email?'
                />
            </label>
            <label>Role:
                <select value={values.role} name='role' onChange={onChange}>
                    <option value="">-- Select a Role --</option>
                    <option value="Backend Engineer">Backend Engineer</option>
                    <option value="Frontend Dev">Frontend Dev</option>
                    <option value="Data Scientist">Data Scientist</option>
                </select>
            </label>
            <div className='submit'>
                <button disabled={!values.name || !values.email || !values.role}>submit</button>
            </div>
        </form>
    )
}