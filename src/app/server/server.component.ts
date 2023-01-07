import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit{
  
  serverId: number = 10;
  serverStatus: string = 'offline'
  allowNewServer = false;
  serverCreated = false;
  serverCreationStatus = 'No server is created';
  serverName = '';
  userName = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }
  ngOnInit(): void {
  }
  onCreateServer(){
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
