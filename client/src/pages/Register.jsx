import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
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
  padding: 52px;
  margin-right: 100px;
  width: 30%;
  background-color: white;
  margin-bottom: 259px;
  margin-top: 255px;
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

const Agreement = styled.span`
  font-size: 15px;
  margin: 20px 0px;
`;

const Register = () => {
  const createNewUser = () => {
    console.log("Creating new user !!!");
    console.log(document.getElementById("username").value);
    console.log(document.getElementById("email").value);
    console.log(document.getElementById("password").value);
    var payload = {
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    axios({
      url: "http://localhost:8000/api/auth/register",
      method: "POST",
      data: payload,

      // url: "http://localhost:5000/login"
    })
      .then((response) => {
        console.log("Response is :", response);
        //   if (response.data.user) {
        //     //Authentication done.
        //     setuser_info(response.data.user);
        //     localStorage.setItem("token", response.data.jwt_token);
        //     // console.log(response.data.user)
        //     localStorage.setItem("user", JSON.stringify(response.data.user));
        // history.push({ pathname: "/feed", user: response.data.user });
        //   } else {
        //     setinfo(response.data);
        //   }
        // console.log("Response :",response)
      })
      .catch((error) => {
        //   setloading(false);
        console.log(error);
        console.log("Error occured");
      });
  };
  return (
    <>
      <Navbar />
      <Container>
        <div>
          <img src="ban.jpg"></img>
        </div>
        <Wrapper>
          <Title>Welcome to PharmaCare!</Title>
          <Title>Create Account</Title>
          <br></br>
          <div>
            <Input id="username" placeholder="username" />
            <br></br>
            <Input id="email" placeholder="email" />
            <br></br>
            <Input id="password" placeholder="Password" />
            <br></br>
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in acordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <br></br>
            <Button onClick={createNewUser}>CREATE</Button>
          </div>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
