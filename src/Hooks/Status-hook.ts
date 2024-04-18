import axios from "axios"

export const useChangeStatusMessage = async ({bool}:{bool:boolean})=>{
    const Response = await axios.post(`${import.meta.env.VITE_IP}welcome_status/?guild=${window.localStorage.getItem("guild_id")}&status=${bool}`)
    return Response.data
}