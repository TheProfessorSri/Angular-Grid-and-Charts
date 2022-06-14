import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  todoList : string[] =[]; 
  inputValue :string = '';

  removeFunc (name:string){
    this.todoList = this.todoList.filter(each => each !== name);
  }

  formSubmit (){
    if(this.inputValue !== ''){
      this.todoList.push(this.inputValue);
      this.inputValue = '';
    }
    else{
      alert('Enter Valid Text');
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.todoList =['Exaple..1', 'Example..2'];
  }
}
