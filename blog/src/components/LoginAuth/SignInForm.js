import useInput from "../../hooks/use-input";
import { Link, useNavigate } from "react-router-dom";
import { loginValidation, passwordValidation } from "./loginValidation";
import { useState } from "react";

const SignInForm = () => {
  const {
    enteredValue: enteredLogin,
    inputIsTouched: loginIsTouched,
    inputIsLeft: loginIsLeft,
    valueIsValid: enteredLoginIsValid,
    valueHasError: loginHasError,
    valueChangeHandler: loginChangeHandler,
    inputTouchedHandler: loginTouchedHandler,
    inputLeftHandler: loginLeftHandler,
    reset: resetLoginInput,
  } = useInput(loginValidation);

  const {
    enteredValue: enteredPassword,
    inputIsTouched: passwordIsTouched,
    inputIsLeft: passwordIsLeft,
    valueIsValid: enteredPasswordIsValid,
    valueHasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputTouchedHandler: passwordTouchedHandler,
    inputLeftHandler: passwordLeftHandler,
    reset: resetPasswordInput,
  } = useInput(passwordValidation);

  const navigate = useNavigate();

  const [correctLoginData, setCorrectLoginData] = useState(true);
  const DUMMY_USER = {
    login: "User123",
    password: "Password123456",
  };

  let formIsValid = false;

  if (enteredLoginIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    if (
      enteredLogin !== DUMMY_USER.login &&
      enteredPassword !== DUMMY_USER.password
    ) {
      setCorrectLoginData(false);
      return;
    }

    console.log("zalogowano");
    navigate("/admin-panel/dashboard");
    resetLoginInput("");
    resetPasswordInput("");
  };

  const inputStyles =
    "w-[100%] mt-[20px] lg:mt-[0px] lg:mb-[10px] text-[16px] lg:text-[12px] font-semibold text-gray_500 border-b-2 focus:outline-none placeholder-gray_700 ";

  const buttonStyles =
    "h-[40px] w-[100%] mt-[30px] lg:mt-[20px] text-[16px] font-semibold text-white rounded-[10px] ";

  const errorStyles =
    "text-[15px] lg:text-[10px] mt-[10px] font-medium text-red";

  return (
    <form
      onSubmit={submitFormHandler}
      className="custom-width md:w-[500px] lg:w-[400px] h-auto absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] px-[30px] lg:px-[20px] py-[20px]  custom-box-shadow rounded-lg"
    >
      <h1 className="text-[24px] font-bold text-gray_500">Hi, Welcome Back</h1>
      <p className="mt-[10px] lg:mt-[5px] lg:mb-[20px] text-[16px]  font-normal text-gray_700">
        It's good to see you again! Hope you didn't miss any interesting
        articles.
      </p>

      <input
        type="text"
        id="loign"
        onChange={loginChangeHandler}
        onBlur={loginLeftHandler}
        onInput={loginTouchedHandler}
        value={enteredLogin}
        placeholder="Login"
        className={
          inputStyles +
          `${
            !loginIsTouched
              ? "border-gray_700"
              : loginHasError
              ? "border-red"
              : "focus:border-blue"
          }`
        }
      ></input>
      <input
        type="password"
        id="password"
        onChange={passwordChangeHandler}
        onBlur={passwordLeftHandler}
        onInput={passwordTouchedHandler}
        value={enteredPassword}
        placeholder="Password"
        className={
          inputStyles +
          `${
            !passwordIsTouched
              ? "border-gray_700"
              : passwordHasError
              ? "border-red"
              : "focus:border-blue"
          }`
        }
      ></input>
      {((passwordHasError && passwordIsLeft) || !correctLoginData) && (
        <p className={errorStyles}>Incorrect login or password</p>
      )}

      <p className="text-end mt-[10px] lg:mt-[0px] text-[15px] lg:text-[12px] font-medium text-blue">
        Forgot Password?
      </p>
      <button
        className={
          buttonStyles + `${formIsValid ? "bg-blue " : "bg-gray_700 "}`
        }
      >
        Zaloguj się
      </button>

      <p className="text-center mt-[20px] lg:mt-[10px] text-[15px] lg:text-[12px] font-normal text-gray_700">
        <span> Don't have an account</span>
        <span className="font-semibold">
          <Link to="/login/signup"> Sign Up</Link>
        </span>
      </p>
    </form>
  );
};

export default SignInForm;
