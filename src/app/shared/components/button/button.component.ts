import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() message!: string;
  @Input() disabled: boolean = false;
  @Input() image: boolean = false;
  @Input() src!: string;
  @Input() btnType!: string;

}
