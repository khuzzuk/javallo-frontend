package pl.javallo.javallo.frontend.web;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfiguration implements WebMvcConfigurer {
  @Override
  public void addResourceHandlers(ResourceHandlerRegistry registry) {
    registry.addResourceHandler("/**").addResourceLocations("classpath:/static/build/");
    registry.addResourceHandler("/index.html").addResourceLocations("classpath:/static/build/index.html");
  }

  public void addCorsMappings1(CorsRegistry registry) {
    registry.addMapping("/**");
  }
}
