import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Item } from 'src/app/core/models/item';
import { NewService } from './new.service';

@Component({
  selector: 'ab-new',
  templateUrl: './new.component.html',
  styles: [],
})
export class NewComponent {
  categories$: Observable<any[]>;
  errorMessage = '';

  item: Item = {
    id: '',
    name: '',
    description: '',
    price: 0,
    categoryId: '',
  };

  constructor(private service: NewService, private router: Router) {
    this.categories$ = service.getCategories$().pipe(
      tap({
        error: (err) => (this.errorMessage = err.message),
      })
    );
  }

  save() {
    console.log('saving ' + JSON.stringify(this.item));
    this.service.postNewItem$(this.item).subscribe({
      error: (err) => (this.errorMessage = err.message),
    });
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

  // categoryId: "libraries"
  // course: {date: "", teacher: ""}
  // description: "Angular directives for displaying validation errors"
  // event: {date: "", location: ""}
  // id: "ngx-errors"
  // name: " ngx-errors"
  // ownerId: "albertobasalo"
  // price: 0
  // url: "https://github.com/ngspot/ngx-errors"

  // categoryId: "events"
  // description: "The World's Premier Angular Event"
  // event: {price: null, date: "2021-04-22", location: "On Line"}
  // date: "2021-04-22"
  // location: "On Line"
  // price: null
  // id: "ngconf-2021"
  // name: "ngConf 2021"
  // ownerId: "albertobasalo"
  // url: "https://www.2021.ng-conf.org/"
}
