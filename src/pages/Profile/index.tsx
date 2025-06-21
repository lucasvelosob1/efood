// src/pages/Profile/index.tsx
import { useParams } from 'react-router-dom';

const Profile = () => {
    const { id } = useParams();
    return <h1>Página do Perfil do Restaurante: {id}</h1>
}
export default Profile;