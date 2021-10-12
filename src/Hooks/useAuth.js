import { useContext } from "react"
import { authFull } from "../AuthContext/AuthContext"

const useAuth=()=>{
    return useContext(authFull)
}
export default useAuth;