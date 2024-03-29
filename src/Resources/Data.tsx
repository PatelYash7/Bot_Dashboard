import img1 from "../Resources/images/IconSetting.png"
import img2 from "../Resources/images/IconCommand.png"
import img3 from "../Resources/images/IconChat.png"
import img4 from "../Resources/images/IconBranding.png"

import img5 from "../Resources/images/IconAutoModeration.png"
import img6 from "../Resources/images/IconModeration.png"
import img7 from "../Resources/images/IconNotification.png"
import img8 from "../Resources/images/IconRoles.png"
import img9 from "../Resources/images/IconReactionRole.png"
import img10 from "../Resources/images/IconWelcomeMessage.png"
import img11 from "../Resources/images/IconLogging.png"

export const DataSidebar = [
        {
            name:"General Settings",
            img:img1,
            route:'/setting'
        },
        {
            name:"Commands",
            img:img2,
            route:'/commands'
        },
        {
            name:"Messages",
            img:img3,
            route:'/messages'
        },
        {
            name:"Custom Branding",
            img:img4,
            route:'/branding' 
        },
]

export const Modules = [
    {
        name:"Levels",
        img:img5,
        route:'/level-setup'
    },
    {
        name:"Moderation",
        img:img6,
        route:'/moderation'
    },
    {
        name:"Social Notifications",
        img:img7,
        route:'/notification'
    },
    {
        name:"Join Roles",
        img:img8,
        route:'/join-roles'
    },
    {
        name:"Reaction Roles",
        img:img9,
        route:'/reaction-roles'
    },
    {
        name:"Welcome Messages",
        img:img10,
        route:'/welcome-message'
    },
    {
        name:"Logging",
        img:img11,
        route:'/logging'
    }   


]

