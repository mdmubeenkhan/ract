import { useState } from 'react';

const InputForm = (props)=>{
    const [name, changeName] = useState('')
    const [email, changeEmail] = useState('')
    const [mobile, changeMobile] = useState('')

    const changeNameHandler =(event)=>{
        changeName(event.target.value)
    }

    const changeEmailHandler =(event)=>{
        changeEmail(event.target.value)
    }

    const changeMobileHandler =(event)=>{
        changeMobile(event.target.value)
    }

    // two way binding, collecting input field data in data variable
    // then emptying the input data
    const formSubmitted = (event)=>{
        event.preventDefault()
        console.log("form submitted")
        const data = {
            name: name,
            email: email,
            mobile: mobile
        }
        console.log(data)
        changeName('')
        changeEmail('')
        changeMobile('')
        props.onSubmitInput(data)
    }

    return (
    <div>
        <form onSubmit={formSubmitted}>
            <br/>
            <label>Name</label>
            <input type="text" placeholder="name" onChange={changeNameHandler} value={name}></input>
            <label>Email</label>
            <input type="email" placeholder="mubbeen@gmail.com" onChange={changeEmailHandler} value={email}></input>
            <label>Mobile</label>
            <input type="Number" placeholder="90009000" onChange={changeMobileHandler} value={mobile}></input>
            <br />
            <button type="submit">Add details</button>
        </form>
        <br />
        <br />
    </div>
)}


export default InputForm