package com.remets.miniOnlineMarket.repository;

import com.remets.miniOnlineMarket.domain.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends CrudRepository <User, Long> {

    public List<User> findAll();

    public Optional<User> findById(long id);

    public User findByName(String name);

    public Optional<User> findByUsername(String username);
    @Query("select u.id, u.name from User u where u.id = :id")
    public String getIDAndName(@Param("id") long id);

}
