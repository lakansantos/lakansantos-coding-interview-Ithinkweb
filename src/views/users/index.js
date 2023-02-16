import React, { useCallback, useEffect, useState } from 'react';
import {Container, Table, Button} from 'reactstrap';
import AddUser from './AddUser'
import UserInfo from './UserInfo';
import  {FcSearch} from 'react-icons/fc'

function Index() {

	const [toggleForm, setToggleForm] = useState(false)
	const [userData, setUserData] = useState([]);
	const [query, setQuery] = useState('')
	const getUserData = () => {
		let data = JSON.parse(localStorage.getItem('formData'))
		setUserData(data)
	}
	useEffect(() => {
		getUserData();
	}, [setUserData])



	const handleAddUser = useCallback(() => {
		let data = JSON.parse(localStorage.getItem('formData')) || []
		localStorage.setItem('formData', JSON.stringify([...data]))
		getUserData()
		setToggleForm(false)
	}, [])


	const filteredData = userData.filter(item => {
		return (
			item.profile.toLowerCase().includes(query.toLowerCase()) ||
			item.email.toLowerCase().includes(query.toLowerCase()) ||
			item.firstName.toLowerCase().includes(query.toLowerCase()) ||
			item.lastName.toLowerCase().includes(query.toLowerCase())
		)
	})
	return (
		<Container>
			<div className='mt-3 text-right d-flex justify-content-between align-items-center'>
				<Button color='primary' onClick={() => setToggleForm(!toggleForm)}>+ Add User</Button>
				<div className="search-div d-flex justify-content-center align-items-center">
					<input type="text" placeholder='Search a profile, email...' onChange={(event) => setQuery(event.target.value)}/>
					<FcSearch style={{fontSize: '25px'}}/>
				</div>
			</div>

			
			{toggleForm && 
				<AddUser  handleAddUser={handleAddUser} />
			}

			<Table className='mt-5 tables table-hover table-responsive'>
				<thead className='text-white'>
					<tr>
						<th>ID</th>
						<th>Profile</th>
						<th>Email</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Action</th>
					</tr>
				</thead>

				{userData && userData.length > 0 &&
				<tbody>
				{filteredData.map((user, index) => {
					return user ?(
						<UserInfo key={index} user={user} index={index} usersData={userData}  setUserData={setUserData}/>
					)  : null
				})}
				
					
				</tbody>	
			}

			</Table>
		</Container>
	);
}

export default Index;
