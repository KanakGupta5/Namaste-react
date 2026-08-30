import { useFormik } from "formik";
import "../../styles/login.css";

const Login = () => {
    const errors = {};
    const validate = (values) => {
        if (!values.firstName)
            errors.firstName = "First Name is required field";
        else if (values.firstName < 3 || values.firstName > 15)
            errors.firstName = "Valid length for first name is 3-15 letters";

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    return <>
        <div className="container">
            <form onSubmit={formik.handleSubmit} className="form-container">

                <div className="form-field">
                    <label>First Name</label>
                    <input className="input-field" id='firstName' name='firstName' onChange={formik.handleChange} value={formik.values.firstName}></input>
                    {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                </div>

                <div className="form-field">
                    <label>Last Name</label>
                    <input className="input-field" id='lastName' name='lastName' onChange={formik.handleChange} value={formik.values.lastName}></input>
                </div>

                <div className="form-field">
                    <label>Email</label>
                    <input className="input-field" id='email' name='email' onChange={formik.handleChange} value={formik.values.email}></input>
                </div>


                <span className="btn"><button className="submit-btn" type="submit">Submit</button></span>
            </form>

        </div>
    </>
}

export default Login;