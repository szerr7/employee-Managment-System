import axios from "axios";

class EmployeeService {
  
getEmployees() {
    return axios.get("http://localhost:8080/api/v1/employees");
  }
}