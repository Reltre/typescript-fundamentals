export interface User {
  email: string;
  password: string;
}

export interface ConfirmedUser extends User {
  isActive: boolean;
}

export interface Admin extends ConfirmedUser {
  adminSince: Date;
}

export class AccountManager {
  users: User[] = new Array();

  /**
   * Create a new user account
   * @param email email address
   * @param password the user's password
   * @return the new user account. An admin must activate it using activateNewUser
   * @see this.activateNewUser
   */
  register(email: string, password: string): User {
    if(!email) throw 'Must provide an email';
    if(!password) throw 'Must provide a password';
    let user = { email, password };
    this.users.push(user);
    return user;
  }

  /**
   * Activate a new user account
   * @param approver The admin who's approving this new user
   * @param userToApprove Newly-registered user, who is to be activated
   * @return the updated user object, now activated
   */
  activateNewUser(approver: Admin, userToApprove: User): ConfirmedUser {
    return { ...userToApprove, isActive: true };
  }

  /**
   * Promote a normal user to admin
   * @param existingAdmin admin who is promoting another user
   * @param user an active user who you're making an admin
   * @return the updated user object, now can also be regarded as an admin
   */
  promoteToAdmin(existingAdmin: Admin, user: ConfirmedUser): Admin {
    if (user.isActive !== true) throw "User must be active in order to be promoted to admin!";
    return { ...user, adminSince: new Date() };
  }
}
