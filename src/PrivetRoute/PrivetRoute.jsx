import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import {  useNavigate } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
         if(!user){
            return navigate('/errorpage')
         }
        if(user){
            return children
        }
};

export default PrivetRoute;