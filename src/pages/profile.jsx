import Navbar from "../components/navbar";
import Cards from "../components/userCards"

const Profile = () =>{
    return(
        <>
            <Navbar title={"Profile"}></Navbar>
            <h1>Profile Page</h1>
            <Cards />
        </>
    )
}

export default Profile;