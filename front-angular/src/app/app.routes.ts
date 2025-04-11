import { Routes } from '@angular/router';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { LoginComponent } from './pages/login/login.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';

export const routes: Routes = [
    {path: "home", component: ProjectListComponent},
    {path: "login", component: LoginComponent},
    
    {path: "project-details/:id", component: ProjectDetailsComponent},

    {path: "**", redirectTo: "/home"}
];
