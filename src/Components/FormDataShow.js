import React, { useState } from "react";
import { useQuery } from "react-query";
import UpdateModal from "./UpdateModal";
import DeleteModal from "./DeleteModal";
import { toast } from "react-toastify"; 
import { ThreeCircles } from "react-loader-spinner";

function FormDataShow({userData, refetch, isLoading2}) {
  const [openUpdateModal, setOpenUpdateModal] = useState(0);
  const [deleteStatus, setDeleteStatus] = useState(0);
  

  const deleteData = (id) => { 
    fetch(`https://test-task-pftw.onrender.com/deleteUserData/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setDeleteStatus(false) 
        toast.warning('You Data Has Been Deleted')
        refetch();
      });
  };
   
  if (isLoading2) {
    return <div style={{display: 'flex', justifyContent: 'center', height:'800px', marginTop: 20}}><ThreeCircles
    height="100"
    width="100"
    color="#cafc03"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel="three-circles-rotating"
    outerCircleColor=""
    innerCircleColor=""
    middleCircleColor=""
  /></div>;
  }
  return (
    <div className="lg:w-[800px] h-[500px] ">
      <div className="overflow-x-auto overflow-y-scroll h-[570px] bg-white">
        <table className="table w-full  overflow-scroll ">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Selectors</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((data, index) => (
              <tr key={data._id}>
                <th>{index}</th>
                <th>{data.name}</th>
                <th>{data.selectors}</th>
                <th>
                  <label
                    onClick={() => setOpenUpdateModal(data._id)}
                    htmlFor="my-modal-6"
                  >
                    <img
                      width={30}
                      style={{ cursor: "pointer" }}
                      src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png"
                    />{" "}
                  </label>
                </th>
                <th htmlFor="deleteModal" > 
                <label htmlFor="deleteModal" onClick={() => setDeleteStatus(data._id)} >
                  <img
                    width={30}
                    style={{ cursor: "pointer" }}
                    src="https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/delete.png"
                    />{" "} 
                    </label>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteStatus ? <DeleteModal><button onClick={() => deleteData(deleteStatus)} className="btn btn-outline bg-red-500 border-0">Confirm Delete</button></DeleteModal> : null }
      {openUpdateModal ? <UpdateModal openUpdateModal={openUpdateModal} setOpenUpdateModal={setOpenUpdateModal} refresh={refetch}></UpdateModal> : null }
    </div>
  );
}

export default FormDataShow;
