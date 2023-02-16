import { Button } from "reactstrap"
import { useState } from "react"
const EditUser = ({index, usersData, user, setUserData, setShowEditForm}) => {
    
    const [removeEditForm, setRemoveEditForm] = useState(false)
    const [profileValue, setprofileValue] = useState(user.profile)
    const [emailValue, setemailValue] = useState(user.email)
    const [firstNameValue, setfirstNameValue] = useState(user.firstName)
    const [lastNameValue, setplastNameValue] = useState(user.lastName)
    return !removeEditForm && (
       <div className="form-container-edit">
            <div className="form-wrapper">
                <form className="form-edit">
                    <h1 style={{textAlign: 'left', fontWeight: 'bold'}}  className="w-75">Edit</h1>
                    <div className="w-100 d-flex justify-content-center align-items-center">
                        <input type="text" placeholder="Profile" className="w-75 input-edit form-control" value={profileValue} readOnly={false} onChange={e => setprofileValue(e.target.value)} />
                    </div>
                    <div className="w-100 d-flex justify-content-center align-items-center">
                        <input type="text" placeholder="Email" className="w-75 input-edit form-control"
                        value={emailValue} readOnly={false} onChange={e => setemailValue(e.target.value)} 
                        />
                    </div>
                    <div className="w-100 d-flex justify-content-center align-items-center">
                        <input type="text" placeholder="First Name" className="w-75 input-edit form-control"
                        value={firstNameValue} readOnly={false} onChange={e => setfirstNameValue(e.target.value)} 
                        />
                    </div>
                    <div className="w-100 d-flex justify-content-center align-items-center">
                        <input type="text" placeholder="Last Name" className="w-75 input-edit form-control"
                        value={lastNameValue} readOnly={false} onChange={e => setplastNameValue(e.target.value)} 
                        />
                    </div>
                    <div className="button-container-edit d-flex gap-2 align-items-start w-75">
                        <Button onClick={() => setShowEditForm(false)}>Cancel</Button>
                        <Button color="primary" className="w-25">Save</Button>
                    </div>
                </form>
            </div>
       </div>
    )
}

export default EditUser