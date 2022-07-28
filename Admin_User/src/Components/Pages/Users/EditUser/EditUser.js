import React, { useState, useEffect } from 'react'
import "./EditUser.css"
import axios from 'axios'
import Cookie from 'universal-cookie'
import io from 'socket.io-client'
import back from "../../../../Images/double-left.png"
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

    const [dataEdit, setDataEdit] = useState('')



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

        axios.patch(process.env.REACT_APP_IPADDRESS + '/tcf/v1/admin/update-user/' + params.id, object, { headers: headers }).then((res) => {
            console.log(name)
            console.log(gender)
            console.log(res.data)
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        const headers = {
            'Authorization': `Bearer ${cookie.get("JWT")}`
        }
        axios.get(process.env.REACT_APP_IPADDRESS + '/tcf/v1/admin/get-user-by-id/' + params.id, { headers: headers }).then((res) => {
            setDataEdit(res.data.data)
            setName(res.data.data.name)
            setEmail(res.data.data.email)
            setGender(res.data.data.gender)
            setStatus(res.data.data.status)
            setRole(res.data.data.role)
            console.log(res.data.data)
        }).catch(error => {
            console.log(error)
        })
    }, [])


    return (
        <div className='AddUser'>
            <div className='back-allUser'>
                <img className="btn-back" src={back} alt='' />
                <p className='btn-name'>All User</p>
            </div>

            <div className='title-newUser'>
                <p className='new-user-title'>Edit User</p>
                <p className='describe-title'>Use the below form to edit a account</p>
            </div>

            <div className='form-user'>
                <p className='title-name-form'>Name</p>
                <input className='input-name' type='text' placeholder='Nguyen Van A' value={name}
                    onChange={(event) => { setName(event.target.value) }}></input>

                <p className='title-name-mail'>Email</p>
                <input className='input-email' type='email' placeholder='example@gmail.com' value={email}
                    onChange={(event) => { setEmail(event.target.value) }}></input>

            </div>

            <div className='gender-user'>
                <p className='gender-title'>Gender</p>
                <div className='male-gender'>
                    <input type='radio' name='gender' checked={(gender === 'male') ? true : false} onClick={() => { setGender('male') }} value='Male' />Male
                </div>

                <div className='female-gender'>
                    <input type='radio' name='gender' checked={(gender === 'female') ? true : false} onClick={() => { setGender('female') }} value='Female' />Female
                </div>
                <div className='other-gender'>
                    <input type='radio' name='gender' checked={(gender === 'other') ? true : false} onClick={() => { setGender('other') }} value='Other' />Other
                </div>
            </div>

            <div className='status-user'>
                <p className='status-title'>Status</p>
                <div className='status1'>
                    <input type='radio' name='status' checked={(status === 'active') ? true : false} onClick={() => { setStatus('active') }} value='Active' />Active
                </div>

                <div className='status2'>
                    <input type='radio' name='status' checked={(status === 'inactive') ? true : false} onClick={() => setStatus('inactive')} value='Inactive' />Inactive
                </div>
            </div>

            <div className='role-user'>
                <p className='role-title'>Role</p>
                <div className='role-1'>
                    <input type='radio' name='role' checked={(role === 'admin') ? true : false} onClick={() => { setRole('admin') }} value='Admin' />Admin
                </div>

                <div className='role-2'>
                    <input type='radio' name='role' checked={(role === 'employee') ? true : false} onClick={() => { setRole('employee') }} value='Employee' />Employee
                </div>

                <div className='role-3'>
                    <input type='radio' name='role' checked={(role === 'customer') ? true : false} onClick={() => { setRole('customer') }} value='Customer' />Customer
                </div>
            </div>

            <div className='save-user-btn' onClick={() => { sendDataUpdate() }}>
                <p className='save-user'>Save</p>
            </div>

        </div>
    )
}
