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

    const handleSubmit = (e) => {
        const { name, email, lastName, location } = userData()
        e.preventDefault()
        if (!name || !email || !lastName || !location) {
            toast.error('please fill out all fields')
            return;
        }
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({ ...userData, [name]: value })
    }

    return (
        <Wrapper>
            <form className="form" onSubmit={handleSubmit}>
                <h3>profile</h3>
                <div className="form-center">
                    <FormRow
                        type='text'
                        name='name'
                        value={userData.name}
                        handleChange={handleChange}
                    />
                </div>
            </form>
        </Wrapper>
    )
}

export default Profile