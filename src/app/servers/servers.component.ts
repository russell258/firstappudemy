import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  //this is property binded to the [disabled] in html
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created';

  // once page loads, will set the allowNewServer to true after 2 seconds
  constructor(){
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
  }


  ngOnInit(){
    
  }

  onCreateServer(){
    this.serverCreationStatus="Server was created";
  }

}
