package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.DocumentIqac;

@Repository
public interface DocumentIqacRepository extends JpaRepository<DocumentIqac,Long>{

	

}
