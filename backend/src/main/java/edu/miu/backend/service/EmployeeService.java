package edu.miu.backend.service;

import edu.miu.backend.domain.Employee;

import java.util.List;
import java.util.Optional;

public interface EmployeeService {

    public Employee saveEmployee(Employee employee);

    public List<Employee> getAllEmployees();

    public Optional<Employee> getEmployeeById(Long id);

    public void deleteEmployeeById(Long id);

    public Employee updateEmployeeById(Long id , Employee employee);

}
