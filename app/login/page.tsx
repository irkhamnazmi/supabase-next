"use client";

import { FormEventHandler, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import router from "next/router";

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ""
// );
export default function page() {

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    auth: "login",
  });
  const handleAuth = async (e: any) => {
    e.preventDefault();
    setUserInfo({
      ...userInfo,
      auth: userInfo.auth == "register" ? "login" : "register",
    });
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
   
  };
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-100">
            Nextauth + supabase
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-100"
              >
                Email address
              </label>
              <div className="mt-">
                <input
                  id="email"
                  onChange={({ target }) =>
                    setUserInfo({ ...userInfo, email: target.value })
                  }
                  type="email"
                  autoComplete="email"
                  placeholder="email"
                  required
                  className="block w-full rounded-md p-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={({ target }) =>
                    setUserInfo({ ...userInfo, password: target.value })
                  }
                  autoComplete="current-password"
                  placeholder="password"
                  required
                  className="block w-full rounded-md p-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gren-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                {userInfo.auth == "register" ? "Register" : "Login"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            {userInfo.auth == "register"
              ? "Already have an account? "
              : "Don't have an account? "}

            <button
              type="button"
              onClick={handleAuth}
              className="font-semibold leading-6 text-green-600 hover:text-green-500"
            >
              {userInfo.auth == "register" ? "Login" : "Register"}
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
