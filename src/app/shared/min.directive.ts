import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[min]',
})
export class MinDirective implements Validator {
  @Input() min: number;

  constructor() {}

  validate(control: AbstractControl): ValidationErrors {
    // return Validators.min(this.min)(control);

    if (control.value >= this.min) {
      return null;
    } else {
      return { min: 'Min value ' + this.min };
    }
  }
  registerOnValidatorChange?(fn: () => void): void {}
}
