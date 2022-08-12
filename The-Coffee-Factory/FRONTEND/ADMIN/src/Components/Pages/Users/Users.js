import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import './Users.css'
import ItemUsers from './ItemUsers/ItemUsers'
import axios from 'axios'
import Cookie from 'universal-cookie'
import io from 'socket.io-client'
import product from '../../../Images/product.png'
import customer from '../../../Images/customer.png'
import employee from '../../../Images/employee.png'
import adduser from '../../../Images/adduser.png'
import search from '../../../Images/search.png'

const cookie = new Cookie()
const socket = io.connect(process.env.REACT_APP_ipAddress)

export default function Users() {
    const [dataU, setData] = useState('')
    useEffect(() => {
        const headers = {
            'Authorization': `Bearer ${cookie.get("TWJ")}`
        }
        axios.get(process.env.REACT_APP_ipAddress + '/tcf/v1/admin/get-all-users', { headers: headers }).then((res) => {
            setData(res.data.data.users)
            console.log(res.data.data.users)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const navigate = useNavigate()

    const sendStage = (object) => {
        const headers = {
            'Authorization': `Bearer ${cookie.get("TWJ")}`
        }
        axios.post(process.env.REACT_APP_ipAddress + '/tcf/v1/admin/get-all-users', object, { headers: headers }).then((res) => {
            setData((prevData) => prevData.map((element) => (element._id === res.data.data.users._id) ? res.data.data.users : element))

        }).catch(error => {
            console.log(error)
        })
    }

    const remove = (id) => {
        setData(dataU.filter((el) => el._id !== id))
    }

    useEffect(() => {
        socket.on("users", (data) => {
            setData((prevData) => [...prevData, data])
        });
    }, [])

    return (
        <div className='Users'>
            <div className='UserTitle'>Users Management</div>
            <div className='UserInformation'>
                <div className='ui ui-1'>
                    <p className='uiTitle'>Customers</p>
                    <p className='uiAmount'>5</p>
                    <div className='uiIcon'>
                        <img src={customer} alt='' />
                    </div>
                </div>
                <div className='ui ui-2'>
                    <p className='uiTitle'>Admin</p>
                    <p className='uiAmount'>3</p>
                    <div className='uiIcon'>
                        <img src={product} alt='' />
                    </div>
                </div>
                <div className='ui ui-3'>
                    <p className='uiTitle'>Employees</p>
                    <p className='uiAmount'>2</p>
                    <div className='uiIcon'>
                        <img src={employee} alt='' />

                    </div>
                </div>
            </div>

            <div className='search-form'>
                <img src={search} alt='' />
                <input className='input-search' type='text' placeholder='Search...'></input>
            </div>

            <div onClick={() => navigate('/users/addUser')} className='add-user'>
                <p className='new-user'>New User</p>
                <div className='au-icon'>
                    <img src={adduser} alt='' />
                </div>
            </div>

            <div className='recentUsers'>
                <div className='recentUsersTitle'>
                    <p>Recent Users</p>
                </div>
                <div className='recentUserName'>
                    <p className='id'>ID</p>
                    <p className='name-user'>Name</p>
                    <p className='email'>Email</p>
                    <p className='gender'>Gender</p>
                    <p className='status'>Status</p>
                    <p className='actionC'>Action</p>
                </div>
                <div className='mainUser'>
                    {dataU.length > 0 && dataU.map((values, index) => (
                        <ItemUsers key={index}
                            id={values._id}
                            nameUser={values.name}
                            emailUser={values.email}
                            gender={values.gender}
                            statusUser={values.status}
                            callback={sendStage}
                            remove={remove}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
