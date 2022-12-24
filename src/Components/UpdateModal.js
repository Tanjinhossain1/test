import React, { useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

function UpdateModal({ setOpenUpdateModal, openUpdateModal, refresh }) {
  const [nameError, setNameError] = useState("");
  const [selectorError, setSelectorError] = useState("");
  const [checkboxError, setCkboxError] = useState("");
  const [checkboxStatus, setCheckboxStatus] = useState(false);

  //  fetch the selectors data from json
  const { isLoading, error, data, refetch } = useQuery("selectors", () =>
    fetch("https://test-task-pftw.onrender.com/selectors").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <div style={{display: 'flex', justifyContent: 'center', height:'800px', marginTop: 20}}><ThreeCircles
    height="100"
    width="100"
    color="#4fa94d"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel="three-circles-rotating"
    outerCircleColor=""
    innerCircleColor=""
    middleCircleColor=""
  /></div>;
  }
  const updateUserData = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const selectors = e.target.selector.value;

    if (name) {
      if (name.length > 4) {
        setNameError("");
        if (selectors) {
          setSelectorError("");
          if (checkboxStatus) {
            setCkboxError("");
            // here the updated fetch
            fetch(
              `https://test-task-pftw.onrender.com/updateUserData/${openUpdateModal}`,
              {
                method: "PUT",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({ name, selectors }),
              }
            )
              .then((res) => res.json())
              .then((data) => {
                refresh();
                toast.success("Update You Data SuccessFully");
                setOpenUpdateModal(false);
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
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={updateUserData} className="mt-8 ">
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
            {/* show the select  */}
            <select
              name="selector"
              multiple
              size={5}
              className="select select-primary w-full max-w-xs"
            >
              {data?.map((selectors) => (
                <option key={selectors._id} value={selectors.selector}>
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
                <p className="label-text text-xl ml-4">Agree to terms</p>
              </label>
              <p style={{ color: "red" }}>{checkboxError}</p>
            </div>
            <div className="modal-action">
              <label htmlFor="my-modal-6" className="btn btn-error text-white">
                Cancel
              </label>
              <button
                type="submit"
                className="btn btn-success font-bold text-white "
              >
                SAVE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateModal;
