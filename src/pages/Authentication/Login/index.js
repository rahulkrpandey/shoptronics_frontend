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
import { useState } from "react";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/utils/loginReducer";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const submitHandler = (e) => {
    e.preventDefault();

    //dispatch();
    const user = {
      username,
      password,
    };

    setUsername("");
    setPassword("");

    login(dispatch, { ...user });
  };

  return (
    <Container>
      {error && <div>something went wrong</div>}
      <FormContainer>
        <Form>
          <label htmlFor={"username"} className="capitalize ">
            your username
          </label>

          <div className="border-2 border-primary rounded-md px-4 py-1 mb-4 flex gap-4">
            {<PersonIcon />}
            <input
              className="outline-none  w-full"
              type={"text"}
              placeholder={"e.g. coderpi"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <label htmlFor={"password"} className="capitalize ">
            your password
          </label>
          <div className="border-2 border-primary rounded-md px-4 py-1 mb-4 flex gap-4">
            {<KeyIcon />}
            <input
              className="outline-none  w-full"
              type={"password"}
              placeholder={"e.g. Abcsd@1234"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="bg-primary uppercase text-[#f0f9ff] font-bold w-2/3 py-2 self-center rounded-lg"
            type={"submit"}
            disabled={isFetching}
            onClick={submitHandler}
          >
            {"submit"}
          </button>
        </Form>
        <OtherOptions>
          <OptionList>
            <Option>
              <Link to={"/register"}>don't have an account?</Link>
            </Option>
            <Option>forgot password?</Option>
          </OptionList>
        </OtherOptions>
      </FormContainer>
    </Container>
  );
};

export default Login;
