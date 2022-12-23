import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [nameError, setNameError] = useState("");
  const [selectorError, setSelectorError] = useState(""); 
  const [checkboxError, setCkboxError] = useState(""); 
  const [checkboxStatus, setCheckboxStatus] = useState(false);


  const submitTheForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const selectors = e.target.selector.value;

    // this for validate or send the data on backend
    if (name) {
      if (name.length > 4) {
        setNameError("");
        if (selectors) {
          setSelectorError("");
          if(checkboxStatus){ 
            setCkboxError(" ")
            // here the fetch 
          }else{
            setCkboxError("Select Agree to terms")
          }

        } else {
          setSelectorError("Plese Select The Selector");
        }
      }
      // I can use here a validation framwork but here only two field that's why i do manually
      else {
        setNameError("Give Valid Name Minimum 5 Charecter");
      }
    } else {
      setNameError("Please Provide your name");
    }
    console.log(name, selectors);
  };

  console.log('checkbox ', checkboxStatus)
  return (
    <div>
      <div class="gradient_color_body h-3/4 ">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

        <ul class="   p-4    bg-base-100 text-base-content bg-transparent">
          <div className="mb-12 mt-30 w-4/4 sm:w-3/4 md:w-2/4 lg:w-2/4 xl:w-1/4 xl:ml-32   shadow-2xl rounded-2xl bg-[#ecf0f3] ">
            <div className="shadow-inner rounded-2xl">
              <div className="w-3/4 mx-auto py-12 ">
                <div>
                  <h1 className="text-2xl text-[#ae3ead] font-bold text-center">
                    Please enter your name and pick the Sectors you are
                    currently involved in.
                  </h1>
                  <form onSubmit={submitTheForm} className="mt-8 ">
                    <div className="flex flex-col mb-4">
                      <label className="text-gray-700 mb-1" htmlFor="name">
                        Name
                      </label>
                      <input
                        className="rounded-full p-2 shadow-inner  bg-gradient-to-t from-[#f9feff] to-[#e9eef1]"
                        name="name"
                        type="text"
                        placeholder="Enter Name"
                      />
                      <p style={{ color: "red" }}>{nameError}</p>
                    </div>

                    <select
                    name="selector"
                      multiple
                      size={5}
                      className="select select-primary w-full max-w-xs"
                    >
                      <option>What is the best TV show?</option>
                      <option>Game of Thrones</option>
                      <option>Lost</option>
                      <option>Breaking Bad</option>
                      <option>Walking Dead</option>
                    </select>
                    <p style={{ color: "red" }}>{selectorError}</p>
                    <div className="form-control mb-5">
                      <label className="label cursor-pointer">
                        <input
                          onClick={() => setCheckboxStatus(!checkboxStatus)}
                          type="checkbox"
                          checked={checkboxStatus}
                          className="checkbox checkbox-primary"
                        />
                        <span
                        
                          className="label-text text-xl  "
                        >
                          Agree to terms
                        </span>
                      </label> 
                      <p style={{ color: "red" }}>{checkboxError}</p>
                    </div>

                    <input
                      className="w-full border    rounded-full  text-white  py-3 font-bold bg-gradient-to-br from-[#4f2deb] via-[#ae3ead] to-[#0dc4d1] "
                      type="submit"
                      value="SAVE"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
