import React, { useState, useEffect } from 'react'
import "./AddUser.css"
import back from "../../../../Images/double-left.png"
import axios from 'axios'
import Cookie from 'universal-cookie'
import io from 'socket.io-client'
import { useParams } from 'react-router-dom'


const cookie = new Cookie()
const socket = io.connect(process.env.REACT_APP_IPADDRESS)
export default function AddUser() {
    const params = useParams();
    const [gender, setGender] = useState();
    const [status, setStatus] = useState();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState();

    const sendDataUpdate = () => {
        const headers = {
            'Authorization': `Bearer ${cookie.get("JWT")}`
        }

        const object = {
            name: name,
            email: email,
            gender: gender,
            status: status,
            role: role
        }

        axios.post(process.env.REACT_APP_IPADDRESS + '/tcf/v1/admin/create-user', object, { headers: headers }).then((res) => {
            console.log(res.data)
        }).catch(error => {
            console.log(error)
            console.log(email)
        })
    }

    return (
        <div className='AddUser'>
            <div className='back-allUser'>
                <img className="btn-back" src={back} alt='' />
                <p className='btn-name'>All User</p>
            </div>

            <div className='title-newUser'>
                <p className='new-user-title'>New User</p>
                <p className='describe-title'>Use the below form to create a new account</p>
            </div>

            <div className='form-user'>
                <p className='title-name-form'>Name</p>
                <input className='input-name' type='text' placeholder='Nguyen Van A'
                    onChange={(event) => { setName(event.target.value) }}></input>
                <p className='title-name-mail'>Email</p>
                <input className='input-email' type='email' placeholder='example@gmail.com'
                    onChange={(event) => { setEmail(event.target.value) }}></input>

            </div>

            <div className='gender-user'>
                <p className='gender-title'>Gender</p>
                <div className='male-gender'>
                    <input type='radio' name='gender' checked={gender === 'male' ? true : false} onClick={() => setGender('male')} value='Male' />Male
                </div>

                <div className='female-gender'>
                    <input type='radio' name='gender' checked={gender === 'female' ? true : false} onClick={() => setGender('female')} value='Female' />Female
                </div>
                <div className='other-gender'>
                    <input type='radio' name='gender' checked={gender === 'other' ? true : false} onClick={() => setGender('other')} value='Other' />Other
                </div>
            </div>

            <div className='status-user'>
                <p className='status-title'>Status</p>
                <div className='status1'>
                    <input type='radio' name='status' checked={status === 'active' ? true : false} onClick={() => setStatus('active')} value='Active' />Active
                </div>

                <div className='status2'>
                    <input type='radio' name='status' value='Inactive' checked={status === 'inactive' ? true : false} onClick={() => setStatus('inactive')} />Inactive
                </div>
            </div>

            <div className='role-user'>
                <p className='role-title'>Role</p>
                <div className='role-1'>
                    <input type='radio' name='role' value='Admin' checked={role === 'admin' ? true : false} onClick={() => setRole('admin')} />Admin
                </div>

                <div className='role-2'>
                    <input type='radio' name='role' value='Employee' checked={role === 'employee' ? true : false} onClick={() => setRole('employee')} />Employee
                </div>

                <div className='role-3'>
                    <input type='radio' name='role' value='Customer' checked={role === 'customer' ? true : false} onClick={() => setRole('customer')} />Customer
                </div>
            </div>

            <div className='save-user-btn' onClick={() => { sendDataUpdate() }}>
                <p className='save-user'>Save</p>
            </div>

        </div>
    )
}
