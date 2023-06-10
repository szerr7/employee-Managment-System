import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  getEmployees() {
    return axios.get(API_URL);
  }
}

export default new EmployeeService();
