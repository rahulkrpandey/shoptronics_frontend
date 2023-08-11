import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";

import {
  Container,
  FormContainer,
  Form,
  Label,
  Input,
  Button,
  OtherOptions,
  OptionList,
  Option,
} from "../StyledComponents";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../../../redux/utils/registerReducer";
import { useDispatch } from "react-redux";

const Register = () => {
  const [username, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNo, setMobileNo] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      address,
      mobileNo,
      email,
      password,
      username,
    };
    register(dispatch, { ...user }, navigate);
    setFirstName("");
    setLastName("");
    setAddress("");
    setMobileNo(0);
    setEmail("");
    setPassword("");
  };
  return (
    <Container>
      <FormContainer>
        <Form>
          <Label htmlFor="first name">first name</Label>
          <div className="border-2 border-primary rounded-md px-4 py-1 mb-4 flex gap-4">
            <input
              name="first name"
              className="outline-none w-full"
              type="text"
              placeholder="e.g. Rahul"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <Label htmlFor="last name">last name</Label>
          <div className="border-2 border-primary rounded-md px-4 py-1 mb-4 flex gap-4">
            <input
              className="outline-none  w-full"
              type="text"
              placeholder="e.g. Pandey"
              name="last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <Label htmlFor="address">your address</Label>
          <div className="border-2 border-primary rounded-md px-4 py-1 mb-4 flex gap-4">
            <input
              className="outline-none  w-full"
              type="text"
              placeholder="e.g. A-455 Madhubala Sweets Delhi"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <Label htmlFor="number">your contact number</Label>
          <div className="border-2 border-primary rounded-md px-4 py-1 mb-4 flex gap-4">
            <input
              className="outline-none  w-full"
              type="text"
              placeholder="e.g. 9991119990"
              name="number"
              value={mobileNo === 0 ? "" : mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
            />
          </div>

          <Label htmlFor="email">your email</Label>
          <div className="border-2 border-primary rounded-md px-4 py-1 mb-4 flex gap-4">
            <input
              className="outline-none  w-full"
              type="email"
              placeholder="e.g. abc@company.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <Label htmlFor="username">your username</Label>
          <div className="border-2 border-primary rounded-md px-4 py-1 mb-4 flex gap-4">
            <PersonIcon />
            <input
              className="outline-none  w-full"
              type="text"
              placeholder="eg. coderpi"
              name="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <Label htmlFor="password">your password</Label>
          <div className="border-2 border-primary rounded-md px-4 py-1 mb-4 flex gap-4">
            {<KeyIcon />}
            <input
              className="outline-none  w-full"
              type="password"
              placeholder="e.g. Abcsd@1234"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            onClick={submitHandler}
            className={
              "bg-primary uppercase text-[#f0f9ff] font-bold w-2/3 py-2 self-center rounded-lg"
            }
          >
            sumbit
          </button>
        </Form>
        <OtherOptions>
          <OptionList>
            <Option>
              <Link to={"/login"}>already have an account?</Link>
            </Option>
            {/* <Option>forgot password?</Option> */}
          </OptionList>
        </OtherOptions>
      </FormContainer>
    </Container>
  );
};

export default Register;
