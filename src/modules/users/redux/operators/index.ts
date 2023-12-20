import { getUserProfile } from "./getUserProfile";
import { oauth2Github } from "./oauth2Github";
import { oauth2Google } from "./oauth2Google";
import { oauth2GithubCB } from "./oauth2GithubCB";
import { oauth2GoogleCB } from "./oauth2GoogleCB";
import { signin } from "./signin";
import { signout } from "./signout";
import { signup } from "./signup";
import { claimUsername } from "./claimUsername";
import { updateProfile } from "./updateProfile";
import { activateAccount } from "./activateAccount";

export interface IUserOperators {
  getUserProfile (): void;
  oauth2Github (): void;
  oauth2Google (): void;
  oauth2GithubCB (code: string, state: string): void;
  oauth2GoogleCB (code: string, state: string): void;
  signin (username: string, password: string): void;
  signout (): void;
  signup (username: string, password: string): void;
  claimUsername (username: string): void;
  updateProfile (bio: string): void;
  activateAccount (code: string): void;
}

export default {
  getUserProfile,
  oauth2Github,
  oauth2Google,
  oauth2GithubCB,
  oauth2GoogleCB,
  signin,
  signout,
  signup,
  claimUsername,
  updateProfile,
  activateAccount
}