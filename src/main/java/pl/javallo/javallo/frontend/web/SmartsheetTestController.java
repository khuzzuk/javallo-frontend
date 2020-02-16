package pl.javallo.javallo.frontend.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.RequestEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@Slf4j
@RestController
@RequestMapping("/test")
public class SmartsheetTestController {

  private static final String HMAC_HEADER = "Smartsheet-Hmac-SHA256";
  private final Authenticator authenticator;
  private List<RequestLogEntry> requestLogEntries = new ArrayList<>();
  private Map<Long, String> sharedSecrets = new HashMap<>();

  @PostMapping(path = "/webhook", headers = "Smartsheet-Hook-Challenge")
  public VerificationResponse verifyWebhook(@RequestBody VerificationRequest request) {
    log.info("verification request");
    final VerificationResponse verificationResponse = new VerificationResponse();
    verificationResponse.setSmartsheetHookResponse(request.getChallenge());
    return verificationResponse;
  }

  @RequestMapping("/webhook")
  public void event(RequestEntity<String> request) {
    final RequestLogEntry logEntry = new RequestLogEntry();
    logEntry.setBody(request.getBody());
    logEntry.setHeaders(request.getHeaders().toSingleValueMap());

    final String sharedSecret = sharedSecrets.values().iterator().next();
    logEntry.setHmac(request.getHeaders().get(HMAC_HEADER).get(0));

    logEntry.setCalculatedHmac(authenticator.calculateHmac(sharedSecret, request.getBody()));
    logEntry.setAuthenticated(authenticator.authenticate(sharedSecret, request.getBody(),
        logEntry.getHmac()));

    requestLogEntries.add(logEntry);
  }

  @GetMapping("/log")
  public List<RequestLogEntry> getRequestLogEntries() {
    return requestLogEntries;
  }

  @PutMapping("/secret")
  public void setSharedSecret(@RequestBody SecretData sharedSecret) {
    sharedSecrets.put(sharedSecret.getWebhookId(), sharedSecret.getSharedSecret());
  }

  @GetMapping("/secret")
  public Map<Long, String> getSharedSecrets() {
    return sharedSecrets;
  }

  @Data
  public static class VerificationRequest {

    private String challenge;
  }

  @Data
  public static class VerificationResponse {

    private String smartsheetHookResponse;
  }

  @Data
  public static class RequestLogEntry {

    private String body;
    private Map<String, String> headers;
    private String calculatedHmac;
    private String hmac;
    private boolean authenticated;
  }

  @Data
  public static class SecretData {

    private String sharedSecret;
    private long webhookId;
  }
}
