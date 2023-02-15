import React, { useEffect, useState } from 'react';
import {Container, Table, Button} from 'reactstrap';
import AddUser from './AddUser'

function Index() {

	const [toggleForm, setToggleForm] = useState(false)
	const [userData, setUserData] = useState([]);

	useEffect(() => {
		let data = JSON.parse(localStorage.getItem('formData'))
		setUserData(data)
	}, [])


	return (
		<Container>
			<div className='mt-3 text-right'>
				<Button color='primary' onClick={() => setToggleForm(!toggleForm)}>+ Add User</Button>
			</div>
			
			{toggleForm && 
				<AddUser />
			}

			<Table className='mt-5'>
				<thead>
					<tr>
						<th>ID</th>
						<th>Profile</th>
						<th>Email</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th />
					</tr>
				</thead>

				{userData && userData.length > 0 &&
				<tbody>
				{userData.map((user, index) => {
					return (
						<tr key={index}>
						<th scope='row'>{index +1}</th>
						<td>{userData? user.profile : 'No profile specified'}</td>
						<td>{userData? user.email : 'No email specified'}</td>
						<td>{userData? user.firstName : 'No first name specified'}</td>
						<td>{userData? user.lastName : 'No last name specified'}</td>
						<td />
					</tr>
					)
				})}
				
					
				</tbody>	
			}
				{/* <tbody>
					<tr>
						<th scope='row'>1</th>
						<td>{userData ? userData[0].profile : null}</td>
						<td />
						<td>Mark</td>
						<td>Otto</td>
						<td />
					</tr>
					<tr>
						<th scope='row'>2</th>
						<td />
						<td />
						<td>Jacob</td>
						<td>Thornton</td>
						<td />
					</tr>
					<tr>
						<th scope='row'>3</th>
						<td />
						<td />
						<td>Larry</td>
						<td>the Bird</td>
						<td />
					</tr>
				</tbody> */}
			</Table>
		</Container>
	);
}

export default Index;
