import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment-two',
  templateUrl: './assignment-two.component.html',
  styleUrls: ['./assignment-two.component.css']
})
export class AssignmentTwoComponent {

  //add input ifeld which updates a property 'username' via two-way binding
  username: string = "";
  isUsernameEmpty:boolean = true;

  onUpdateUsername(event:Event){
    this.username = (<HTMLInputElement>event.target).value;
    if(this.username.length !=0){
      this.isUsernameEmpty = false;
    }
  }

  onResetUsername(){
    console.log("onResetUsername clicked, resetting: "+ this.username);
    this.username="";
  }

}
