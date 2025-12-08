

const UserInput = ({setUserName}) => {
    return (
        <input placeholder="Please Provide Username" onChange={(e) => setUserName(e.target.value)}/>
    )
}

export default UserInput;