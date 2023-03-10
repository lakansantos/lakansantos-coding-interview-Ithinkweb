import { Button } from "reactstrap"
import { useState, useCallback, useEffect} from "react"
const EditUser = ({index, usersData, user, setUserData, setShowEditForm}) => {
    
    const [removeEditForm, setRemoveEditForm] = useState(false)
    const [profileValue, setprofileValue] = useState(user.profile)
    const [emailValue, setemailValue] = useState(user.email)
    const [firstNameValue, setfirstNameValue] = useState(user.firstName)
    const [lastNameValue, setplastNameValue] = useState(user.lastName)
    const [switches, setSwitch] = useState(false)
    const [formValid, setFormValid] = useState(false); 

    const [profileError, setProfileError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [firstNameError, setFirstNameError] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [editChangeError, setEditChangeError] = useState('')


    const validateForm = useCallback(() => {
        
        if(emailValue === '') {
            setEmailError('Email is required!')
        } else if (!/\S+@\S+\.\S+/.test(emailValue)){
            setEmailError('Invalid email address')
        } else {
            setEmailError('')
        }
 
        if(firstNameValue === '') {
            setFirstNameError('First Name is required!')
        } else {
            setFirstNameError('')
        }

        if(lastNameValue === '') {
            setLastNameError('Last Name is required!')
        } else {
            setLastNameError('')
        }

        if(emailValue === user.email && firstNameValue === user.firstName && lastNameValue === user.lastName && profileValue === user.profile){
            setEditChangeError('No changes made!')
        } else{
            setEditChangeError('')
        }


        setFormValid((firstNameValue!==user.firstName || lastNameValue!==user.lastName  || emailValue!==user.email || profileValue!==user.profile) && firstNameValue && lastNameValue && emailValue.match(/\S+@\S+\.\S+/) && !emailError && !lastNameError && !firstNameError);
    },  [emailValue, firstNameValue, lastNameValue, profileValue])


  
    //The validation will only start if user starts typing in the form
    useEffect(() => {
        if(!switches) setSwitch(true)
        if(switches) validateForm();
    },[validateForm])


    const handleEdit = () => {
        
        let newData = {
            profile: profileValue,
            email: emailValue,
            firstName: firstNameValue,
            lastName: lastNameValue
        }

        const editedData = [...usersData]
        editedData.splice(index, 1, newData)
        localStorage.setItem('formData', JSON.stringify(editedData))
        setUserData(editedData)
    }

    const handleSave = (e) => {
        e.preventDefault();

        if(formValid){
            handleEdit();
            setShowEditForm(false)
        } else {
            if(!switches) setSwitch(true)
            if(switches) validateForm();
        }

        
    }

    //to handle the users uploading their avatar as image
    const handleProfileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            setprofileValue(event.target.result);
        };
      
        reader.readAsDataURL(file);
      };

    return !removeEditForm && (
       <div className="form-container-item">
            <div className="form-wrapper">
                <form className="form-item" onSubmit={handleSave}>
                    <h1 style={{textAlign: 'left', fontWeight: 'bold'}}  className="w-75">Edit User</h1>
                    {editChangeError && <span className="text-danger text-start w-75">{editChangeError}</span> }
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                        <input type="text" placeholder="Email" className="w-75 input-edit form-control"
                        value={emailValue} readOnly={false} onChange={e => setemailValue(e.target.value)} 
                        />
                        {emailError &&
                        <span className='text-danger w-75'>{emailError}</span>
                        }
                    </div>
                    <div className="w-100 d-flex flex-column  justify-content-center align-items-center">
                        <input type="text" placeholder="First Name" className="w-75 input-edit form-control"
                        value={firstNameValue} readOnly={false} onChange={e => setfirstNameValue(e.target.value)} 
                        />
                        {firstNameError &&
                        <span className='text-danger w-75'>{firstNameError}</span>
                        }
                    </div>
                    <div className="w-100 d-flex flex-column  justify-content-center align-items-center">
                        <input type="text" placeholder="Last Name" className="w-75 input-edit form-control"
                        value={lastNameValue} readOnly={false} onChange={e => setplastNameValue(e.target.value)} 
                        />
                        {lastNameError &&
                        <span className='text-danger w-75'>{lastNameError}</span>
                        }
                    </div>
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                        <input type={'file'} placeholder={'Profile'} accept='image/*' className={profileError ? 'border-danger form-control' : 'w-75 form-control'} onChange={handleProfileChange} />
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