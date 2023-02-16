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
import { AuthSchema } from "../../Schemas";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const onSubmit = async (values, actions) => {
    console.log(values);
    await axios
      .post("http://127.0.0.1:3001/api/login", values)
      .then((response) => {
        console.log(response);
        if (response.data.message === "Welcome") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Welcome !",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard");
        }
      })

      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Wrong Email or Password ! ",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(error);
        actions.setSubmitting(false);
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
      email: "",
      password: "",
    },
    validationSchema: AuthSchema,
    onSubmit,
  });
  console.log(errors);
  useEffect(() => {
    document.title = "Authentification Page";
  }, []);
  return (
    <Card className="panel">
      <CardBody>
        <form onSubmit={handleSubmit} autoComplete="off">
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
          <Button
            mt={4}
            colorScheme="teal"
            type="submit"
            isLoading={isSubmitting}
          >
            {" "}
            Login
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default Auth;
