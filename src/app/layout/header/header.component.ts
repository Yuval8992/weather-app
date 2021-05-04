import { Component, DoCheck, HostBinding, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggleControl: FormControl = new FormControl(false);
  @HostBinding('class') className = '';

  constructor() { }

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((value: boolean) => {
      this.className = value ? 'darkMode' : '';
    });
  }
}
