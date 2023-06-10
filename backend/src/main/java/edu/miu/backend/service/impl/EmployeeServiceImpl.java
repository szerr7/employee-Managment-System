package edu.miu.backend.service.impl;


import edu.miu.backend.domain.Employee;
import edu.miu.backend.repository.EmployeeRepository;
import edu.miu.backend.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {


    @Autowired
    private EmployeeRepository employeeRepository;


    @Override
    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Optional<Employee> getEmployeeById(Long id) {
        return employeeRepository.findById(id);
    }

    @Override
    public void deleteEmployeeById(Long id) {
        if (!employeeRepository.existsById(id))
            throw new RuntimeException("Employee with id " + id + " does not exist");


        employeeRepository.deleteById(id);

    }

    @Override
    public Employee updateEmployeeById(Long id, Employee employee) {

        Employee emp = employeeRepository.findById(id).get();

        if (emp != null) {
            emp.setFirstName(employee.getFirstName());
            emp.setLastName(employee.getLastName());
            emp.setEmail(employee.getEmail());
            return employeeRepository.save(emp);

        }

        return null;
    }
}


