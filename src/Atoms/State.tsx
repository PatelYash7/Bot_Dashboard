import { atom} from "recoil";
import { Guild, User, userData } from "../Interface";

export const toggleState = atom({
    key: "toggleState",
    default: false,
})
export const ModerationPath = atom({
    key:"ModerationPath",
    default:" "
})
export const NotifPopup = atom({
    key:"NotifPopup",
    default:false
})

export const UserData =atom<userData>({
    key:"UserData",
    default:{
        user:{} as User,
        guilds:[] as Guild[]

    } 
})