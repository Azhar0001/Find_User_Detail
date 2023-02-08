import React, { useState } from "react";
import axios from "axios";
import './user.css';

const Userdata = () => {
    const [username, setUsername] = useState("")
    const [email, setemail] = useState("")
    const [number, setnumber] = useState("")
    const handelData = () => {
        axios.get('http://localhost:8081/userdata').then((res) => {
            setUsername(

                res.data.username)
            setemail(res.data.email)
            setnumber(res.data.phone_number)
        }).catch((err) => { console.log(err) })

    }
    const handelDatadlt = () => {
        setUsername("")
        setemail("")
        setnumber("")
    }
    return (
        <div id="userdata">

            <p><span>{`username : `}</span>{username}</p>
            <p><span>{`email : `}</span>{email}</p>
            <p><span>{`number : `}</span>{number}</p>
            <button onClick={handelData}>fetch data</button>
            <button onClick={handelDatadlt}>delet data</button>
        </div>
    )
}

export default Userdata;