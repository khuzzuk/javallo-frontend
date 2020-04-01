package pl.javallo.javallo.frontend.course;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("course")
public class CourseRemoteService {

  @GetMapping
  public List<Course> list() {
    return List.of(Course.builder()
            .name("Java Objects and Classes")
            .description(
                "You will learn OOP with java and how to use classes effectively. It will require " +
                    "no prior knowledge. Our mentors will guide you through the very basics of " +
                    "programming and you will soon start coding like an expert.")
        .subjects(List.of(
            "Basic programming theory",
            "What employers expect from java developers",
            "Operating systems",
            "Basic java concepts",
            "Objective programming",
            "Common applications developed by java coders",
            "Web development",
            "Application patterns: microservices, cloud etc.",
            "Laboratories"
        ))
            .tags(List.of("java", "oop", "programming"))
            .price(2500)
            .build(),
        Course.builder()
            .name("Effective Java")
            .description(
                "You will learn how to develop with Java effectively to avoid common mistakes.")
            .tags(List.of("java", "advanced"))
            .price(3500)
            .build());
  }
}
