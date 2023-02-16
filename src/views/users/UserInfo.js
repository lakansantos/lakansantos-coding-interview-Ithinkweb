import {MdOutlineEdit} from 'react-icons/md'
import {AiFillDelete} from 'react-icons/ai'
import DeleteUser from './DeleteUser';
import EditUser from './EditUser';
import { useState } from 'react';

const UserInfo = ({index, user, usersData, setUserData}) => {

    const [showEditForm, setShowEditForm] = useState(false)

    return (
        <>
        <tr key={index}> 
            <th scope='row'>{index +1}</th>
            <td> <img src={user.profile} alt="profile" className='img-profile'/></td>
            <td>{user.email}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>
                <div className="d-flex gap-3">
                    <MdOutlineEdit className='action-icons' style={{
                        color: '#3498db',
                    }}
                    onClick={() => setShowEditForm(!showEditForm)} /> 
                    {showEditForm && 
                        (
                            <EditUser setShowEditForm={setShowEditForm} index={index} usersData={usersData} setUserData={setUserData} user={user}/>
                        )
                    }
                    <AiFillDelete className='action-icons' style={{
                        color: '#e74c3c'
                    }}
                    onClick={() => DeleteUser({index, usersData, setUserData, })}    
                    />
                </div>
            </td>
		</tr>
        </>
    )
}


export default UserInfo;