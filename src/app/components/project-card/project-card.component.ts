import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { createLike } from '../../airtable/createMethod';
import { AuthService } from '../../auth/auth.service';
import { findSpecificData } from '../../airtable/fetchMethods';
import { deleteLike } from '../../airtable/deleteMethod';

@Component({
  selector: 'project-card',
  imports: [MatButtonModule, MatIconModule, CommonModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

  userId: string | null = "";
  likeButtonColor = "";

  constructor(private authService: AuthService, private cdr: ChangeDetectorRef) {
    this.userId = this.authService.getUserId();
  }

  @Input() id = '';
  @Input() projectId: number = 0;
  @Input() title = '';
  @Input() subtitle = '';
  @Input() imageSource = '';
  @Input() imageAlt = '';
  @Input() description = '';
  @Input() likes = 0;
  @Input() technos: string[] = [];

  ngOnInit() {
    findSpecificData("Likes", {
      "Utilisateur": this.authService.getUserIdNumber(),
      "Projet": this.projectId
    })
    .then(_ => {
      this.likeButtonColor = "green";
      this.cdr.markForCheck();
    })
    .catch(_ => {
      this.likeButtonColor = "blue";
      this.cdr.markForCheck();
    });
  }

  submitLike() {
    findSpecificData("Likes", { "Utilisateur": this.authService.getUserIdNumber(), "Projet": this.projectId })
      .then(fields => {
        if (fields) {
          this.likes--;
          this.likeButtonColor = "blue";
          deleteLike(fields.recordId);
          this.cdr.markForCheck();
        }
      })
      .catch(_ => {
        if (this.userId) {
          createLike(this.userId, this.id);
          this.likes++;
          this.likeButtonColor = "green";
          this.cdr.markForCheck();
        }
      });
  }
}
