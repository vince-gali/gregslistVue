
// NOTE profile should refer to other users.....many profiles
export class Profile {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.picture = data.picture
    // TODO add additional properties if needed
  }
}

// NOTE 'account' should only refer to the user logged in...one account

// NOTE this is called inheritance... 'Account' will have everything that 'Profile' does and then some
export class Account extends Profile {
  constructor(data) {
    super(data)
    this.email = data.email
  }
}




