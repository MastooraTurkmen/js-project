import { useEffect } from "react";
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useSelector, useDispatch } from "react-redux";

const JobsContainer = () => {
    const { jobs, isLoading } = useSelector((store) => store.allJobs);
    const dispatch = useDispatch();

    if (isLoading) {
        return <Wrapper>
            <h2>Loading...</h2>
        </Wrapper>
    }

    return (
        <h1>JobsContainer</h1>
    )
}

export default JobsContainer