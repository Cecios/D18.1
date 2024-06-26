import {jwtDecode} from 'jwt-decode'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
const useSession = ()=> {
    const session = JSON.parse(localStorage.getItem("auth"))

    const decodedSession = session ? jwtDecode(session) : null 

    const location = useLocation();
    const navigate = useNavigate();
    
    useEffect(()=>{
        if (!session) {
            navigate('/',{
                replace: true   //cancello la history
            })
        }
        if (session && location.pathname !== '/') {
            return
        }
        navigate('/home',{
            replace: true
        })
    },[session, navigate])
    return decodedSession
}
export default useSession;