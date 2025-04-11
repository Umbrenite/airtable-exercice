import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import Airtable, { FieldSet, Records } from 'airtable';
import { Projets } from '../../../types/Projets';


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
  base = new Airtable({ apiKey: environment.airtableToken }).base('appgZOHa6wwe5JCux');

  async ngOnInit() {
    this.base.table('Projets').select({
    }).eachPage(
      (records: Records<FieldSet>, fetchNextPage: () => void) => {
        records.forEach((record) => {
          this.listOfCards.push(record.fields as Projets);
        });
    
        fetchNextPage();
      },
      function done(err: Error | null) {
        if (err) {
          console.error(err);
          return;
        }
      }
    ); 
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
