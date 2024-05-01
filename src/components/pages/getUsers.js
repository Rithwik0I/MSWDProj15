import { useEffect, useState } from "react"
import axios  from "axios"




export default function GetUsers() {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8081/getUsers')
        .then(users => setUsers(users.data) )
        .catch(err => console.log(err))

    })

    return(
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
            <div className="w-50">
                <table id="passengers">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                    users.map((user)=>{
                        return<tr>
                            <td>{user.uname}</td>
                            <td>{user.password}</td>
                            <td>{user.email}</td>
                        </tr>
                    }
                )
                }
                    </tbody>
                </table>
                
        </div>
        </div>
    )
}