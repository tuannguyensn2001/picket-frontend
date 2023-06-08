export declare interface IUser {
  id: number;
  username: string;
  email: string;
  password: string;
  created_at: number;
  updated_at: number;
  profile?: IProfile;
}

export declare interface IProfile {
  avatar_url: string;
}
