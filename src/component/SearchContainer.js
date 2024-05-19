import { FormRow, FormRowSelect } from ".";
import Wrapper from "../assets/wrappers/SearchContainer";
import { useSelector, useDispatch } from "react-redux";

const SearchContainer = () => {
    const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
        useSelector((store) => store.allJobs);
    const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);
    const dispatch = useDispatch();
    const handleSearch = (e) => { };
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Wrapper>
            <form className="form">
                <h4>search form</h4>
                
            </form>
        </Wrapper>
    )
}

export default SearchContainer