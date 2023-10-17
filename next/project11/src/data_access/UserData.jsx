import React from 'react'

const UserData = {
  users: [
    {
			name: "Ariel",
			age: 24,
			country: "México"
    },{
			name: "Leira",
			age: 42,
			country: "Corea del sur"
    }
    ],

		getAllUsers() {
			return this.users;
		},
		addUser(newUser) {
			this.users.push(newUser);
		}
}

export default UserData