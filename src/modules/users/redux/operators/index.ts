import { getUserProfile } from "./getUserProfile";
import { signin } from "./signin";
import { signout } from "./signout";
import { signup } from "./signup";
import { claimUsername } from "./claimUsername";
import { updateProfile } from "./updateProfile";
import { activateAccount } from "./activateAccount";

export interface IUserOperators {
  getUserProfile (): void;
  signin (username: string, password: string): void;
  signout (): void;
  signup (username: string, password: string): void;
  claimUsername (username: string): void;
  updateProfile (bio: string): void;
  activateAccount (code: string): void;
}

export default {
  getUserProfile,
  signin,
  signout,
  signup,
  claimUsername,
  updateProfile,
  activateAccount
}