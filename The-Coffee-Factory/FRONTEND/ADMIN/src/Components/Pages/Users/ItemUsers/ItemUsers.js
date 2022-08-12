import React, { useEffect } from 'react'
import './ItemUser.css'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import Cookie from 'universal-cookie'
import io from 'socket.io-client'


const cookie = new Cookie()
const socket = io.connect(process.env.REACT_APP_ipAddress)
export default function ItemUsers(props) {
    const navigate = useNavigate()

    const deleteUser = (id) => {
        const headers = {
            'Authorization': `Bearer ${cookie.get("TWJ")}`
        }
        axios.delete(process.env.REACT_APP_ipAddress + '/tcf/v1/admin/delete-user/' + id, { headers: headers }).then((res) => {
            props.remove(id)
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='ItemUsers'>
            <p className='idUser'>{props.id}</p>
            <p className='nameUser'>{props.nameUser}</p>
            <p className='email-user'>{props.emailUser}</p>
            <p className='genderUser'>{props.gender}</p>
            <p className='status-user'>{props.statusUser}</p>

            <div className='action'>
                <svg onClick={() => { navigate('/users/editUser/' + props.id) }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <svg onClick={() => { deleteUser(props.id) }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </div>
        </div>
    )
}
