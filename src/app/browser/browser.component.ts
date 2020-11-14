import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import clusterMap from "../../assets/cluster_map.json";
import { PapersService } from '../papers.service';
import { TagsService } from '../tags.service';
import { RenameService } from '../rename.service';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {
	codes:string[];
	clusters:{} = {};
	checked:{} = {};
	counts:{} = {};
  codeOrder:string[] = [];
  filterCodes:string[] = [];
	paperList:string[] = [];
	search:string;
  hidden:{} = {};
  yearRadio:boolean = true;
  clusterMap:any;
  showNewArticles:boolean = true;


  constructor(private papers:PapersService, private tags:TagsService, private rename:RenameService) {
    this.clusterMap = clusterMap;
  }

  ngOnInit() {
  	this.codes = this.clusterMap.map(c => c['title']);
  	this.codes.forEach(c => {
      let cm = this.clusterMap.filter(m => c == m['title'])[0];
  		this.clusters[c] = cm['clusters'];
  		this.checked[c] = {};
      this.hidden[c] = true;
  		cm['clusters'].forEach(cm => {
  			let ids = this.tags.getIdsForTag(cm);
  			if(ids) {
  				this.counts[cm] = ids.length;
  			} else {
  				this.counts[cm] = 0;
  			}
  		});
  		this.clusters[c].sort((a, b) => this.counts[b] - this.counts[a]);
      this.clusters[c].forEach(k => {
        this.codeOrder.push(k);
      });
  	});

  	this.paperList = this.papers.getAllPapers(this.showNewArticles);
  }

  clear() {
    this.codes.forEach(c => {
      this.checked[c] = {};
    });
    this.search = null;
    this.check();
  }

  getName(code:string) {
    return this.rename.getCodeName(code);
  }

  toggleHide(code:string) {
    this.hidden[code] = !this.hidden[code];
  }

  checkBoxes():string[] {
  	let papersSoFar = this.papers.getAllPapers(this.showNewArticles);
    let allChecked = [];
    this.codes.forEach(code => {
      Object.keys(this.checked[code]).forEach(k => {
        if(this.checked[code][k]) {
         allChecked.push(k);
        }
      });
    });
    allChecked.forEach(k => {
      papersSoFar = papersSoFar.filter(p => this.tags.getIdsForTag(k).includes(p));
    });
    //Order the codes by type & frequency
    this.filterCodes = [];
    this.codeOrder.forEach(t => {
      if(allChecked.includes(t)) {
        this.filterCodes.push(t);
      }
    });

  	return papersSoFar;
  }

  check() {
	  this.paperList = this.checkBoxes();
  }

  searchFor() {
  	let searchList = this.papers.filterBy(this.search, this.showNewArticles);
  	this.paperList = this.checkBoxes().filter(p => searchList.includes(p));
  }

}
