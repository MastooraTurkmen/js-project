import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { showStats } from "../../features/allJobs/allJobsSlice"
import { StatsContainer, Loading, ChartsContainer } from "../../component"

const States = () => {
    const { isLoading, monthlyApplications } = useSelector((store) => store.allJobs)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(showStats())
    }, [])


    return (
        <>
            <StatsContainer />
            {monthlyApplications.length > 0 && <ChartsContainer />}
        </>

    )
}

export default States