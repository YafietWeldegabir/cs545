import React from "react";

const Login = () => {
  return (
    <section>
      <form>
        <fieldset>
          <legend>Sign In</legend>
          <div>
            <label htmlFor="user">User</label>
            <input type="text" id="user" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </fieldset>
      </form>
    </section>
  );
};
export default Login;
