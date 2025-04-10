import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';



@Component({
  selector: 'project-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatDividerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

  @Input() title = '';
  @Input() subtitle = '';
  @Input() imageSource = '';
  @Input() imageAlt = '';
  @Input() description = '';
  @Input() likes = '';

}
