package com.br.gb.itask.service;

import com.br.gb.itask.domain.Student;
import com.br.gb.itask.domain.Task;
import com.br.gb.itask.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentService {

  private final StudentRepository studentRepository;

  public Student create(Student s){
    return studentRepository.save(s);
  }

  public List<Student> findAll(){
    return studentRepository.findAll();
  }

  public Student addTask(Student s, Task t){
    s.getTasks().add(t);
    return studentRepository.save(s);
  }
}
