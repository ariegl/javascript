import React from 'react'
import UserData from '@/data_access/UserData'

const UserService = {
  getAllUsers() {
    return UserData.getAllUsers();
  },
  addUser(newUser) {
    UserData.addUser(newUser);
  }
}

export default UserService