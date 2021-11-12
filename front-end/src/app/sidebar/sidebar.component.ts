import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, OnInit} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';

export interface Fruit {
  name: string;
}

/**
 * @title Chips with input
 */
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  ngOnInit(): void {
      throw new Error('Method not implemented.');
  }
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{name: 'Lemon'}, {name: 'Lime'}, {name: 'Apple'}];

  sideBarButtonClick(button: string): void {
      if (button === 'patient'){

      }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
}
