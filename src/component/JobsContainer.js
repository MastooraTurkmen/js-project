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

    if (jobs.length === 0) {
        return (
            <Wrapper>
                <h2>No jobs to display...</h2>
            </Wrapper>
        )
    }

    return (
        <Wrapper>
            <h5>jobs info</h5>
            <div className="jobs">
                {jobs.map(() => {
                    
                })}
            </div>
        </Wrapper>
    )
}

export default JobsContainer