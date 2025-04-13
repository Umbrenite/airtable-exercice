import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './templates/navbar/navbar.component';
import { SideNavbarComponent } from './templates/side-navbar/side-navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, SideNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-exercice-project';
}
