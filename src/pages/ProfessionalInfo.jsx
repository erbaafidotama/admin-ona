import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const Form = () => {
  return (
    <div className="container py-5 mx-auto">
      <div className="pb-5 border-b border-b-gray-200">
        <h2 className="text-2xl font-semibold">Personal Info</h2>
        <div className="flex justify-between">
          <div className="w-[50rem] text-gray-400 ">
            Tell as a bit about yourself. This information will appear on your
            public profile, so that potential buyer can get to know you better.
          </div>
          <div className="justify-end text-gray-400">*Mandaroty fields</div>
        </div>
      </div>

      <div className="py-5">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex">
            <div className="flex mr-2">
              <div>Full Name</div>
              <div className="text-red-500">*</div>
            </div>
            <div className="text-xs text-gray-300">Private</div>
          </div>
          <div className="flex">
            <div className="mr-2">
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="First Name"
                required
              />
            </div>
            <div className="mr-2">
              <input
                type="text"
                id="last_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex">
            <div className="flex mr-2">
              <div>Profile Picture</div>
              <div className="text-red-500">*</div>
            </div>
          </div>
          <div className="">
            <div className="bg-gray-200 text-white rounded-full p-3 text-[50px] h-40 w-40 flex items-center justify-center mx-1">
              F
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex">
            <div className="flex mr-2">
              <div>Description</div>
              <div className="text-red-500">*</div>
            </div>
          </div>
          <div className="mr-2">
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Share a bit about your exp"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex">
            <div className="flex mr-2">
              <div>Language</div>
              <div className="text-red-500">*</div>
            </div>
          </div>
          <div className="p-2 border border-gray-300 rounded-lg">
            <div className="flex">
              <div className="mr-2">
                <button
                  id="dropdownDefault"
                  data-dropdown-toggle="dropdown"
                  className="bg-gray-50 w-80 border border-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300m rounded-lg text-sm px-4 py-2.5 inline-flex justify-between dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  <div className="text-gray-400">Language </div>
                  <svg
                    className="w-4 h-4 ml-2 text-gray-400"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="mr-2">
                <button
                  id="dropdownDefault"
                  data-dropdown-toggle="dropdown"
                  className="bg-gray-50 w-80 border border-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300m rounded-lg text-sm px-4 py-2.5 inline-flex justify-between dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  <div className="text-gray-400">Language </div>
                  <svg
                    className="w-4 h-4 ml-2 text-gray-400"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="mr-2">
                <button className="px-5 py-2 text-gray-500 bg-gray-300 rounded-lg">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-10">
        <button className="bg-[#006EF8] text-white py-2 px-4 rounded-lg">Continue</button>
      </div>
    </div>
  );
};

const ProfesionalInfo = () => {
  return (
    <div>
      <div className="py-5 bg-white border-b border-b-gray-200">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="flex">
              <div className="bg-[#006EF8] text-white rounded-full p-3 text-[11px] h-1 w-1 flex items-center justify-center mx-1">
                1
              </div>
              <p className="mx-1">Personal Info</p>
              <AiOutlineRight className="mx-2 mt-1" />

              <div className="text-gray-500 rounded-full p-3 text-[11px] h-1 w-1 flex items-center justify-center mx-1 border-gray-500 bg-white border">
                2
              </div>
              <p className="mx-1">Professional Info</p>
              <AiOutlineRight className="mx-2 mt-1" />

              <div className="text-gray-500 rounded-full p-3 text-[11px] h-1 w-1 flex items-center justify-center mx-1 border-gray-500 bg-white border">
                3
              </div>
              <p className="mx-1">Linked Accounts</p>
              <AiOutlineRight className="mx-2 mt-1" />

              <div className="text-gray-500 rounded-full p-3 text-[11px] h-1 w-1 flex items-center justify-center mx-1 border-gray-500 bg-white border">
                4
              </div>
              <p className="mx-1">Account Security</p>
              <AiOutlineRight className="mx-2 mt-1" />
            </div>
            <div>
              <p className="text-sm text-gray-300">Completion Rate: 15%</p>
              <div className="w-[150px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Form />
    </div>
  );
};

export default ProfesionalInfo;
