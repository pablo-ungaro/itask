package com.br.gb.itask.service;

import com.br.gb.itask.domain.Student;
import com.br.gb.itask.domain.Task;
import com.br.gb.itask.repository.StudentRepository;
import com.br.gb.itask.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {

  private final TaskRepository taskRepository;

  public Task add(Student s, Task t){
    t.setStudent(s);
    return taskRepository.save(t);
  }

  public Task save(Task t){
    return taskRepository.save(t);
  }
}
