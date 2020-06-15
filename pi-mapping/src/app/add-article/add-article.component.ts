import { Component, OnInit } from '@angular/core';
import * as bibtex from 'bibtex-parse-js';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})

export class AddArticleComponent implements OnInit {

  bibtexFileString: string;
  viewJSONfile: any;
  entryTags: any;

  email: string;
  author: string;
  authors: string;

  form: {
    title: string;
    authors: any[];
    year: string;
    venue: string;
    link: string;
    survey: boolean;
  };

  constructor() {

    this.email = "";
    this.author = "";

    this.form = {
      title: "",
      authors: [],
      year: "",
      venue: "",
      link: "",
      survey: false
    };
  }

  ngOnInit() {

    this.form.authors.push(this.author);

  }

  addForm() {

    this.author = "";
    this.form.authors.push(this.author);
    console.log(this.form.authors);

  }


  removeForm(i) {
    this.form.authors.splice(i);
  }

  onResetForm() {

    this.email = "";
    this.author = "";

    this.form = {
      title: "",
      authors: [],
      year: "",
      venue: "",
      link: "",
      survey: false
    };

    this.form.authors.push(this.author);

  }

  processForm() {

    console.log("Email: ", this.email);
    console.log("Authors: ", this.form.authors);
    console.log("Title: ", this.form.title);
    console.log("venue: ", this.form.venue);
    console.log("link: ", this.form.link);
    console.log("year: ", this.form.year);
    console.log("survey: ", this.form.survey);
  }


  public readAndParseFile(fileList: FileList): void {

    let file = fileList[0];
    let fileReader = new FileReader();

    fileReader.onloadend = () => {

      this.bibtexFileString = fileReader.result.toString();

      this.viewJSONfile = bibtex.toJSON(this.bibtexFileString);

      this.entryTags = this.viewJSONfile[0].entryTags;

      console.log(this.entryTags);
      this.form.title = this.entryTags.title || this.entryTags.TITLE;
      this.authors = this.entryTags.author || this.entryTags.AUTHOR;
      this.splitAuthors();
      this.form.year = this.entryTags.year || this.entryTags.YEAR;
      this.form.venue = this.entryTags.publisher || this.entryTags.venue || this.entryTags.VENUE;
      this.form.link = this.entryTags.link || this.entryTags.url || this.entryTags.URL;
    }
    fileReader.readAsText(file);
  }

  splitAuthors() {
    this.form.authors = this.authors.split("and");
  }

}
