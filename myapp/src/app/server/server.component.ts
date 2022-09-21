import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId: number = 10;
  serverStatus: string = 'online';
  serverCreationStatus = 'No server Created';
  allowNewserver = false;

  constructor() { }

  ngOnInit(): void {}

  getServerStatus() {
    return 'ss: ' + this.serverStatus;
  }
  onCreateServer() {
    this.serverCreationStatus = 'server was created';
  }

}
