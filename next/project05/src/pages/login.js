import SignUpForm from "../forms/SignUp";
import LoginForm from "../forms/Login";
import { useState } from "react";
import RecoveryForm from "../forms/Recovery";

function Home() {
  const [stateForm, setStateForm] = useState({
    login: true,
    signup: false,
    recovery: false,
  });

  const handleState = (element) => {
    for (let index in stateForm) {
      index == element
        ? setStateForm((prevState) => {
            return { ...prevState, [index]: true };
          })
        : setStateForm((prevState) => {
            return { ...prevState, [index]: false };
          });
    }
  };

  return (
    <div className="min-h-screen min-w-full flex justify-start items-center bg-white">
      <div className="w-3/12 min-h-screen flex flex-wrap justify-center content-center bg-slate-200">
        {stateForm.login ? (
          <div className="w-11/12 flex justify-center items-center">
            <button
              onClick={() => {
                handleState("signup");
              }}
              className="w-full px-10 py-4 bg-slate-400 text-white"
            >
              Registrarse
            </button>
          </div>
        ) : (
          false
        )}

        {stateForm.login ? <LoginForm props={stateForm} /> : false}
        {stateForm.signup ? <SignUpForm handleState={handleState} /> : false}
        {stateForm.recovery ? (
          <RecoveryForm handleState={handleState} />
        ) : (
          false
        )}

        {stateForm.login ? (
          <div className="w-11/12 flex justify-center items-center">
            <button
              onClick={() => {
                handleState("recovery");
              }}
              className="w-full px-10 py-4 bg-slate-400 text-white"
            >
              Olvide mi contraseña
            </button>
          </div>
        ) : (
          false
        )}
      </div>
    </div>
  );
}

export default Home;
