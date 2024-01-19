const Loading = ({ center }) => {
    return (
        <div className={center ? 'loading loading-center' : "center"}></div>
    )
}

export default Loading