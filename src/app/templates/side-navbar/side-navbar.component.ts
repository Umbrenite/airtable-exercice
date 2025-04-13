import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'side-navbar',
  imports: [RouterLink, MatExpansionModule],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.scss'
})
export class SideNavbarComponent {

}
