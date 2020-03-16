import { Injectable } from '@angular/core';
import {HelpersService} from "../helpers.service";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  public static getProjects() {
    return fetch('/api/portfolio/projects')
      .then(r => r.json())
      .then(r => {
        if (r.hasOwnProperty('success') && r.success == 1) {
          const _r = Object.assign({}, r);
          _r.content = HelpersService.arrFieldsToJson(r.content, ['tags', 'members']);
          return _r;
        }
        return r;
      });
  }

  public static getProject(id:number){
    return fetch('/api/portfolio/projects/'+id)
      .then(r => r.json())
      .then(r => {
        if (r.hasOwnProperty('success') && r.success == 1) {
          const _r = Object.assign({}, r);
          _r.content = HelpersService.fieldsToJson(r.content, ['tags', 'members']);
          return _r;
        }
        return r;
      });
  }

}
