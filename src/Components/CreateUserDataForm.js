import React, { useState } from "react";
import FormDataShow from "./FormDataShow";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { FidgetSpinner } from "react-loader-spinner";

const CreateUserDataForm = () => {
  const [nameError, setNameError] = useState("");
  const [selectorError, setSelectorError] = useState("");
  const [checkboxError, setCkboxError] = useState("");
  const [checkboxStatus, setCheckboxStatus] = useState(false);

  //  fetch the selectors data from json
  const { isLoading, error, data } = useQuery("selectors", () =>
    fetch("https://test-task-pftw.onrender.com/selectors").then((res) =>
      res.json()
    )
  );
  const {
    isLoading: isLoading2,
    error2,
    data: userData,
    refetch,
  } = useQuery("getUserData", () =>
    fetch("https://test-task-pftw.onrender.com/getUserData").then((res) => res.json())
  ); 

  if (isLoading) {
    return <div style={{display: 'flex', justifyContent: 'center', height:'800px', marginTop: 20}}><FidgetSpinner
    visible={true}
    height="80"
    width="80"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
    ballColors={['#ff0000', '#00ff00', '#0000ff']}
    backgroundColor="#F4442E"
  /></div>;
  }
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
          if (checkboxStatus) {
            setCkboxError("");
            // here the fetch
            fetch(`https://test-task-pftw.onrender.com/createUserData`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({ name, selectors }),
            })
              .then((res) => res.json())
              .then((result) => {
                if (result.acknowledged) {
                  refetch()
                  toast.success("Purchase Product add SuccessFully!");
                }
                e.target.reset();
              });
          } else {
            setCkboxError("Select Agree to terms");
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
  };

  return (
    <div>
      <div class="gradient_color_body  pt-20 pb-19 h-[800px] ">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

        <div class="p-4  bg-base-100 text-base-content bg-transparent lg:flex justify-around ">
          <div className="mb-12 mt-30 w-4/4 sm:w-3/4 md:w-2/4 lg:w-2/4 xl:w-1/4    shadow-2xl rounded-2xl bg-[#ecf0f3] ">
            <div className="shadow-inner rounded-2xl">
              <div className="w-3/4 mx-auto py-12 ">
                <div>
                  <h1 className="text-2xl text-[#ae3ead] font-bold text-center">
                    Please enter your name and pick the Sectors you are
                    currently involved in.
                  </h1>

                  <form onSubmit={submitTheForm} className="mt-8 ">
                    <div className="flex flex-col mb-4">
                      <label className="text-gray-700 mb-1 font-semibold" htmlFor="name">
                        Name: 
                      </label>
                      <input
                        className="rounded-full p-2 shadow-inner  bg-gradient-to-t from-[#f9feff] to-[#e9eef1]"
                        name="name"
                        type="text"
                        placeholder="Enter Name"
                      />
                      <p style={{ color: "red" }}>{nameError}</p>
                    </div> 

          <label className="font-semibold" >Selectors: </label>
                    {/* show the select  */}
                    <select
                      name="selector"
                      multiple
                      size={5}
                      className="select select-primary w-full max-w-xs"
                    >
                      {data?.map((selectors) => (
                        <option value={selectors.selector}>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: `${selectors.space}${selectors.selector}`,
                            }}
                          />{" "}
                        </option>
                      ))}
                    </select>
                    <p style={{ color: "red" }}>{selectorError}</p>

                    <div className="form-control my-5">
                      <label className=" flex items-center cursor-pointer">
                        <input
                          onClick={() => setCheckboxStatus(!checkboxStatus)}
                          type="checkbox"
                          checked={checkboxStatus}
                          className="checkbox checkbox-primary"
                        />
                        <p className="label-text text-xl ml-4">
                          Agree to terms
                        </p>
                      </label>
                      <p style={{ color: "red" }}>{checkboxError}</p>
                    </div>

                    <input
                      className="w-full border  rounded-full  text-white  py-3 font-bold bg-gradient-to-br from-[#4f2deb] via-[#ae3ead] to-[#0dc4d1] "
                      type="submit"
                      value="SAVE"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div style={{height: "600px" }} >
            <FormDataShow  userData={userData} isLoading2={isLoading2} refetch={refetch} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUserDataForm;
