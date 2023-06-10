// Import React and other dependencies
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

// Define the ListEmployeeComponent
const ListEmployeeComponent = () => {
  // State variable to store the employees
  const [employees, setEmployees] = useState([]);

  // UseEffect hook to fetch the employees when the component mounts
  useEffect(() => {
    getEmployees();
  }, []);

  // Function to fetch the employees from the server
  async function getEmployees() {
    try {
      // Get the employees from the server
      const response = await EmployeeService.getEmployees();
      console.log(response.data);
      // Set the employees state variable to the response data
      setEmployees(response.data);
    } catch (error) {
      // Handle errors
      console.log(error);
    }
  }

  // Function to delete an employee
  function deleteEmployee(e, id) {
    e.preventDefault();
    EmployeeService.deleteEmployee(id)
      .then(() => getEmployees())
      .catch((error) => console.log("Error in deleting employee", error));
  }

  // Render the component
  return (
    <div className="container">
      <Link to="/add-employee" className="btn btn-primary mb-2 mt-3">
        Add Employee
      </Link>
      <h2 className="text-center mb-4">List Employee</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Employee Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{`${employee.firstName} ${employee.lastName}`}</td>
              <td>{employee.email}</td>
              <td>
                <Link
                  to={`/add-employee/${employee.id}`}
                  className="btn btn-info mr-2"
                >
                  <FontAwesomeIcon icon={faEdit} /> Update
                </Link>{" "}
                <button
                  onClick={(e) => deleteEmployee(e, employee.id)}
                  className="btn btn-danger"
                >
                  <FontAwesomeIcon icon={faTrash} /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Export the ListEmployeeComponent
export default ListEmployeeComponent;
