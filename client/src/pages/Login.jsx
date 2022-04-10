import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #21A29A ;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: right;
`;

const div = styled.div`
margin-left:100px;
padding: 100px;

`;
const Wrapper = styled.div`
    padding: 101px;
    margin-right:140px;
    width: 30%;
    background-color: white;
    margin-bottom:8px;
    margin-top:5px;
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
    border-radius:3px;
`;

const Button = styled.button`
    width: 25%;
    border: none;
    alignItems: 'center';
    padding: 10px 10px;
    background-color: green;
    cursor:pointer;
    font-weight: bold;
    color: white;
    border-radius: 5px;
`;

const Link = styled.a`

`;

const Login = () => {
  return (
      <Container>
          <div>
              <img src="banner1.jpg"></img>
          </div>
          <Wrapper>
              <Title>Login To Your Account</Title>
              <br></br>
              <Form>
                  <Input  placeholder="Username"/>
                  <br></br>
                  <Input  placeholder="Password"/>
                  <br></br>
                  <Button>LOGIN</Button>
                  <br></br>
                  <Link>DO NOT REMEMBER THE PASSWORD?</Link>
                  <br></br>
                  <Link>CREATE A NEW ACCOUNT</Link>
              </Form>
          </Wrapper>
      </Container>

  );
};

export default Login;