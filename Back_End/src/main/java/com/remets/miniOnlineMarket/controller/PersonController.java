package com.remets.miniOnlineMarket.controller;


import com.remets.miniOnlineMarket.domain.Person;
import com.remets.miniOnlineMarket.service.person.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/persons")
public class PersonController {

    @Autowired
    PersonService personService;

    @GetMapping
    public List<Person> getAll() {
        return personService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Person> getById(@PathVariable long id) {
        return personService.getById(id);
    }

    @PostMapping
    public void addPerson(@RequestBody Person person) {
        personService.addPerson(person);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable long id) {
        personService.deleteById(id);
    }
}
