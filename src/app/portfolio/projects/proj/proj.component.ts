import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProjectsService} from "../../projects.service";

@Component({
  selector: 'app-proj',
  templateUrl: './proj.component.html',
  styleUrls: ['./proj.component.css']
})
export class ProjComponent implements OnInit {

  status = 'normal';
  param = null;
  route = null;
  project = {
    data: {},
  };

  constructor(activatedRoute:ActivatedRoute) {
    this.route = activatedRoute;
  }

  ngOnInit(): void {
    this.load_project();
  }

  load_project() {
    this.route.paramMap.subscribe(param => {
      if(param.has('id')) {
        const id = parseInt(param.get('id'));

        if(!id){
          this.status = 'error parse param';
          return;
        }

        this.param = id;

        ProjectsService.getProject(id)
          .then(r => {
            console.log(r);
            if(r.success == 1) {
              this.project.data = r.content;
              this.status = 'normal';
            } else {
              this.status = 'fail';
            }
          }).catch(err => {
          this.status = 'error';
        });
      }
    });
  }

}
