import {MdOutlineEdit} from 'react-icons/md'
import {AiFillDelete} from 'react-icons/ai'
import DeleteUser from './DeleteUser';

const UserInfo = ({index, user}) => {
    return (
        <>
        <tr key={index}> 
            <th scope='row'>{index +1}</th>
            <td>{user.profile}</td>
            <td>{user.email}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>
                <div className="d-flex gap-3">
                    <MdOutlineEdit className='action-icons' style={{
                        color: '#3498db',
                    }}/> 
                    <AiFillDelete className='action-icons' style={{
                        color: '#e74c3c'
                    }}
                    onClick={(e) => DeleteUser({index})}
                    />
                </div>
            </td>
		</tr>
        </>
    )
}


export default UserInfo;