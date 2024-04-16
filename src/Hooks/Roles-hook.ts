import axios from "axios"

export const useGetRoles = async () =>{
    const Response = await axios.get(`${import.meta.env.VITE_IP}server_Roles_List/?guild=${window.localStorage.getItem("guild_id")}`);
    const Roles = Object.entries(Response.data).map(
        ([role, id]) => ({ role, id })
      );
    return Roles;
}