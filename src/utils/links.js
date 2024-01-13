import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const links = [
    {
        id: 1,
        text: 'stats',
        path: '/',
        icon: <IoBarChartSharp />
    },
    {
        id: 2,
        text: 'all jobs',
        path: 'all-jobs',
        icon: <MdQueryStats />
    },
]

export default links;