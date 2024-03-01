import { atom } from "recoil";

export const toggleState = atom({
    key: "toggleState",
    default: false,
})

export const moderationToggleState = atom({
    key:"moderationToggleState",
    default:false
})