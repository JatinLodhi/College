package com.example.demo.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer,Long> {

			public Optional<Customer> findByEmail(String email);
}
