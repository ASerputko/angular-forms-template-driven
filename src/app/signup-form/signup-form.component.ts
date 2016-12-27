import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  user: User = {
    name: 'Andrew Serputko',
    account: {
      email: '',
      confirm: ''
    }
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }

}
