package com.br.gb.itask.domain;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Student {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  private String name;

  @OneToMany(cascade = CascadeType.ALL, mappedBy = "student")
  private List<Task> tasks;
}
