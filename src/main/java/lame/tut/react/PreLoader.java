package lame.tut.react;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import lame.tut.react.model.Employee;
import lame.tut.react.repo.EmployeeRepo;

@Component
public class PreLoader implements CommandLineRunner {
	private final EmployeeRepo repository;

	@Autowired
	public PreLoader(EmployeeRepo repository) {
		this.repository = repository;
	}

	@Override
	public void run(String... strings) throws Exception {
		this.repository.save(new Employee("Frodo", "Baggins", "ring bearer"));
	}
}