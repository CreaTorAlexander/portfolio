import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';

export const routes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about',  component: AboutMeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'education', component: EducationComponent },
];
    