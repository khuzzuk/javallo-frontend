package pl.javallo.javallo.frontend.web;

import java.math.BigInteger;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class Authenticator {

  boolean authenticate(String key, String body, String hmac) {
    final String newHmac = calculateHmac(key, body);
    return newHmac.equals(hmac);
  }

  String calculateHmac(String key, String body) {
    try {
      Mac mac = Mac.getInstance("HmacSHA256");
      mac.init(new SecretKeySpec(key.getBytes(), "HmacSHA256"));
      byte[] rawHmac = mac.doFinal(body.getBytes());
      return new BigInteger(1, rawHmac).toString(16);
    } catch (NoSuchAlgorithmException | InvalidKeyException e) {
      log.error("authentication error", e);
    }
    return "";
  }
}
