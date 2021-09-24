package com.remets.miniOnlineMarket.controller;

import com.remets.miniOnlineMarket.domain.Admin;
import com.remets.miniOnlineMarket.service.admin.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/admins")
public class AdminController {
    @Autowired
    AdminService adminService;

    @GetMapping
    public List<Admin> getAll() {
        return adminService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Admin> getById(@PathVariable long id) {
        return adminService.getById(id);
    }

    @PostMapping
    public void addAdmin(@RequestBody Admin admin) {
        adminService.addAdmin(admin);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable long id) {
        adminService.deleteById(id);
    }

}
