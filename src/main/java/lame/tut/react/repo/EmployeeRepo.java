package lame.tut.react.repo;

import org.springframework.data.repository.CrudRepository;

import lame.tut.react.model.Employee;

public interface EmployeeRepo extends CrudRepository<Employee, Long> {
}
