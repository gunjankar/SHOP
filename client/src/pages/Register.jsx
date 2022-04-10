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
    padding: 52px;
    margin-right:100px;
    width: 30%;
    background-color: white;
    margin-bottom:259px;
    margin-top:255px;
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

const Agreement = styled.span`
    font-size: 15px;
    margin: 20px 0px;
`;

const Register = () => {
    return (
        <Container>
            <div>
                <img src="ban.jpg" ></img>
            </div>
            <Wrapper>
                <Title>Welcome to PharmaCare!</Title>
                <Title>Create Account</Title>
                <br></br>
                <Form>
                    <Input placeholder="username"/>
                    <br></br>
                    <Input placeholder="email"/>
                    <br></br>
                    <Input placeholder="Password"/>
                    <br></br>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in acordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <br></br>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
  
    );
  };
  
  export default Register;