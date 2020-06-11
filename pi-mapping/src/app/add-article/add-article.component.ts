import { Component, OnInit } from '@angular/core';
import * as bibtex from 'bibtex-parse-js';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  bibtexFileString: string = '';
  viewJSONfile: any;

  //If these fields aren't initialized, the form won't render them at all because there are *ngIf blocks in each of the input fields.
  entryTags: {} = {
    title: '',
    authors: [],
    booktitle: '',
    year: ''
  };

  title: string;
  authors: any[];
  year: string;
  booktitle: string;
  url: string;



  constructor() {

    // this.title = '';
    // this.authors = [];
    // this.year = '';
    // this.booktitle = '';
    // this.url = '';

   }

  ngOnInit() {
  }

  public readAndParseFile(fileList: FileList): void {
    let file = fileList[0];
    let fileReader = new FileReader();
    fileReader.onloadend = (x) => {

      this.bibtexFileString = fileReader.result.toString();

      // console.log(this.bibtexFileString);
      this.viewJSONfile= bibtex.toJSON(this.bibtexFileString);
      // console.log(this.bibtexFileString);
      // console.log(this.viewJSONfile);

      this.entryTags = this.viewJSONfile[0].entryTags;
      // this.displayAll();
      // console.log(this.entryTags);
      // this.title = this.entryTags.title;
      // this.authors = this.entryTags.authors[0];
      // this.year = this.entryTags.year;
      // this.booktitle = this.entryTags.booktitle;
      // this.url = this.entryTags.url;
    }

    fileReader.readAsText(file);
    this.displayAll();
  }

  public displayAll(): void {
    console.log("Title: " + this.title);
    console.log("Author(s): " + this.authors[0]);
    console.log("Year: " + this.year);
    console.log("Booktitle: " + this.booktitle);
    console.log("URL: " + this.url);

  }



}
