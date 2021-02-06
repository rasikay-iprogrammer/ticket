import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Contact } from 'src/app/model/contact.model';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
  form: FormGroup;
  contactArr: Contact = new Contact();

  constructor(private formBuilder: FormBuilder,) {
    this.form = this.formBuilder.group({
      phoneNumber: [this.contactArr.phoneNumber, [Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern('[6-9]\\d{9}')]],
      email: [this.contactArr.email, [Validators.required, Validators.email]],
    });
  }
  ngOnInit(): void {
  }
  get f(){
    return this.form.controls;
  }
   
}
