import { Button } from "reactstrap"
import { useState } from "react"
const EditUser = ({index, usersData, setUserData, setShowEditForm}) => {
    
    const [removeEditForm, setRemoveEditForm] = useState(false)
    return !removeEditForm && (
       <div className="form-container-edit">
            <div className="form-wrapper">
                <form className="form-edit">
                    <h1 style={{textAlign: 'left', fontWeight: 'bold'}}  className="w-75">Edit</h1>
                    <div className="w-100 d-flex justify-content-center align-items-center">
                        <input type="text" placeholder="Profile" className="w-75 input-edit"/>
                    </div>
                    <div className="w-100 d-flex justify-content-center align-items-center">
                        <input type="text" placeholder="Email" className="w-75 input-edit"/>
                    </div>
                    <div className="w-100 d-flex justify-content-center align-items-center">
                        <input type="text" placeholder="First Name" className="w-75 input-edit"/>
                    </div>
                    <div className="w-100 d-flex justify-content-center align-items-center">
                        <input type="text" placeholder="Last Name" className="w-75 input-edit"/>
                    </div>
                    <div className="button-container-edit d-flex gap-2 align-items-start w-75">
                        <Button onClick={() => setShowEditForm(false)}>Cancel</Button>
                        <Button color="primary">Save</Button>
                    </div>
                </form>
            </div>
       </div>
    )
}

export default EditUser