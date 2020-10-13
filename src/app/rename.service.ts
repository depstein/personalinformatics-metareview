import { Injectable } from '@angular/core';
import renameMap from "../assets/rename_map.json";

@Injectable({
  providedIn: 'root'
})
export class RenameService {

  constructor() { }

  getCodeName(code:string) {
    if(!(code in renameMap)) {
      if(code.toLowerCase() != code) {
        //There's probably something to preserve in the code's case
        return code;
      } else {
        //Convert it to title case
        return code.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
      }
    } else if(renameMap[code]) {
      return renameMap[code];
    } else {
      return null;
    }
  }
}
