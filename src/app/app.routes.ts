import { Routes } from '@angular/router';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { LoginComponent } from './pages/login/login.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
    {path: "home", component: ProjectListComponent, canActivate: [AuthGuard]},
    {path: "login", component: LoginComponent},
    
    {path: "project-details/:id", component: ProjectDetailsComponent, canActivate: [AuthGuard]},

    {path: "**", redirectTo: "/home"}
];
