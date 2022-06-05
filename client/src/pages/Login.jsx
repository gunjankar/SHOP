import styled from "styled-components";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useToasts } from "react-toast-notifications";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #21a29a;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: right;
`;

const div = styled.div`
  margin-left: 100px;
  padding: 100px;
`;
const Wrapper = styled.div`
  padding: 101px;
  margin-right: 140px;
  width: 30%;
  background-color: white;
  margin-bottom: 8px;
  margin-top: 5px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 800;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 5px 5px 0px 0px;
  padding: 10px;
  border-radius: 3px;
`;

const Button = styled.button`
  width: 25%;
  border: none;
  alignitems: "center";
  padding: 10px 10px;
  background-color: green;
  cursor: pointer;
  font-weight: bold;
  color: white;
  border-radius: 5px;
`;

const Link = styled.a``;

const Login = () => {
  const navigate = useNavigate();
  const { addToast } = useToasts();
  const loginUser = () => {
    console.log("Logging in new user !!!");
    console.log(document.getElementById("username").value);
    // console.log(document.getElementById("email").value);
    console.log(document.getElementById("password").value);
    var payload = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };
    axios({
      url: "http://localhost:8000/api/auth/login",
      method: "POST",
      data: payload,

      // url: "http://localhost:5000/login"
    })
      .then((response) => {
        console.log("Response is :", response);
        addToast("You are logged in now !", {
          appearance: "success",
          // autoDismiss: true,
        });
        localStorage.setItem("token", response.data.acessToken);
        localStorage.setItem("userId", response.data._id);
        navigate("/");
        //   if (response.data.user) {
        //     //Authentication done.
        //     setuser_info(response.data.user);
        //     localStorage.setItem("token", response.data.jwt_token);
        //     // console.log(response.data.user)
        //     localStorage.setItem("user", JSON.stringify(response.data.user));
        // history.push({ pathname: "/" });
        //   } else {
        //     setinfo(response.data);
        //   }
        // console.log("Response :",response)
      })
      .catch((error) => {
        //   setloading(false);
        console.log(error);
        console.log("Error occured");
        addToast("Oops ! Error Occured", {
          appearance: "error",
          // autoDismiss: true,
        });
      });
  };
  return (
    <>
      <Navbar />
      <Container>
        <div>
          <img src="banner1.jpg"></img>
        </div>
        <Wrapper>
          <Title>Login To Your Account</Title>
          <br></br>
          <div>
            <Input id="username" placeholder="Username" />
            <br></br>
            <Input id="password" placeholder="Password" />
            <br></br>
            <Button onClick={loginUser}>LOGIN</Button>
            <br></br>
            <Link>DO NOT REMEMBER THE PASSWORD?</Link>
            <br></br>
            <Link>CREATE A NEW ACCOUNT</Link>
          </div>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
