import FormWrap from "../_components/form/FormWrap";
import LoadingPage from "../_components/LoadingPage";
import RegisterForm from "./RegisterForm";

const register = () => {
  return (
    <div className="px-5 md:px-9 mt-6  mx-auto  max-w-screen-xl">
      <FormWrap>
        <RegisterForm />
      </FormWrap>
    </div>
  );
};

export default register;
