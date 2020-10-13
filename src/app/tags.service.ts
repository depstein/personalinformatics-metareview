import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import tags from "../assets/all_tags.json";

@Injectable({
  providedIn: 'root'
})
export class TagsService {
	tags:any;

  constructor() {
  	this.tags = tags;
  }

  getIdsForTag(tag:string) {
  	if(tag in this.tags) {
  		return this.tags[tag];
  	}
  	return null;
  }
}
