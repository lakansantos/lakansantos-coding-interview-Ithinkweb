import React, { useState } from 'react';
import {Container, Table, Button} from 'reactstrap';
import FormTemplate from './FormTemplate'

function Index() {

	const [toggleForm, setToggleForm] = useState(false)
	
	return (
		<Container>
			<div className='mt-3 text-right'>
				<Button color='primary' onClick={() => setToggleForm(!toggleForm)}>+ Add User</Button>
			</div>
			
			{toggleForm && 
				<FormTemplate />
			}

			<Table className='mt-3'>
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

				<tbody>
					<tr>
						<th scope='row'>1</th>
						<td />
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
				</tbody>
			</Table>
		</Container>
	);
}

export default Index;
