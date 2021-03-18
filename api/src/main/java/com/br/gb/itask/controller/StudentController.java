package com.br.gb.itask.controller;

import com.br.gb.itask.domain.Student;
import com.br.gb.itask.domain.Task;
import com.br.gb.itask.service.StudentService;
import com.br.gb.itask.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@RequiredArgsConstructor
public class StudentController {

    private final StudentService studentService;
    private final TaskService taskService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Student create(@RequestBody Student s){
      return studentService.create(s);
    }

    @GetMapping
    public List<Student> findAll(){
      return  studentService.findAll();
    }

    @PostMapping("{student-id}/task")
    @ResponseStatus(HttpStatus.CREATED)
    public Task addTask(@PathVariable("student-id") Student s, @RequestBody Task t){
      return taskService.add(s,t);
    }

  @PatchMapping("{student-id}/task/{task-id}")
  public Task updateTask(@PathVariable("student-id") Student s, @PathVariable("task-id") Task saved, @RequestBody Task t){
      saved.setDone(t.isDone());
      return taskService.save(saved);
  }
}
