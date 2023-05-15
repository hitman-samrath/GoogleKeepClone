import {useJwt }from 'react-jwt'
import { useNavigate } from 'react-router-dom';

const VerifyToken = () => {
    const navigate = useNavigate();
    const { decodedToken, isExpired } = useJwt(localStorage.getItem("jwt"));
    if(decodedToken && !isExpired){
        const {_id} = decodedToken;
        console.log(decodedToken, isExpired, _id)
        return _id;
    }
    else{
        console.log("not decoded")
        navigate('/');
    }
}

export default VerifyToken