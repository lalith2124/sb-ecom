package com.ecommerce.project.repositories;

import com.ecommerce.project.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public interface AddressRepository extends JpaRepository<Address, Long> {

}
