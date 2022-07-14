import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import LogoLg from "../components/LogoLg";
import { useMutation, useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { LOGIN_USER } from "../utils/mutations";
import { GET_ALL_PROJECTS } from "../utils/queries";

const Login = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);
  const [projects, setProjects] = useState([]);
  // get the projects sorted by latest

  const { data } = useQuery(GET_ALL_PROJECTS);
  const localProjects = data ? data.projects : "";
  useEffect(() => {
    if (localProjects) {
      setProjects([...localProjects]);
    }
  }, [localProjects]);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (

    
    <div className="flex flex-col justify-center items-center h-screen text-xl px-10">
    

      
        <div className="grid grid-col justify-center object-none overflow-visible">
          <LogoLg></LogoLg>
        </div>

      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
        <form onSubmit={handleFormSubmit} className="mt-6">
          <div className="mb-3">
            <label htmlFor="email" className="block"></label>
            <input
              type="email"
              className="block text-xl w-full px-4 py-3 mt-2 border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email Address"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="block"></label>
            <input
              type="password"
              className="block text-xl w-full px-4 py-3 mt-2 border rounded-lg focus:border-blue-400 focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Password"
              id="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
          <div className="mt-5">
            <button
              className="form-btn w-full py-2 tracking-wide text-white rounded-lg text-2xl"
              id="login-btn"
              type="submit"
            >
              Log In
            </button>
          </div>
        </form>
        <div className="mt-5 flex justify-center w-full">
          <div className="inline-block text-lg font-bold h-full content-center text-center">
            Need an account?
          </div>
          <a href="/register" className="ml-1 color-pY" id="register">
            Register Here!
          </a>
          {error && <div>Login failed</div>}
       
        </div>
        </div>
     



      

      <div className="px-5 hidden overflow-hidden">
        <div className="max-w-xl flex flex-col absolute inset-y-0 right-10">
          {projects.length>0&&projects.map((project) => {
            return (
              <div id={project._id}>
                {" "}
                <Card projectContent={project} />
              </div>
            );
          })}
        </div>
      </div>
      <footer className="color-pY fixed bottom-0 w-full p-4 text-lg font-semibold">
        <a href="/">About HelloWorld</a>
      </footer>
    </div>
  
    
  );
};
export default Login;
