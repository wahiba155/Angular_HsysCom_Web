import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router'; // ✅ Ajout ici de Router

@Component({
  selector: 'app-category-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-bar.html',
    styleUrls: ['./category-bar.css'] 

})
export class CategoryBar {
  hoveredCategorie: string | null = null;
  
  categoriesDisponibles =[
  { nom: 'Matériel Informatique', image: 'assets/images/pc.jpg' },
  { nom: 'Sécurité', image: 'assets/images/cable.png' },
  { nom: 'Multimédia', image: 'assets/images/milti.png' },
  { nom: 'Espace Gaming', image: 'assets/images/moniteur.png' },
  { nom: 'Équipement Réseaux', image: 'assets/images/réseau.png' },
  { nom: 'Bébé et enfant', image: 'assets/images/baby.png' },
  { nom: 'Tables et chaises', image: 'assets/images/tables_chairs.png' },
  { nom: 'Tapis et paillasson', image: 'assets/images/Tapis_paillasson.png' },
  { nom: 'Maison connectée', image: 'assets/images/smart_home.png' },
  { nom: 'Linge de maison et textile', image: 'assets/images/textiles.png' },
  { nom: 'Salle de bain', image: 'assets/images/bathroom.png' },
  { nom: 'Décoration', image: 'assets/images/decoration.png' },
  { nom: 'Animalerie', image: 'assets/images/animalerie.png' },
  { nom: 'Bricolage et entretien', image: 'assets/images/bricolage.jpg' }
];

  constructor(private router: Router) {} // ✅ maintenant ça fonctionne

  get afficherBarre() {
    return !this.router.url.includes('panierpage') && !this.router.url.includes('home');
  }

  filtrerProduits(nomCategorie: string) {
  console.log('Filtrer par catégorie :', nomCategorie);
  this.router.navigate(['/home'], { queryParams: { categorie: nomCategorie } });
}


  
}
