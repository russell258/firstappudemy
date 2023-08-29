import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-assignment',
  templateUrl: './directive-assignment.component.html',
  styles: [`
  .greaterThanFour: {
    color:white;
  }
    `]
})
export class DirectiveAssignmentComponent {

  display:boolean = false;
  counter: number = 1;
  arr: any[]=[];
  styleClass: boolean = false;

  onDisplay(){
    this.display = !this.display;
    if (this.arr.length>4){
      this.styleClass = true;
    }
    this.arr.push(this.counter + '.' + new Date().toString());
    this.counter++;
    
  }

}
