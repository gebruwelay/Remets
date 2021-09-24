package com.remets.miniOnlineMarket.repository;
import com.remets.miniOnlineMarket.domain.Person;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface PersonRepo extends CrudRepository<Person, Long> {
    public List<Person> findAll();
}
