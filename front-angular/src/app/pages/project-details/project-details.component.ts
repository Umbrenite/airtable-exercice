import { Component } from '@angular/core';
import { Projets } from '../../../types/Projets';
import { findSpecific } from '../../airtable/fetchMethods';

@Component({
  selector: 'app-project-details',
  imports: [],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {

  card = [];

  ngOnInit() {
    findSpecific('Projets', "recePJqtbXbzvC0Xu", this.card);
  }

}
