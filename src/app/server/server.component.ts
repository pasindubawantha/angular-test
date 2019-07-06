import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  btnDisabled:Boolean = false;
  creationStatus:String = "Server not created";
  @Input("alaisServerName") serverName:String = "n/a"
  serverCreated:Boolean = false;
  constructor() {
    setTimeout(()=>{this.btnDisabled=true;},1000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.creationStatus = "Server created"
    this.serverName = "yada"
    this.serverCreated = true;
  }

  onUpdateServerName(event:Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getColor(){
    if(this.serverCreated){
      return "red";}
    else{
      return "green"}
  }
}
