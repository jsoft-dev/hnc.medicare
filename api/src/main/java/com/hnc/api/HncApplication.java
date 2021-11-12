package com.hnc.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.servlet.DispatcherServletAutoConfiguration;
import org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration;

@SpringBootApplication(exclude = { DispatcherServletAutoConfiguration.class, ErrorMvcAutoConfiguration.class })
public class HncApplication {
    public static void main(String[] args) {
        SpringApplication.run(HncApplication.class, args);
    }
}
