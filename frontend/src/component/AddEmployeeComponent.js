import React, { useState } from "react";
import EmployeeService from "../service/EmployeeService";

import { Link, useNavigate } from "react-router-dom";

const AddEmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  
  //navigate to the list employee page
  const navigate = useNavigate();
  
const employeeData = {firstName, lastName, email};  
 

  
  function saveEmployee(e) {
    e.preventDefault();
    if (firstName === "" || lastName === "" || email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    EmployeeService.createEmployee(employeeData).then(navigate("/employee")).catch(err => console.log(err));
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h2 className="text-center">Add Employee</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter First Name"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter Last Name"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                  />
                </div>
                <button onClick={(e)=>saveEmployee(e)} className="btn btn-success">Save</button>{" "}
                <Link to={"/"} className="btn btn-danger" href="">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponent;
