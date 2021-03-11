import { Component } from '@angular/core';
import { Category } from 'src/app/core/models/category';

@Component({
  selector: 'ab-new',
  templateUrl: './new.component.html',
  styles: [],
})
export class NewComponent {
  category: Category = {
    id: '',
    name: '',
    description: '',
  };

  constructor() {}

  save() {
    console.log('saving ' + JSON.stringify(this.category));
  }

  mustShowErrors(controlModel) {
    return controlModel.invalid && controlModel.touched;
  }

  isRequired(controlModel) {
    return controlModel.errors.required ? 'Required' : '';
  }
  isBetween(controlModel, min, max) {
    return controlModel.errors.minlength || controlModel.errors.maxlength ? `Length between ${min} and ${max}` : '';
  }
}

// id: "books"
// name: "Books"
// description: "Paper or digital reading materials."
// ownerId: "albertobasalo"
