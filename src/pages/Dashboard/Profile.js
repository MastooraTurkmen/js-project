import { useState } from "react"
import { FormRow } from '../../component';
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Profile = () => {
    const { isLoading, user } = useSelector((store) => store.user)
    const dispatch = useDispatch()
    const [userData, setUserData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        lastName: user?.lastName || '',
        location: user?.location || '',
    })

    return (
        <h1>Profile</h1>
    )
}

export default Profile