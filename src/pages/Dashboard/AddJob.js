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
        const value = e.target.value;
        console.log(name, value);
    }

    return (
        <Wrapper>
            <form className="form">
                <h3>{isEditing ? 'edit job' : 'add job'}</h3>
                <div className="form-center">
                    {/* position */}
                    <FormRow
                        type='text'
                        name='position'
                        value={position}
                        handleChange={handleJobInput}
                    />
                </div>
            </form>
        </Wrapper>
    )
}

export default AddJob