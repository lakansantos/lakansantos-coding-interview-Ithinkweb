import {Form} from 'reactstrap'

function FormTemplate () {

    return(

        <Form className='d-flex flex-row justify-content-center align-items-center gap-4 border mt-4' style={{
            width: '100%'
        }}>
            <div className='input-field d-flex gap-4'>
                <input type={'text'} placeholder={'Profile'}></input>
                <input type={'email'} placeholder={'Email'}></input>
                <input type={'text'} placeholder={'First Name'}></input>
                <input type={'text'} placeholder={'Last Name'}></input>
            </div>

            <div className='button-area'>
                <input type={'submit'}></input>
            </div>
        </Form>
    )
}


export default FormTemplate;