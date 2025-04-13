import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'navbar',
  imports: [MatButtonModule, RouterLink, MatIcon, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.checkIfTokenExists = this.authService.isLoggedIn();
  }

  checkIfTokenExists : Boolean = false

  logout() {
    this.authService.logout();
    location.reload();
  }
}
