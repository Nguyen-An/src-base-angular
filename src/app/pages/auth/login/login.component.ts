import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;
  form!: FormGroup;
  constructor(
    private _fb: FormBuilder
  ) { 
    this.form = this._fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      place: new FormControl(''),
      ngSelect: new FormControl(''),
      editor: new FormControl(''),
      phone: new FormControl(''),
      datetime: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  changeAddress(e: any){
    console.log(e);
  }

  onSubmit(){}

}
