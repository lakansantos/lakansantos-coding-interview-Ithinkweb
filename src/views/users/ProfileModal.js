import {AiOutlineClose} from 'react-icons/ai'
const ProfileModal = ({setShowProfile, index, usersData}) => {

    let user = usersData[index];
    return(
        <div className="card-wrapper">
            <div className="card-modal">
                <button className="close-btn" onClick={() => setShowProfile(false)}>
                    <span><AiOutlineClose /></span>
                </button>
                <h1 className='user-profile-heading'>{`${user?.firstName} ${user?.lastName}`}</h1>
                <div className='profile-details-container'>
                    <div className="img-container-profile-modal">
                        {user.profile? (
                            <img src={user.profile} alt="profile" 
                            className='profile-avatar-profile-modal'/>
                        ) : 
                        (
                            <div className='no-avatar-wrapper'>
                                <img src="noavatar.png" alt="profile" 
                                className='no-avatar-profile-modal'/>
                                <p className='text-white'>No Profile</p>
                            </div>
                        )}
                    </div>
                    <div className="texts-details-container">
                        <h2 className='profile-name-profile-modal'>{`${user?.firstName} ${user?.lastName}`}</h2>
                        <p>First Name: {user?.firstName}</p>
                        <p>Last Name: {user?.lastName}</p>
                        <p>Email: {user?.email}</p>
                        <div className="social-media-container">
                            <hr />
                            <h2>Socials</h2>
                            <div className="social-medias">
                                <img src="facebook.png" alt=""  width={'40px'} height={'40px'}/>
                                <img src="instagram.png" alt="" width={'40px'} height={'40px'}/>
                                <img src="twitter.png" alt=""   width={'40px'} height={'40px'}/>
                                <img src="linkedin.png" alt=""  width={'40px'} height={'40px'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileModal;