import axios from "axios";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();


  let navigate = useNavigate();
  let location = useLocation();
  const { path } = location.state || { path: "/" };



  const onSubmit = async (data) => {
    console.log(data);

    const formData = {
      auth: {
        email: data.email,
        deviceUuid: `${process.env.REACT_APP_TOKEN}`
      },
      password: data.password
    };

    try {
      axios
        .post("https://devapi.dhakai.com/api/v2/login-buyer", formData, {
          headers: {
            Authorization: `Basic ${process.env.REACT_APP_TOKEN}`
          }
        })
        .then((res) => {
          localStorage.setItem("token", JSON.stringify(res.data.result.token));
          navigate(path);
        alert("Login Successfully")
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="login-div" style={{ margin: "200px auto" }}>
      <Form
        className="form"
        onSubmit={handleSubmit(onSubmit)}
        style={{ border: "1px solid grey", padding: "70px" }}
      >
        <Row>
          <Col md={12} sm={12}>
            <Form.Group style={{ marginBottom: "25px" }}>
              <Form.Control
                style={{
                  padding: "15px",
                  fontWeight: "500",
                  fontSize: "1.2rem",
                  lineHeight: "0.5"
                }}
                type="email"
                defaultValue="rajib2@gmail.com"
                placeholder="Enter Email"
                {...register("email")}
              />
            </Form.Group>
          </Col>
          <Col md={12} sm={12}>
            <Form.Group style={{ marginBottom: "25px" }}>
              <Form.Control
                style={{
                  padding: "15px",
                  fontWeight: "500",
                  fontSize: "1.2rem",
                  lineHeight: "0.5"
                }}
                type="password"
                defaultValue="123456"
                placeholder="Enter Password"
                {...register("password", {
                  required: "You must specify a password",
                  minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters"
                  }
                })}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </Form.Group>
          </Col>
          <Col style={{ marginTop: "15px" }} md={12} sm={12}>
            <Button
              //   disabled={loadings}
              className="btn btn-primary"
              type="submit"
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Login;
