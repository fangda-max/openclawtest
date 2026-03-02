package com.example.aibot;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * AI Bot ∆Ù∂Ø¿‡
 */
@SpringBootApplication
@MapperScan("com.example.aibot.mapper")
public class AiBotApplication {

    public static void main(String[] args) {
        SpringApplication.run(AiBotApplication.class, args);
    }
}
