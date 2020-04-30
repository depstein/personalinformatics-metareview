import { Component, OnInit } from '@angular/core';
import * as bibtex from 'bibtex-parse-js';
import { NgForm, FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';


var bib = bibtex.toJSON('@article{sample1,title={sample title}}');

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  input = {};
  isValid = false;
  //values = "";
  // emails = "";
  orderSheetForm: FormGroup;

  constructor() { }

  ngOnInit() {
    // bib.forEach(element => {
    //   console.log(element);
    // });
    // console.log(this.email);



  }
  onKey(event: KeyboardEvent) { // with type info
    // this.emails = (event.target as HTMLInputElement).value;
    // this.input = event;
  }
  onSubmit(f: NgForm) {
    // console.log(f.value);
    // console.log(f.valid);
    this.input = f.value;
    console.log(this.input);
    this.isValid = f.valid;
    console.log(this.isValid);


  }
  onResetForm() {
    this.orderSheetForm.reset();
  }

}
