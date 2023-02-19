import {MdOutlineEdit} from 'react-icons/md'
import {AiFillDelete} from 'react-icons/ai'
import {AiFillEye} from 'react-icons/ai'
import DeleteUser from './DeleteUser';
import EditUser from './EditUser';
import { useEffect, useState } from 'react';
import ProfileModal from './ProfileModal';

const UserInfo = ({index, user, usersData, setUserData}) => {

    const [showEditForm, setShowEditForm] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showProfile, setShowProfile] = useState(false) 

    useEffect(() => {
        if (showProfile || showEditForm || showDeleteModal) {
          // disable scrolling when the modal is open
          document.body.style.overflow = 'hidden';
        } else {
          // re-enable scrolling when the modal is closed
          document.body.style.overflow = 'auto';
        }
        // clean up effect by resetting overflow property when unmounting
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [showProfile, showEditForm, showDeleteModal]);

    return (
        <>
            <td>{user.profile ? <img src={user.profile} alt="profile" className='img-profile' style={{objectFit: 'cover'}}/> : 'No avatar'}</td>
            <td>{user.email}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>
                <div className="d-flex gap-3">
                    <MdOutlineEdit className='action-icons' 
                    style={{
                        color: '#3498db',
                    }}
                    onClick={() => setShowEditForm(!showEditForm)} /> 
                    {showEditForm && 
                        <EditUser setShowEditForm={setShowEditForm} index={index} usersData={usersData} setUserData={setUserData} user={user}/>
                    }
                    <AiFillDelete className='action-icons' 
                    style={{
                        color: '#e74c3c'
                    }}
                    onClick={() => setShowDeleteModal(!showDeleteModal)}    
                    />
                    {showDeleteModal && 
                        <DeleteUser index={index} usersData={usersData} setUserData={setUserData} setShowDeleteModal={setShowDeleteModal} />
                    }
                    <AiFillEye className='action-icons' 
                    style={{color: '#555'}}
                    onClick={() => setShowProfile(true)}
                    />
                    {showProfile &&
                        <ProfileModal  setShowProfile={setShowProfile} index={index} usersData={usersData}/>
                    }
                </div>
            </td>
        </>
    )
}


export default UserInfo;