
const FormRowSelect = () => {
    return (
        <div className="form-row">
            <label htmlFor={name} className="form-label">
                {labelText || name}
            </label>
            <select
                name={name}
                value={value}
                id={name}
                onChange={handleChange}
                className="form-select"
            >
                {list.map((itemValue, index) => {
                    return (
                        
                    );
                })}
            </select>
        </div>
    );
}

export default FormRowSelect