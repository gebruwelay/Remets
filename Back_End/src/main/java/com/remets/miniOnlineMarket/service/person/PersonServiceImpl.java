package com.remets.miniOnlineMarket.service.person;

import com.remets.miniOnlineMarket.domain.Person;
import com.remets.miniOnlineMarket.repository.PersonRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
@Service
@Transactional
public class PersonServiceImpl implements PersonService {
    @Autowired
    PersonRepo personRepo;

    @Override
    public List<Person> getAll() {
        return personRepo.findAll();
    }

    @Override
    public Optional<Person> getById(Long id) {
        return personRepo.findById(id);
    }

    @Override
    public void addPerson(Person person) {
        personRepo.save(person);
    }

    @Override
    public void deleteById(long id) {
        personRepo.deleteById(id);
    }
}
