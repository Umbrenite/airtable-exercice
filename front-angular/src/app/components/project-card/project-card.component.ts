import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'project-card',
  imports: [MatButtonModule, MatIconModule, CommonModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

  @Input() id = '';
  @Input() title = '';
  @Input() subtitle = '';
  @Input() imageSource = '';
  @Input() imageAlt = '';
  @Input() description = '';
  @Input() likes = '';
  @Input() technos : string[] = [];

  submitLike() {
    console.log("test");
  }

}
