import { useState } from 'react'
import {Button} from 'reactstrap'

function AddUser () {

    const [profile, setProfile] = useState('')
    const [profileError, setProfileError] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [firstName, setFirstName] = useState('')
    const [firstNameError, setFirstNameError] = useState('')
    const [lastName, setLastName] = useState('')
    const [lastNameError, setLastNameError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if(profile === '') {
            setProfileError('Profile is required!')
        } else {
            setProfileError('')
        }

        if(email === '') {
            setEmailError('Email is required!')
        } else if (!/\S+@\S+\.\S+/.test(email)){
            setEmailError('Invalid email address');
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
    }

    return(

        <form className='d-flex flex-row justify-content-between align-items-center gap-4 border mt-4 p-4' 
        style={{
            width: '25%'
        }}
        onSubmit={handleSubmit}
        >
            <div className='input-field d-flex gap-4 justify-content-between flex-column w-100 needs-validation'>
                <div className='w-100'>
                    <input type={'text'} placeholder={'Profile'}  className={profileError ? 'border-danger form-control' : 'w-100 form-control'} onChange={e => setProfile(e.target.value)} />
                   {profileError &&
                     <div>
                            <span className='text-danger text-center'>{profileError}</span>
                     </div>
                   }
                </div>

                <div>
                    <input type={'email'} placeholder={'Email'}   className={emailError ? 'border-danger form-control' : 'w-100 form-control'}  onChange={e => setEmail(e.target.value)} />
                    {emailError &&
                     <div>
                            <span className='text-danger text-center'>{emailError}</span>
                     </div>
                   }
                </div>
                <div>
                    <input type={'text'} placeholder={'First Name'}   className={firstNameError ? 'border-danger form-control' : 'w-100 form-control'}  onChange={e => setFirstName(e.target.value)} />
                    {firstNameError &&
                     <div>
                            <span className='text-danger text-center'>{firstNameError}</span>
                     </div>
                   }
                </div>
                <div>
                    <input type={'text'} placeholder={'Last Name'}  className={lastNameError ? 'border-danger form-control' : 'w-100 form-control'} onChange={e => setLastName(e.target.value)} />
                    {lastNameError &&
                     <div>
                            <span className='text-danger text-center'>{lastNameError}</span>
                     </div>
                   }
                </div>
                
                <Button color='primary'>Submit</Button>
            </div>

        </form>
    )
}


export default AddUser;