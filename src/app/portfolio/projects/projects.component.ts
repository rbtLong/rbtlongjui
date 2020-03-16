import { Component, OnInit } from '@angular/core';
import {ProjectsService} from "../projects.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectsService]
})
export class ProjectsComponent implements OnInit {

  projects = {
    status: 'normal',
    data: []
  };

  constructor() { }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    ProjectsService.getProjects()
      .then(r => {
        console.log(r);
        if(r.success == 1) {
          this.projects.data = r.content;
          this.projects.status = 'normal';
        } else {
          this.projects.status = 'failed';
          console.log(r);
        }
        console.log(this.projects.data);
      }).catch(r => {
        this.projects.status = 'error';
        console.error(r);
    });
  }

}
