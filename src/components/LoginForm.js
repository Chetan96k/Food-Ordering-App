import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";


const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});

const LoginForm = () => {
    const navigate = useNavigate();

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-heading">Login</h2>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={loginSchema}
                    onSubmit={(values) => {
                        console.log("Form Submitted:", values);
                        navigate("/home"); // ✅ Redirect to Body component
                    }}
                >
                    <Form className="login-form">
                        <div className="form-control">
                            <label>Email</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>

                        <div className="form-control">
                            <label>Password</label>
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" component="div" className="error" />
                        </div>

                        <button type="submit" className="login-button">Login</button>

                        <div className="signup-link">
                            Don't have an account? <Link to="/signup">Sign up</Link>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default LoginForm;
