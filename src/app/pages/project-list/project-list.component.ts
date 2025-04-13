import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Projets } from '../../../types/Projets';
import { fetchAll } from '../../airtable/fetchMethods';


@Component({
  selector: 'app-project-list',
  imports: [CommonModule, ProjectCardComponent, FormsModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {

  constructor(private http: HttpClient) {}

  searchQuery: string = '';
  listOfCards : Projets[] = [];

  ngOnInit() {
    fetchAll('Projets', this.listOfCards);
  }

  filterCards() {
    if (!this.searchQuery) {
      return this.listOfCards;
    }
    
    return this.listOfCards.filter(card =>
      card.Titre.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      card.Soustitre.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      card.Description.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
