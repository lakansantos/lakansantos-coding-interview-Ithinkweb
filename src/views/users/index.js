import React, { useCallback, useEffect, useState } from 'react';
import {Container, Table, Button} from 'reactstrap';
import AddUser from './AddUser'
import UserInfo from './UserInfo';
import Pagination from './Pagination';
import  {FcSearch} from 'react-icons/fc'

function Index() {

	const [toggleForm, setToggleForm] = useState(false)
	const [userData, setUserData] = useState([]);
	const [query, setQuery] = useState('')
	const [filteredData, setFilteredData] = useState(null)
	const [currentPage, setCurrentPage] = useState(1)
	const [rowsPerPage, setRowsPerPage] = useState(10)
	const [currentRow, setCurrentRow] = useState(null)

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


	useEffect(() => {
		if(userData){
			let filteringData = userData.filter(item => {
				return (
					item.profile.toLowerCase().includes(query.toLowerCase()) ||
					item.email.toLowerCase().includes(query.toLowerCase()) ||
					item.firstName.toLowerCase().includes(query.toLowerCase()) ||
					item.lastName.toLowerCase().includes(query.toLowerCase())
				)
			})
			setFilteredData(filteringData)
			
		}
	}, [userData, query])

	const lastRowIndex = currentPage * rowsPerPage;
	const firstRowIndex = lastRowIndex - rowsPerPage

	useEffect(() => {
		if(filteredData){

			setCurrentRow(filteredData.slice(firstRowIndex, lastRowIndex))
		}	
	}, [setCurrentRow, currentPage, rowsPerPage, filteredData])

	return (
		<Container>
			<div className='mt-3 text-right d-flex justify-content-between align-items-center'>
				<Button color='primary' onClick={() => setToggleForm(!toggleForm)}>+ Add User</Button>
				<div className="search-div d-flex justify-content-center align-items-center">
					<input type="text" placeholder='Search a profile, email...' id={'search'} onChange={(event) => setQuery(event.target.value)}/>
					<label htmlFor="search"><FcSearch style={{fontSize: '30px'}} className='bg-primary'/></label>
				</div>
			</div>

			
			{toggleForm && 
				<AddUser  handleAddUser={handleAddUser} setToggleForm={setToggleForm}/>
			}

			<Table className='mt-5 tables table-hover table-responsive'>
				<thead className='text-white'>
					<tr>
						<th>ID</th>
						<th>Avatar</th>
						<th>Email</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Action</th>
					</tr>
				</thead>

				{userData && userData.length > 0 &&  filteredData.length > 0 ?
				<tbody>
				{currentRow.map((user, index) => (
					<tr key={firstRowIndex +index}> 
						<th scope='row'>{firstRowIndex + index +1}</th>
						<UserInfo key={index} user={user} index={firstRowIndex + index} usersData={userData}  setUserData={setUserData} currentRow={currentRow} />
					</tr>
				))}
				</tbody> 
				: query !== '' ? (
					<tbody>
						<tr>
							<td colSpan='6' className='text-center'><h1>No Data Found</h1></td>
						</tr>
					</tbody>
				)  : null
				
			}

			</Table>
			<Pagination totalRows ={userData?.length} rowsPerPage={rowsPerPage}  setCurrentPage={setCurrentPage} currentPage={currentPage}/>
		</Container>
	);
}

export default Index;
