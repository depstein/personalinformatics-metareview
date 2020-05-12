import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import tags from "../assets/all_tags.json";
import tags2019 from "../assets/all_tags_2019.json";

@Injectable({
  providedIn: 'root'
})
export class TagsService {
	tags:any;

  constructor() {
  	this.tags = tags;
    if(environment.showOldData) {
      this.tags = tags2019;
    }
  }

  getIdsForTag(tag:string) {
  	if(tag in this.tags) {
  		return this.tags[tag];
  	}
  	return null;
  }
}
