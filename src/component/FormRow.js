const FormRow = () => {
    return (
        <div className="form-row">
            <label htmlFor="name" className="form-label">
                name
            </label>
            <input
                className="form-input"
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
            />
        </div>
    )
}

export default FormRow