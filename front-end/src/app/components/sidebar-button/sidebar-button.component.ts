import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-button ',
  templateUrl: './sidebar-button.component.html',
  styleUrls: ['./sidebar-button.component.css']
})
export class SidebarButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buttonLabel: string = ''

  @Input()
  set label(value: string){
    this.buttonLabel = value
  }

}
