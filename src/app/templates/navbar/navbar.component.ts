import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'navbar',
  imports: [MatButtonModule, RouterLink, MatIcon],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
