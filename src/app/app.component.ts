import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [];

  onServerCreated(e:{name:string}){
    this.servers.push(e.name)
  }

}
