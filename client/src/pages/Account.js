import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import ExpandSkills from "../components/ExpandSkills";
import ExpandAdd from "../components/ExpandAdd";
import Switch from "../components/Toggle";
import { Icon } from "@iconify/react";
import boltIcon from "@iconify/icons-fxemoji/bolt";
import { UPDATE_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { QUERY_USER } from "../utils/queries";

const Account = () => {
  const [formState, setFormState] = useState({
    _id: "",
    displayName: "",
    email: "",
    password: "",
  });

  const [updateUser, { error }] = useMutation(UPDATE_USER);
  const { data } = useQuery(QUERY_USER, {
    variables: { email: Auth.getUserEmail() },
  });
  const userData = data ? data.user : "";
  useEffect(() => {
    if (userData) {
      setFormState({
        _id: userData._id,
        displayName: userData.displayName,
        email: userData.email,
      });
    }
  }, [userData]);
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
      const { data: updateUserProfile } = await updateUser({
        variables: { userData: JSON.stringify(formState) },
      });
      Auth.updateUser(updateUserProfile);
    } catch (e) {
      console.error(e);
    }
  };
  console.log(userData)
  // update initial user data to formstate
  return (
    <>
      {/* <> */}
      {formState && (
          <main className="sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {/*md break column 1 */}
            <div className="grid content-start px-5">
              {/* update account form start*/}
              <div className="font-semibold mb-2 text-xl">
                Privacy and Security
              </div>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="displayName"
                    className="block font-semibold mb-1"
                  >
                    Display Name
                  </label>
                  <input
                    name="displayName"
                    type="text"
                    className="block w-full px-4 py-2 border rounded-lg focus:border-blue-400 focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    // placeholder={formState.displayName}
                    id="displayName"
                    value={formState.displayName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="block font-semibold mb-1">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="block w-full px-4 py-2 border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    // placeholder={formState.email}
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="password"
                    className="block font-semibold mb-1"
                  >
                    Password*
                  </label>
                  <input
                    name="password"
                    type="password"
                    className="block w-full px-4 py-2 border rounded-lg focus:border-blue-400 focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="**********"
                    id="password"
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="newPassword"
                    className="block font-semibold mb-1"
                  ></label>
                  <input
                    type="password"
                    className="block w-full px-4 py-2 border rounded-lg focus:border-blue-400 focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="New Password"
                    id="newPassword"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-5">
                  <button
                    type="submit"
                    className="form-btn w-full py-2 tracking-wide text-white rounded-lg text-xl"
                    id="updateAccount"
                  >
                    Update Account
                  </button>
                </div>
              </form>
              {/* {error && <div>Update failed</div>} */}
              {/* update account form end*/}
              {/* expand skills start (only on xs and sm screen)*/}
              <div className="px-1 display-contents sm:hidden">
                <div className="font-semibold text-xl">
                  Update Proficiencies:
                </div>
                <ExpandSkills
                skills={userData.skills}
                ></ExpandSkills>
                <ExpandAdd
                skills={userData.skills}
                ></ExpandAdd>
              </div>
              {/* expand skills end*/}
            </div>

            {/*md break column 2 */}
            <div className="grid content-start px-5">
              <div className="font-semibold mb-1 mt-2 sm:mt-0 text-xl">
                Donation Center
              </div>
              {/* donation center start */}
              <div className="flex justify-between mb-1">
                <p className="grid content-center">Balance:</p>
                <p>$450.00</p>
              </div>
              <div className="flex justify-between mb-1">
                <p className="grid content-center">Payment Method:</p>
                <p>XXXXXX4600</p>
              </div>
              <div className="flex justify-between mb-1">
                <p className="grid content-center">Last Deposit Amount:</p>
                <p>$650.00</p>
              </div>
              <div className="flex justify-between mb-3">
                <p className="grid content-center">Automatic Payments:</p>
                <Switch></Switch>
              </div>

              <button
                type="submit"
                className="form-btn py-2 mb-2 tracking-wide text-white rounded-lg text-xl"
                id="requestDeposit"
              >
                Request Deposit
              </button>
              {/* donation center end */}
              <div>
                {/* verification form start*/}
                <div className="flex justify-between mt-4 sm:mt-2">
                  <div className="font-semibold mb-2 text-xl ">
                    Verification:
                  </div>
                  <div className="flex">
                    <h2 className="mt-1 mr-1 text-xl">Verified</h2>
                    <div className="grid content-center mr-1">
                      <Icon icon={boltIcon} height="20" />
                    </div>
                  </div>
                </div>
                <form>
                  <div className="mb-3">
                    <label
                      htmlFor="githubVerify"
                      className="block font-semibold mb-1"
                    >
                      GitHub User Name
                    </label>
                    <input
                      type="text"
                      className="cursor-not-allowed block w-full px-4 py-2 md:py-1 rounded-lg"
                      placeholder="HelloPuggles"
                      id="githubVerify"
                      disabled
                    />
                  </div>
                  <div className="mb-5">
                    <button
                      type="submit"
                      className="form-btn w-full py-2 tracking-wide text-white rounded-lg text-xl"
                      id="requestVerify"
                    >
                      Request Verification
                    </button>
                  </div>
                </form>
                {error && (
                  <div className="text-base font-semibold">Update failed</div>
                )}
                {/* verification form end*/}
              </div>
            </div>

            {/*md break column 3 */}
            <div className="grid content-start px-5">
              {/* delete or snooze account end */}
              <div className="hidden sm:contents">
                <div className="font-semibold text-xl">
                  Update Proficiencies:
                </div>
                <ExpandSkills
                skills={userData.skills}
                ></ExpandSkills>
                <ExpandAdd
                skills={userData.skills}
                ></ExpandAdd>
              </div>
              {/* delete or snooze account start */}
              <div className="font-semibold mb-1 mt-1 text-xl">
                Account Status:
              </div>
              <div className="">
                <div className="font-semibold">Permanently delete</div>
                <button
                  type="submit"
                  className="w-full py-2 tracking-wide text-white rounded-lg text-xl"
                  id="delete-btn"
                >
                  Delete Account
                </button>
              </div>
            </div>
          </main>
      )}
    </>
  );
};

export default Account;
