import FormWrap from "../_components/form/FormWrap";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="px-5 md:px-9 mt-6  mx-auto  max-w-screen-xl">
      <FormWrap>
        <LoginForm />
      </FormWrap>
    </div>
  );
};

export default Login;
