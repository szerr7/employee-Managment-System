package edu.miu.backend.controller;


import edu.miu.backend.domain.Employee;
import edu.miu.backend.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;


    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Employee> getAllEmployees(){
        return employeeService.getAllEmployees();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Employee getEmployeeById(@PathVariable long id){
        return employeeService.getEmployeeById(id).get();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeService.saveEmployee(employee);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteEmployeeById(@PathVariable long id){
        employeeService.deleteEmployeeById(id);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Employee updateEmployeeById(@PathVariable long id, @RequestBody Employee employee){
        return employeeService.updateEmployeeById(id, employee);
    }
}
