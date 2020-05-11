import { Component, OnInit } from '@angular/core';
import * as bibtex from 'bibtex-parse-js';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  private bibFile = (`
    @Article{ Example,
    author = {Author(s)},
    title = "Title of Article",
    year = "2020",
    email = "Your Email",
    venue = "Publication Venue",
    link = "Enter the url" 
}
`);

  private jsonFile: JSON;
  private jsonString: string;
  private entryTags: any;
  private citationKey: string;
  private entryType: string;

  form: {
    email: string;
    title: string;
    author: {
      name1:"",
      name2:"",
      name3:""
    };
    year: string;
    venue: string;
    link: string;
    survey: boolean;
  };

  constructor() {

    this.form = {
      email: "",
      title: "",
      author: {
        name1: "",
        name2: "",
        name3: ""
      },
      year: "",
      venue: "",
      link: "",
      survey: false
    };
  }

  ngOnInit() {

    this.jsonFile = bibtex.toJSON(this.bibFile);
    console.log(this.jsonFile);
    this.jsonString = JSON.stringify(this.jsonFile[0]);
    console.log(this.jsonString);
    console.log(JSON.parse(this.jsonString));


    this.entryTags = this.jsonFile[0].entryTags;
    this.citationKey = this.jsonFile[0].citationKey;
    this.entryType = this.jsonFile[0].entryType;

    this.form.author = this.entryTags.author;
    this.form.title = this.entryTags.title;
    this.form.year = this.entryTags.year;
    this.form.link = this.entryTags.link;
    this.form.email = this.entryTags.email;
    this.form.venue = this.entryTags.venue;


    console.log(this.entryTags);
    console.log(this.citationKey);
    console.log(this.entryType);

    console.log(this.form.author);
    console.log(this.form.title);
    console.log(this.form.year);
    console.log(this.form.link);
    console.log(this.form.email);
    console.log(this.form.venue);
    console.log(this.form.survey);

  }

  onResetForm() {

    this.form = {
      email: "",
      title: "",
      author: {
        name1: "",
        name2: "",
        name3: ""
      },
      year: "",
      venue: "",
      link: "",
      survey: false
    };
  }

  processForm() {
    console.group("Form View-Model");
    console.log("Name:", this.form.author);
    console.log("Email:", this.form.email);
    console.log("venue:", this.form.venue);
    console.log("link:", this.form.link);
    console.log("year:", this.form.year);
    console.log("survey:", this.form.survey);
    console.groupEnd();
  }

  openFile(event) {
    let input = event.target;
    for (var index = 0; index < input.files.length; index++) {
      let reader = new FileReader();
      reader.onload = () => {
        var text = reader.result;
        this.entryTags = text;
        console.log(this.entryTags);
        console.log(typeof this.entryTags);

      }
      reader.readAsText(input.files[index]);
    };
  }


}
