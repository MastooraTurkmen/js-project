
const FormRowSelect = () => {
    return (
        <div className="form-row">
            <label htmlFor={name} className="form-label">
                {labelText || name}
            </label>
           
        </div>
    );
}

export default FormRowSelect