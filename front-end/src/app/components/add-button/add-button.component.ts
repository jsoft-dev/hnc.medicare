import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'add-button ',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buttonLabel: string = ''

  @Input()
  set label(value: string){
    this.buttonLabel = value
  }

}
