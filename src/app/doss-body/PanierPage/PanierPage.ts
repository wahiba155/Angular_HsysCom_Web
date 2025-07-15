import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PanierService } from '../../services/panier.service'; // ✅ Chemin selon ton projet
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping,faHeart,faTrash,faSearch } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faSearch, faHeart, faCartShopping);

@Component({
  selector: 'app-panier-page',
  standalone: true,
  imports: [RouterModule, CommonModule,FontAwesomeModule],
  templateUrl: './PanierPage.html',
  styleUrls: ['./PanierPage.css']
})
export class PanierPage {
faTrash = faTrash;

  constructor(public panierService: PanierService, private library: FaIconLibrary) {
    this.library.addIcons(faTrash);
  }

  incrementQuantite(produit: any): void {
    produit.quantite++;
    this.panierService.mettreAJourTotal();
  }

  decrementQuantite(produit: any): void {
    if (produit.quantite > 1) {
      produit.quantite--;
      this.panierService.mettreAJourTotal();
    }
  }

  supprimerProduit(produit: any): void {
    this.panierService.supprimerProduit(produit);
  }



  viderPanier(): void {
    this.panierService.viderPanier();
  }
}
