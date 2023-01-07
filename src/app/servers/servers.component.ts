import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  allowNewServer = false;
  serverCreated = false;
  serverCreationStatus = 'No server is created';
  serverName = '';
  userName = '';
  servers =['Test server','QA server']
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }
  ngOnInit(): void {
  }
  onCreateServer(){
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = 'Server is created...'+this.serverName;
  }
  onUpdateServerName(event: any){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  isUserNameEmpty(){
    return this.userName.length == 0;
  }
  onResetUser(){
    this.userName = '';
  }
}
