import { Component, OnInit } from '@angular/core';
import { FavorisService } from '../../services/favoris.service';
import { PanierService } from '../../services/panier.service';
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-favorisliste',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, RouterModule],
  templateUrl: './favorisliste.html',
  styleUrls: ['./favorisliste.css']
})
export class Favorisliste implements OnInit {
  favoris: any[] = [];
  faHeart = faHeart;
  faCartShopping = faCartShopping;
  quantites: { [key: number]: number } = {};

  constructor(
    private favorisService: FavorisService,
    private panierService: PanierService,
    private router: Router,

  ) {}

  ngOnInit(): void {
    this.favoris = this.favorisService.getFavoris();
    this.favoris.forEach(p => this.quantites[p.id] = 1);
  }

  toggleFavori(produit: any) {
    this.favorisService.retirerFavori(produit.id);
    this.favoris = this.favorisService.getFavoris();
  }

  estFavori(produit: any): boolean {
    return this.favorisService.estDansFavoris(produit.id);
  }

  ajouterAuPanier(produit: any) {
    const produitAvecQuantite = { ...produit, quantite: this.quantites[produit.id] };
    this.panierService.ajouterProduit(produitAvecQuantite);
  }

  incrementQuantite(id: number) {
    this.quantites[id]++;
  }

  decrementQuantite(id: number) {
    if (this.quantites[id] > 1) {
      this.quantites[id]--;
    }
  }

  selectColorImage(produit: any, image: string, color: string) {
    produit.selectedImage = image;
    produit.selectedColor = color;
  }
  Details(produit: any): void {
  console.log('Voir détails du produit:', produit);
  this.router.navigate(['/produit', produit.id]);
}


}

