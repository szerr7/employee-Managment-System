import React, { useEffect, useState } from "react";
import EmployeeService from "../service/EmployeeService";
import { Link, useNavigate, useParams } from "react-router-dom";

const AddEmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const employeeData = { firstName, lastName, email };

  useEffect(() => {
    if (id) {
      EmployeeService.getEmployeeById(id)
        .then((res) => {
          setFirstName(res.data.firstName);
          setLastName(res.data.lastName);
          setEmail(res.data.email);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  function saveEmployee(e) {
    
        e.preventDefault();
    if (firstName === "" || lastName === "" || email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    
    if (id) {
      EmployeeService.updateEmployee(id, employeeData)
        .then(() => navigate("/employee"))
        .catch((err) => console.log(err));
      return;
    } else {
      EmployeeService.createEmployee(employeeData)
        .then(() => navigate("/employee"))
        .catch((err) => console.log(err));
    }

    EmployeeService.createEmployee(employeeData)
      .then(() => navigate("/employee"))
      .catch((err) => console.log(err));
  }

  function getTitle() {
    return id ? (
      <h2 className="text-center">Update Employee</h2>
    ) : (
      <h2 className="text-center">Add Employee</h2>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          {getTitle()}
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
              <button onClick={saveEmployee} className="btn btn-success">
                Save
              </button>{" "}
              <Link to={"/employee"} className="btn btn-danger">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponent;
