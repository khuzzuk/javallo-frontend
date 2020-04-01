package pl.javallo.javallo.frontend.course;

import java.util.List;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Course {
  private String name;
  private String description;
  private List<String> subjects;
  private List<String> tags;
  private int price;
}
