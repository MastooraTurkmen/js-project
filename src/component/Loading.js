const Loading = ({ center }) => {
    return (
        <div className={center ? 'loading loading-center' : "center"}>Loading</div>
    )
}

export default Loading