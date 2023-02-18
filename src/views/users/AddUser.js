import { useCallback, useEffect, useState } from 'react'
import {Button} from 'reactstrap'   

function AddUser ({handleAddUser, setToggleForm}) {

    const [profile, setProfile] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const [formValid, setFormValid] = useState(false);  
    const [sw, setSw] = useState(false)
    
    const [profileError, setProfileError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [firstNameError, setFirstNameError] = useState('')
    const [lastNameError, setLastNameError] = useState('')


    const validateForm = useCallback(() => {

        if(email === '') {
            setEmailError('Email is required!')
        } else if (!/\S+@\S+\.\S+/.test(email)){
            setEmailError('Invalid email address')
        } else {
            setEmailError('')
        }
 

        if(firstName === '') {
            setFirstNameError('First Name is required!')
        } else {
            setFirstNameError('')
        }

        if(lastName === '') {
            setLastNameError('Last Name is required!')
        } else {
            setLastNameError('')
        }


        setFormValid(firstName && lastName  && email);
    },  [email, firstName, lastName])

    useEffect(() => {
        if(!sw)setSw(true)
        if(sw) validateForm();
    },[validateForm])
      
    const handleSubmit = (e) => {


        e.preventDefault()
        if (formValid) {
            //if data valid, create a new data object 
            const newFormData = {
                profile: profile,
                email: email,
                firstName: firstName,
                lastName: lastName,
            };
            
            // Retrieve existing data from localStorage
            const storedData = localStorage.getItem('formData');
            // If data already exists, push the new data to it
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                parsedData.push(newFormData);
                localStorage.setItem('formData', JSON.stringify(parsedData));
            } else {
                // If no data exists, create a new array and save the new data
                const formDataArray = [newFormData];
                localStorage.setItem('formData', JSON.stringify(formDataArray));
            }
            handleAddUser();

        } else {
            if(!sw)setSw(true)
            if(sw) validateForm();

        }

    }

    const handleProfileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
      
        reader.onload = (event) => {
          setProfile(event.target.result);
        };
      
        reader.readAsDataURL(file);
      };


    return  (
       <div className='form-container-item'>
         <div className='form-wrapper'>
            <form className='form-item' 
        onSubmit={handleSubmit}>
                    <h1 style={{textAlign: 'left', fontWeight: 'bold'}} className='w-75'>Add user</h1>
                    <div className='input-field d-flex gap-4 justify-content-center align-items-center flex-column w-100 needs-validation'>
                        <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                            <input type={'text'} placeholder={'Email'}   className={`w-75 form-control ${emailError ? 'border-danger' : ''}`}  onChange={e => setEmail(e.target.value)} />
                            {emailError &&
                            <span className='text-danger w-75'>{emailError}</span>
                            }
                        </div>
                        <div className="w-100 d-flex flex-column justify-content-center align-items-center">   
                            <input type={'text'} placeholder={'First Name'}   className={`w-75 form-control ${firstNameError ? 'border-danger' : ''}`}  onChange={e => setFirstName(e.target.value)} />
                            {firstNameError &&
                            <span className='text-danger w-75'>{firstNameError}</span>
                            }
                        </div>
                        <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                            <input type={'text'} placeholder={'Last Name'}  className={`w-75 form-control ${lastNameError ? 'border-danger' : ''}`} onChange={e => setLastName(e.target.value)} />
                            {lastNameError &&
                            <span className='text-danger w-75'>{lastNameError}</span>
                            }
                        </div>
                        
                        <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                            <input type={'file'} placeholder={'Profile'}  accept='image/*' className={'w-75 form-control'} onChange={handleProfileChange} />
                        </div>
                        <div className="button-container-edit d-flex gap-2 align-items-start w-75">
                                <Button onClick={() => setToggleForm(false)}>Cancel</Button>
                                <Button color='primary' className='submit-btn'>Submit</Button>
                        </div>
                    </div>
                </form>
            </div>
       </div>
        
    )  
}


export default AddUser;