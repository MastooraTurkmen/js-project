import { FormRow } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

const AddJob = () => {
    const { isLoading, position, company, jobLocation, jobType, jobTypeOptions, status, statusOptions, } = useSelector((store) => store.job)
    return (
        <h1>AddJob</h1>
    )
}

export default AddJob