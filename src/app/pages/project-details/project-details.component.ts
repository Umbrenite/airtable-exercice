import { Component } from '@angular/core';
import { Projets } from '../../../types/Projets';
import { findSpecificCard } from '../../airtable/fetchMethods';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-details',
  imports: [RouterLink, CommonModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {

  constructor(private route: ActivatedRoute) {}

  card!: Projets;
  id!: string | null;


  async ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');      
    });

    try {
      this.card = await findSpecificCard('Projets', this.id || '{}');
      console.log(this.card);
      
    } catch (err) {
      console.error('Erreur de récupération :', err);
    }

  }

  getNomUtilisateur(i: number): string {
    if (this.card?.NomUtilisateur && this.card?.NomUtilisateur[i]) {
      return this.card.NomUtilisateur[i];
    }
    return ''; // Retourne une chaîne vide si l'élément n'existe pas
  }

}
