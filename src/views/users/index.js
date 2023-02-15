import React, { useCallback, useEffect, useState } from 'react';
import {Container, Table, Button} from 'reactstrap';
import AddUser from './AddUser'
import {MdOutlineEdit} from 'react-icons/md'
import {AiFillDelete} from 'react-icons/ai'

function Index() {

	const [toggleForm, setToggleForm] = useState(false)
	const [userData, setUserData] = useState([]);

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

	return (
		<Container>
			<div className='mt-3 text-right'>
				<Button color='primary' onClick={() => setToggleForm(!toggleForm)}>+ Add User</Button>
			</div>
			
			{toggleForm && 
				<AddUser  handleAddUser={handleAddUser} />
			}

			<Table className='mt-5'>
				<thead>
					<tr>
						<th>ID</th>
						<th>Profile</th>
						<th>Email</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Action</th>
						<th />
					</tr>
				</thead>

				{userData && userData.length > 0 &&
				<tbody>
				{userData.map((user, index) => {
					return user ?(
						<tr key={index}>
							<th scope='row'>{index +1}</th>
							<td>{user.profile}</td>
							<td>{user.email}</td>
							<td>{user.firstName}</td>
							<td>{user.lastName}</td>
							<td>
								<div className="d-flex gap-3">
									<MdOutlineEdit className='action-icons'/> 
									<AiFillDelete className='action-icons'/> 
								</div>
							</td>
						</tr>
					)  : null
				})}
				
					
				</tbody>	
			}

			</Table>
		</Container>
	);
}

export default Index;
