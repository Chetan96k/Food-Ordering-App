import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const signupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const SignupForm = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-[calc(100vh-100px)] overflow-hidden px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={signupSchema}
          onSubmit={(values) => {
            console.log("Form Submitted:", values);
            navigate("/home");
          }}
        >
          <Form className="space-y-6">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">Name</label>
              <Field
                type="text"
                name="name"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">Email</label>
              <Field
                type="email"
                name="email"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">Password</label>
              <Field
                type="password"
                name="password"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2.5 rounded-md font-semibold hover:bg-gray-800 transition duration-200"
            >
              Sign Up
            </button>

            <div className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-orange-500 font-medium hover:underline">
                Log in
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignupForm;
