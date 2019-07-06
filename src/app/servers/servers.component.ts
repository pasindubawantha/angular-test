import { Component, OnInit, Output, EventEmitter, SimpleChange, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // @Output("alias") serverCreated = new EventEmitter<{name: string}>() ;
  @Output() serverCreated = new EventEmitter<{name: string}>() ;
  servers = []
  serverCount = 0;
  constructor() {
    console.log("servers:constructor")
  }

  ngOnInit() {
    console.log("servers:OnInit")
  }

  ngOnChanges(changes: SimpleChanges){// changes of @Input and @Output
    console.log("servers:OnChanges")
    console.log(changes)
  }

  ngDoCheck(){// called when angular check for changes, costs lot of performance
    console.log("servers:ngDoCheck")
  }

  ngAfterContentInit() { //callde after do check
    console.log("servers:ngAfterContentInit")
  }

  ngAfterContentChecked(){
    console.log("servers:ngAfterContentChecked")
  }

  ngAfterViewInit(){
    console.log("servers:AfterViewInit")
  }

  ngAfterViewChecked(){
    console.log("servers:ngAfterViewChecked")
  }

  ngOnDestroy(){
    console.log("servers:ngOnDestroy")
  }

  onClickEvent(){
    this.serverCount ++;
    this.servers.push("Server "+this.serverCount)
    this.serverCreated.emit({name: "Server "+this.serverCount})

  }
}
