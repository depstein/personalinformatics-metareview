import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import papers from "../assets/all_papers.json";
import papers2019 from "../assets/all_papers_2019.json";

@Injectable({
  providedIn: 'root'
})
export class PapersService {
  papers:any

  constructor() {
    this.papers = papers;
    if(environment.showOldData) {
      this.papers = papers2019;
    }
  }

  getAllPapers() {
  	return Object.keys(this.papers).sort((a, b) => {
      //Sort the papers by year
      return this.papers[a]['year'] - this.papers[b]['year'];
    });
  }

  getPaper(id:string) {
  	if(id in this.papers) {
  		return this.papers[id];
  	}
  	return null;
  }

  filterBy(text:string) {
    let paperList = Object.keys(this.papers);
    let ret = [];
    paperList.forEach(p => {
      let values = Object.values(this.papers[p]);
      if(values.some(v => (v.toString() as string).toLowerCase().includes(text.toLowerCase()))) {
        ret.push(p);
      }
    });
    return ret;
  }
}
