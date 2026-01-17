import { Button } from '../../components/Button/styles'
import TopBackground from '../../components/TopBackground'
import api from '../../services/api'
import { useEffect, useState } from 'react'

function ListUsers(){

    const [users, setUsers] = useState([])

    useEffect( () => {

        async function getUsers (){
            const {data} = await api.get('/usuarios')
            
            setUsers(data)
        }

       getUsers()

    }, [])



    return (
        <div>
            <TopBackground/>
            <h1>Listagem de usuários</h1>

            {users.map((user) => ( 

                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.age}</p>
                </div>    
            ))}
            <Button>Voltar</Button>
        </div>
    )
}

export default ListUsers