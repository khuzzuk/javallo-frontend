package pl.javallo.javallo.frontend.web;

import org.springframework.stereotype.Component;

@Component
public class Authenticator {

  boolean authenticate(String key, String body, String hmac) {
    return false;
  }
}
