import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'edit-button ',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buttonLabel: string = ''

  @Input()
  set label(value: string){
    this.buttonLabel = value
  }

}
