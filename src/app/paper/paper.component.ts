import { Component, OnInit, Input } from '@angular/core';
import { PapersService } from '../papers.service';
import { RenameService } from '../rename.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
})
export class PaperComponent implements OnInit {
	@Input() id:string;
  showId:boolean = environment.production;
	author:string;
	link:string;
	title:string;
	doi:string;
	tags:string[];
	venue:string;
	year:string;

  constructor(private papers:PapersService, private rename:RenameService) {
  }

  ngOnInit() {
  	let paper = this.papers.getPaper(this.id);
    if(paper) {
      this.author = paper.author;
      if(this.author.endsWith('.')) {
        this.author = this.author.slice(0, -1);
      }
      this.link = paper.link;
      this.title = paper.title;
      if(this.title.endsWith('.')) {
        this.title = this.title.slice(0, -1);
      }
      this.doi = paper.doi;
      this.tags = paper.tags;
      this.venue = paper.venue;
      this.year = paper.year;
    }
  }

  getName(tag:string) {
    return this.rename.getCodeName(tag);
  }

}
