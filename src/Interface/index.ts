export interface userData {
    user: User;
    guilds: Guild[];
  }
  export interface User {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    public_flags: number;
    flags: number;
    banner: any;
    accent_color: any;
    global_name: string;
    avatar_decoration_data: any;
    banner_color: any;
    mfa_enabled: boolean;
    locale: string;
    premium_type: number;
  }
  
  export interface Guild {
    id: string;
    name: string;
    icon?: string;
    owner: boolean;
    permissions: number;
    permissions_new: string;
    features: any[];
  }