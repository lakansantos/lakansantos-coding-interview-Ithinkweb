

const DeleteUser = ({index, usersData, setUserData}) => {
    const updatedData = usersData.filter((_, i) => i !== index)
    localStorage.setItem('formData', JSON.stringify(updatedData))

    setUserData(updatedData)
}



export default DeleteUser;