import { Component, OnInit, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit, AfterContentInit {
  @ContentChild('projecteContent') projectedConent: ElementRef// Get html element from Content by id, for View use ViewChild
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {// Cant access Conent Child before Content init
    console.log(this.projectedConent.nativeElement.innerHTML)
    this.projectedConent.nativeElement.innerHTML += "<br> This part added by ngAfterContentInit in tab component"
  }

}
