import { Routes } from '@angular/router';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path: "home", component: ProjectListComponent},
    {path: "login", component: LoginComponent},

    {path: "**", redirectTo: "/home"}
];
