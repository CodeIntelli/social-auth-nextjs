import React from "react";
import { providers, getSession } from "next-auth/client";
import BtnLogin from "../Component/btnLogin";
const Login = ({ providers, session }) => {
  console.log({ providers, session });
  if (session) return null;
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div
          style={{ maxWidth: "450px", width: "100%" }}
          className="border border-1 max-auto p-4 shadow"
        >
          <h2
            className="text-center fw-bolder text-uppercase"
            style={{ color: "#555", letterSpacing: "1px" }}
          >
            Demo Login Task
          </h2>
          <p className="text-center">Login With NextAuth</p>
          <BtnLogin provider={providers.google} bgColor="#f2573f" />
          <BtnLogin provider={providers.facebook} bgColor="#0404be" />
          <BtnLogin provider={providers.github} bgColor="#444" />
        </div>
      </div>
    </>
  );
};

Login.getInitialProps = async (context) => {
  return {
    providers: await providers(context),
    session: await getSession(context),
  };
};

export default Login;
