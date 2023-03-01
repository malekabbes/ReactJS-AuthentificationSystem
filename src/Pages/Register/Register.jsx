import {
  FormControl,
  FormLabel,
  Input,
  CardBody,
  Card,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useEffect } from "react";
import "../../assets/styles/panel.css";
import { RegisterSchema } from "../../Schemas";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const Swal = require("sweetalert2");

  const onSubmit = async (values, actions) => {
    console.log(values);
    await axios
      .post("http://127.0.0.1:3001/api/create", values)
      .then((response) => {
        console.log(response);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your account has been Added ! ",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      });

    actions.resetForm();
  };
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      f_name: "",
      l_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: RegisterSchema,
    onSubmit,
  });
  console.log(errors);
  useEffect(() => {
    document.title = "Registration Page";
  }, []);
  return (
    <Card className="panel">
      <CardBody>
        <form onSubmit={handleSubmit} autoComplete="off">
          <FormControl>
            <FormLabel className="p_label">First Name</FormLabel>
            <Input
              name="f_name"
              type="text"
              id="f_name"
              className="p_input"
              value={values.f_name}
              onChange={handleChange}
              focusBorderColor={
                errors.f_name && touched.f_name ? "red.300" : "lime"
              }
              onBlur={handleBlur}
              placeholder="Your Firstname here"
            />
          </FormControl>

          {errors.f_name && touched.f_name && (
            <Alert status="error" className="p_alert">
              <AlertIcon />
              {errors.f_name}
            </Alert>
          )}
          <FormControl>
            <FormLabel className="p_label">Last Name</FormLabel>
            <Input
              name="l_name"
              type="text"
              id="l_name"
              className="p_input"
              value={values.l_name}
              onChange={handleChange}
              focusBorderColor={
                errors.l_name && touched.l_name ? "red.300" : "lime"
              }
              onBlur={handleBlur}
              placeholder="Your Lastname here"
            />
          </FormControl>

          {errors.l_name && touched.l_name && (
            <Alert status="error" className="p_alert">
              <AlertIcon />
              {errors.l_name}
            </Alert>
          )}
          <FormControl>
            <FormLabel className="p_label">Email address</FormLabel>
            <Input
              name="email"
              type="email"
              id="email"
              className="p_input"
              value={values.email}
              onChange={handleChange}
              focusBorderColor={
                errors.email && touched.email ? "red.300" : "lime"
              }
              onBlur={handleBlur}
              placeholder="Your Email here"
            />
          </FormControl>

          {errors.email && touched.email && (
            <Alert status="error" className="p_alert">
              <AlertIcon />
              {errors.email}
            </Alert>
          )}
          <FormControl>
            <FormLabel className="p_label">Password</FormLabel>
            <Input
              id="password"
              name="password"
              type="password"
              focusBorderColor={
                errors.password && touched.password ? "red.300" : "lime"
              }
              placeholder="Your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormControl>
          {errors.password && touched.password && (
            <Alert status="error" className="p_alert">
              <AlertIcon />
              {errors.password}
            </Alert>
          )}
          <FormControl>
            <FormLabel className="p_label">Confirm Password</FormLabel>
            <Input
              name="confirm_password"
              type="confirm_password"
              id="confirm_password"
              value={values.confirm_password}
              onChange={handleChange}
              focusBorderColor={
                errors.confirm_password && touched.confirm_password
                  ? "red.300"
                  : "lime"
              }
              onBlur={handleBlur}
              placeholder="Retype your password"
            />
          </FormControl>

          {errors.confirm_password && touched.confirm_password && (
            <Alert status="error" className="p_alert">
              <AlertIcon />
              {errors.confirm_password}
            </Alert>
          )}
          <Button
            mt={4}
            colorScheme="teal"
            type="submit"
            isLoading={isSubmitting}
          >
            {" "}
            Register
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default Register;
