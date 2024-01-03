import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { ControlValueAccessorDirective } from 'src/app/directives/control-value-accessor.directive';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent<T> extends ControlValueAccessorDirective<T> {
  @Input() options: T[] = [];
  @Input() selectId = '';
  @Input() label = '';
  @Input() customErrorMessages: Record<string, string> = {};
}
