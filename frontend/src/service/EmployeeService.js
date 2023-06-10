import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  getEmployees() {
    return axios.get(API_URL);
  }

  createEmployee(employee) {
    return axios.post(API_URL, employee);
  }

 updateEmployee(id, employee) {
 
    return axios.put(`${API_URL}/${id}`, employee);
  }

        getEmployeeById(id) {
                return axios.get(`${API_URL}/${id}`);
        }
}

export default new EmployeeService();
