import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {RouterModule, Routes} from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './portfolio/projects/projects.component';
import { SkillsComponent } from './portfolio/skills/skills.component';
import { TagsComponent } from './portfolio/tags/tags.component';
import { ProjComponent } from './portfolio/projects/proj/proj.component';

const appRoutes:Routes = [
  //Portfolio Routes
  {
    path: 'portfolio',
    component: PortfolioComponent,
    children: [
      { path: '', component: ProjectsComponent, pathMatch: 'full'},
      { path: 'projects', component: ProjectsComponent},
      { path: 'skills', component: SkillsComponent},
      { path: 'tags/:tag', component: TagsComponent },
      { path: 'proj/:id', component: ProjComponent }
    ]
  },

  //Base Routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},

  //Default
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    PageNotFoundComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
    TagsComponent,
    ProjComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
/*      { enableTracing: true}*/
    ),
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
