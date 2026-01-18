import  Button  from '../../components/Button'
import TopBackground from '../../components/TopBackground'
import api from '../../services/api'
import { useEffect, useState } from 'react'
import Trash from '../../assets/trash.svg'

import { Container, AvatarUsers, Title, ContainerUsers, CardUsers, TrashIcon, } from './styles'
import { useNavigate } from 'react-router-dom'

function ListUsers() {

    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

        async function getUsers() {
            const { data } = await api.get('/usuarios')

            setUsers(data)
        }

        getUsers()

    }, [])

    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id}`)
        const updatedUser = users.filter (user => user.id !== id)

        setUsers(updatedUser)
    }


    return (
        <Container>
            <TopBackground />
            <Title>Lista de usuários</Title>

            <ContainerUsers>

                {users.map((user) => (

                    <CardUsers key={user.id}>
                        <AvatarUsers src={ `https://avatar-placeholder.iran.liara.run/public?username=${user.id}`}/>
                        <div >
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                            
                        </div>
                        <TrashIcon onClick={() => deleteUsers(user.id)} src={Trash} alt='icone-lixo'/>
                    </CardUsers>
                ))}
            </ContainerUsers>

            <Button type='button' onClick={() => navigate('/')}>Voltar</Button>
        </Container>
    )
}

export default ListUsers