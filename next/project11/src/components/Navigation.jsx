import React, { useEffect, useState } from 'react'
import UserService from '@/business_logic/UserService'
import styles from "./Navigation.module.css"

function Navigation() {
  const [users,setUsers] = useState(UserService.getAllUsers());
	const [userAdded, setUserAdded] = useState(0);

	useEffect(() => {
		setUsers(UserService.getAllUsers());
	},[userAdded])

	const handleAddUser = (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);
		const newUser = {
			name: formData.get('name'),
			age: formData.get('age'),
			country: formData.get('country')
		}
		console.log(newUser);

		UserService.addUser(newUser);
		setUserAdded(userAdded+1);
	}

  return (
    <div className=' px-5'>
      <h1 className={styles.h1}>Lista</h1>
      <ul>
        {users.map((element,index) =>  (
          <li key={element+"_"+index}><a>{element.name}</a></li>
        ))}
      </ul>

			<h1>Nuevo usuario</h1>
			<form className='flex flex-wrap max-w-xs' onSubmit={handleAddUser}>
				<input name="name" type="text" placeholder="Name" className={styles.input}></input>
				<input name="age" type="number" placeholder="Age" className={styles.input}></input>
				<input name="country" type="text" placeholder="Country" className={styles.input}></input>
				<input type="submit" value="Enviar" className='px-10 py-2 mt-2 bg-slate-600 text-white'></input>
			</form>
    </div>
  )
}

export default Navigation