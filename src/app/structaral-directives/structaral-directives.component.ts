import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structaral-directives',
  templateUrl: './structaral-directives.component.html',
  styleUrls: ['./structaral-directives.component.css']
})
export class StructaralDirectivesComponent implements OnInit {
  onlyOdd: boolean = false;
  allOdd: number[]= [1,3,5];
  allEven: number[] = [2,4];

  constructor() { }

  ngOnInit() {
  }

}
