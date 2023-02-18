import { Button } from "reactstrap"


const DeleteUser = ({index, usersData, setUserData, setShowDeleteModal}) => {

    const handleDelete = () => {
        const updatedData = usersData.filter((_, i) => i !== index)
        localStorage.setItem('formData', JSON.stringify(updatedData))
    
        setUserData(updatedData)
        setShowDeleteModal(false)
    }

    const user = usersData[index] 

    return (
        <div className="form-container-item">
            <div className="form-wrapper p-3">
                <div className="d-flex flex-column justify-content-evenly" style={{height: '500px'}}>
                    <h1 style={{textAlign: 'center', fontWeight: 'bold'}}  className="w-100">Delete User</h1>
                    <div className="d-flex flex-row justify-content-between align-items-center border">
                        {user?.profile  ?(
                            <img src={user.profile} alt="Profile" style={{width: '40%', height: '100%', background: 'black'}}/>
                        ): (
                            <div style={{height: '100%', width: '50%', objectFit: 'contain'}} className="d-flex flex-column justify-content-center align-items-center bg-black text-white"><img src="/noavatar.png" alt="" />No profile</div>
                        )}
                        <div className="details text-start w-100 ms-3 d-flex flex-column my-3">
                            <p>First name: {user?.firstName}</p>
                            <p>Last name: {user?.lastName}</p>
                            <p>Email: {user?.email}</p>
                        </div>
                    </div>
                    <div className="buttonContainer d-flex justify-content-center align-items-center gap-2" style={{height: '100px'}}>
                        <Button onClick={() => setShowDeleteModal(false)}>Cancel</Button>
                        <Button onClick={handleDelete} color="danger">Delete</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default DeleteUser;