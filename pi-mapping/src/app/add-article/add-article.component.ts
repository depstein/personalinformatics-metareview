import { Component, OnInit } from '@angular/core';
import * as bibtex from 'bibtex-parse-js';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  bibtexFileString: string = '';
  viewConvertedFile: any;

  constructor() {
    // var bibtexParse= require('bibtex-parse-js');
    this.viewConvertedFile= bibtex.toJSON(this.bibtexFileString);
    console.log(this.viewConvertedFile);

   }

  ngOnInit() {
  }

  public readFile(fileList: FileList): void {
    let file = fileList[0];
    let fileReader = new FileReader();
    fileReader.onloadend = (x) => {
      this.bibtexFileString = fileReader.result;
    }
    fileReader.readAsText(file);
  }


}
