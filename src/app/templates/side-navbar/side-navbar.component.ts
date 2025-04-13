import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import { AuthService } from '../../auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'side-navbar',
  imports: [RouterLink, MatExpansionModule, CommonModule],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.scss'
})
export class SideNavbarComponent {

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.checkIfTokenExists = this.authService.isLoggedIn();
    console.log(sessionStorage);
  }

  checkIfTokenExists : Boolean = false

  logout() {
    this.authService.logout();
    location.reload();
  }

}
