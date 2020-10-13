import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import allPapers from "../assets/all_papers.json";
import papers2020 from "../assets/all_papers_2020.json";

@Injectable({
  providedIn: 'root'
})
export class PapersService {

  constructor() {
  }

  getAllPapers(showNewArticles=true) {
    let papers = showNewArticles ? allPapers : papers2020;

  	return Object.keys(papers).sort((a, b) => {
      //Sort the papers by year
      return papers[a]['year'] - papers[b]['year'];
    });
  }

  getPaper(id:string) {
    //allPapers is intended to be a superset of papers2020, this will break if that is ever violated
  	if(id in allPapers) {
  		return allPapers[id];
  	}
  	return null;
  }

  filterBy(text:string, showNewArticles=true) {
    let papers = showNewArticles ? allPapers : papers2020;

    let paperList = Object.keys(papers);
    let ret = [];
    paperList.forEach(p => {
      let values = Object.values(papers[p]);
      if(values.some(v => (v.toString() as string).toLowerCase().includes(text.toLowerCase()))) {
        ret.push(p);
      }
    });
    return ret;
  }
}
