import { atom} from "recoil";

export const toggleState = atom({
    key: "toggleState",
    default: false,
})
export const ModerationPath = atom({
    key:"ModerationPath",
    default:" "
})
