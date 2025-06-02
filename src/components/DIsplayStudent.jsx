import React, { useState } from "react";

const DIsplayStudent = ({ allStudents, deleteStudent, editStudent }) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [profileImage, setprofileImage] = useState("");
  const [password, setpassword] = useState("");
  const [currentIndex, setcurrentIndex] = useState(0);
  return (
    <div>
      <h1>All Students</h1>
      <div className="d-flex gap-3 ">
        {allStudents.map((student, index) => (
          <div
            key={index}
            className=" d-flex flex-direction-row align-items-center border border-primary p-2 rounded-lg"
          >
            <img
              src={student.profileImage}
              alt=""
              width={100}
              height={100}
              className="rounded-pill"
            />

            <div>
              <h3>{student.firstName + " " + student.lastName}</h3>

              <p>{student.email}</p>

              <button
                className="btn btn-primary px-3 py-2 me-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModall"
              >
                edit
              </button>
              <button
                className="btn btn-danger px-3 py-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => setcurrentIndex(index)}
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* <button
        type="button"
        className="btn btn-primary"
       
      >
        Launch demo modal
      </button> */}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Are you sure you want to delete
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              This action is irreversible, be sure you want to delete
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => deleteStudent(currentIndex)}
              >
                yes, delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModall"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Are you sure you want to delete
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              This action is irreversible, be sure you want to edit
              <input
                type="text"
                placeholder="first name"
                onChange={(e) => setfirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="last name"
                onChange={(e) => setlastName(e.target.value)}
              />
              <input
                type="text"
                placeholder="email"
                onChange={(e) => setemail(e.target.value)}
              />
              <input
                type="text"
                placeholder="profile image link"
                onChange={(e) => setprofileImage(e.target.value)}
              />
              <input
                type="text"
                placeholder="password"
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() =>
                  editStudent(currentIndex, {
                    firstName,
                    lastName,
                    email,
                    profileImage,
                    password,
                  })
                }
              >
                yes, edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DIsplayStudent;
