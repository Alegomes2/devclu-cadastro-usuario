import { Button } from '../../components/Button/styles'
import TopBackground from '../../components/TopBackground'
import api from '../../services/api'
import { useEffect } from 'react'

function ListUsers(){

    useEffect( () => {

        async function getUsers (){
            const usersFromApi = await api.get('/usuarios')
            console.log(usersFromApi)
        }

       getUsers()

    }, [])



    return (
        <div>
            <TopBackground/>
            <h1>Listagem de usuários</h1>
            <Button>Voltar</Button>
        </div>
    )
}

export default ListUsers