import { FormRow } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

const AddJob = () => {
    const { isLoading, position, company,
        jobLocation, jobType, jobTypeOptions,
        status, statusOptions, isEditing, editJobId } = useSelector((store) => store.job)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!position || !company || !jobLocation) {
            toast.error('Please fill out all fields')
            return
        }
    }

    const handleJobInput = (e) => {
        const name = e.target.name;
    }

    return (
        <h1>AddJob</h1>
    )
}

export default AddJob