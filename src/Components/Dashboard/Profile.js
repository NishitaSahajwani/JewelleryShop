import React from "react";

function Profile() {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold" id="exampleModalLabel">
                User Profile
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="p-3 d-flex justify-content-between">
                <div className="d-flex p-3 align-items-center justify-content-center border rounded-circle">
                  DC
                </div>
                <div className="">
                  <p>Username</p>
                  <p>Type of user</p>
                </div>
              </div>
              <div>
                <h5 className="text-start my-3">Profile Settings</h5>
                {/* <hr/> */}
                
              </div>
              <div className="d-grid gap-2 mt-5">
              <button type="button" className="btn btn-danger">
                Log Out
              </button>
              </div>
            </div>
            <div className="modal-footer">
        
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
