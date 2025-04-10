import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-list',
  imports: [CommonModule, ProjectCardComponent, FormsModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
  searchQuery: string = '';
  
  listOfCards = [
    {
      "title": "Shiba Inu",
      "subtitle": "Dog Breed",
      "image": {
        "src": "https://material.angular.io/assets/img/examples/shiba2.jpg",
        "alt": "Photo of a Shiba Inu"
      },
      "content": {
        "text": "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
      }
    },
    {
      "title": "Golden Retriever",
      "subtitle": "Dog Breed",
      "image": {
        "src": "https://images.dog.ceo/breeds/retriever-golden/n02099601_2004.jpg",
        "alt": "Photo of a Golden Retriever"
      },
      "content": {
        "text": "The Golden Retriever is a friendly, intelligent, and devoted dog. Originally bred for retrieving shot waterfowl, they are now one of the most popular family pets."
      }
    },
    {
      "title": "Border Collie",
      "subtitle": "Dog Breed",
      "image": {
        "src": "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg",
        "alt": "Photo of a Border Collie"
      },
      "content": {
        "text": "Border Collies are highly intelligent and energetic dogs known for their herding skills. They excel at obedience and agility training."
      }
    },
    {
      "title": "French Bulldog",
      "subtitle": "Dog Breed",
      "image": {
        "src": "https://images.dog.ceo/breeds/bulldog-french/n02108915_11924.jpg",
        "alt": "Photo of a French Bulldog"
      },
      "content": {
        "text": "The French Bulldog is a small, muscular dog with a smooth coat, compact build, and distinctive bat-like ears. Known for being adaptable and playful."
      }
    },
    {
      "title": "Siberian Husky",
      "subtitle": "Dog Breed",
      "image": {
        "src": "https://images.dog.ceo/breeds/husky/n02110185_1469.jpg",
        "alt": "Photo of a Siberian Husky"
      },
      "content": {
        "text": "Siberian Huskies are medium-sized working sled dogs known for their endurance and willingness to work. They have a thick coat and striking blue or multicolored eyes."
      }
    }
  ];

  filterCards() {
    if (!this.searchQuery) {
      return this.listOfCards;
    }
    return this.listOfCards.filter(card =>
      card.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      card.subtitle.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      card.content.text.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
