import { useEffect, useState } from "react"
import axios  from "axios"




export default function GetFlights() {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8081/getFlights')
        .then(users => setUsers(users.data) )
        .catch(err => console.log(err))

    })

    return(
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
            <div className="w-50">
                <table id="passengers">
                    <thead>
                        <tr>
                            <th>Arriving</th>
                            <th>Departing</th>
                            <th>Planecode</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                    users.map((user)=>{
                        return<tr>
                            <td>{user.arriveairport}</td>
                            <td>{user.depart}</td>
                            <td>{user.planecode}</td>
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