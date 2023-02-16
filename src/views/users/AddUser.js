import { useCallback, useEffect, useState } from 'react'
import {Button} from 'reactstrap'   

function AddUser ({handleAddUser}) {

    const [profile, setProfile] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const [formValid, setFormValid] = useState(false);  
    const [toggleForm,setToggleForm] = useState(true)
    const [sw, setSw] = useState(false)
    
    const [profileError, setProfileError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [firstNameError, setFirstNameError] = useState('')
    const [lastNameError, setLastNameError] = useState('')


    const validateForm = useCallback(() => {

        if(profile === '') {
            setProfileError('Profile is required!')

        } else {
            setProfileError('')
        }

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


        setFormValid(firstName && lastName && profile && email);
    },  [profile, email, firstName, lastName])

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


    return toggleForm && (
        <form className='form-container d-flex flex-row justify-content-between align-items-center gap-4 border mt-4 p-4 ' 
        onSubmit={handleSubmit}>
            <div className='input-field d-flex gap-4 justify-content-between flex-column w-100 needs-validation'>

                <div>
                    <input type={'text'} placeholder={'Email'}   className={emailError ? 'border-danger form-control' : 'w-100 form-control'}  onChange={e => setEmail(e.target.value)} />
                    {emailError &&
                    <span className='text-danger text-center'>{emailError}</span>
                    }
                </div>
                <div>   
                    <input type={'text'} placeholder={'First Name'}   className={firstNameError ? 'border-danger form-control' : 'w-100 form-control'}  onChange={e => setFirstName(e.target.value)} />
                    {firstNameError &&
                    <span className='text-danger text-center'>{firstNameError}</span>
                    }
                </div>
                <div>
                    <input type={'text'} placeholder={'Last Name'}  className={lastNameError ? 'border-danger form-control' : 'w-100 form-control'} onChange={e => setLastName(e.target.value)} />
                    {lastNameError &&
                    <span className='text-danger text-center'>{lastNameError}</span>
                    }
                </div>
                
                <div className='w-100'>
                    <input type={'file'} placeholder={'Profile'}  accept='image/*' className={profileError ? 'border-danger form-control' : 'w-100 form-control'} onChange={handleProfileChange} />
                    {profileError &&
                    <span className='text-danger text-center'>{profileError}</span>
                    }
                </div>
                <Button color='primary' className='submit-btn'>Submit</Button>
            </div>
        
        </form>
        
    )  
}


export default AddUser;