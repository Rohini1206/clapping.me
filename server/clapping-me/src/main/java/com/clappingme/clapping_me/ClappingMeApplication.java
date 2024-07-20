package com.clappingme.clapping_me;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class ClappingMeApplication {

    public static void main(String[] args) {
        SpringApplication.run(ClappingMeApplication.class, args);
    }

    @RestController
    class MyController {
        @GetMapping("/")
        public String hello() {
            return "Hello, welcome to Clapping.me!";
        }
    }
}
