package pl.javahello.user.api;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.validation.constraints.NotNull;
import lombok.Data;
import org.hibernate.annotations.NaturalId;
import org.hibernate.validator.constraints.Length;

@Data
@Entity
public class User {

  @Id
  @SequenceGenerator(name = "user_seq_gen", schema = "user", sequenceName = "user_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_seq_gen")
  private Long id;
  @NaturalId
  @Length(min = 3, max = 100)
  private String username;
  @NotNull
  private String passwordHash;
}
