import { atom} from "recoil";

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
export const Auth = atom({
    key:"Auth",
    default:false
})