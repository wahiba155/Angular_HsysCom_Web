// PanierService mis à jour
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private panier = new BehaviorSubject<any[]>([]);
  panier$ = this.panier.asObservable();
  private totalPanier = new BehaviorSubject<number>(0);
  totalPanier$ = this.totalPanier.asObservable();

  ajouterProduit(produit: any) {
    const current = this.panier.value;
    const index = current.findIndex(p => p.id === produit.id);

    if (index !== -1) {
      const updatedProduit = { ...current[index] };
      updatedProduit.quantite += produit.quantite;

      const updatedPanier = [...current];
      updatedPanier[index] = updatedProduit;

      this.panier.next(updatedPanier);
    } else {
      // S'assurer que le produit a un prix final
      const produitAvecPrixFinal = {
        ...produit,
        prixFinal: produit.prixFinal || (produit.prixPromotion > 0 ? produit.prixPromotion : produit.prix)
      };
      this.panier.next([...current, produitAvecPrixFinal]);
    }
    
    // Mettre à jour le total après ajout
    this.mettreAJourTotal();
  }

  supprimerProduit(produit: any) {
    const produits = this.panier.getValue().filter(p => p.id !== produit.id);
    this.panier.next(produits);
    this.mettreAJourTotal();
  }

  // Compter les favoris dans le panier
  getFavorisCount(): number {
    return this.panier.value.reduce((total: number, produit: any) => {
      return produit.favoris ? total + 1 : total;
    }, 0);
  }

  // Calculer le total des quantités dans le panier
  getTotalArticles(): number {
    return this.panier.value.reduce((total: number, produit: any) => {
      return total + (produit.quantite ?? 1);
    }, 0);
  }

  getQuantite(): number {
    return this.panier.value.length;
  }

  getProduits(): any[] {
    return this.panier.value;
  }

  // Méthode mise à jour pour utiliser prixFinal
  mettreAJourTotal() {
    const total = this.panier.getValue().reduce((acc, item) => {
      const prix = item.prixFinal || (item.prixPromotion > 0 ? item.prixPromotion : item.prix);
      return acc + prix * item.quantite;
    }, 0);
    this.totalPanier.next(total);
  }

  // Méthode mise à jour pour utiliser prixFinal
  getTotal(): number {
    return this.panier.value.reduce((total: number, produit: any) => {
      const prix = produit.prixFinal || (produit.prixPromotion > 0 ? produit.prixPromotion : produit.prix);
      return total + (prix * (produit.quantite ?? 1));
    }, 0);
  }

  // Nouvelle méthode pour obtenir le prix final d'un produit
  getPrixFinal(produit: any): number {
    return produit.prixFinal || (produit.prixPromotion > 0 ? produit.prixPromotion : produit.prix);
  }

  // Nouvelle méthode pour calculer les économies totales
  getEconomiesTotal(): number {
    return this.panier.value.reduce((total: number, produit: any) => {
      if (produit.prixPromotion > 0) {
        const economie = (produit.prix - produit.prixPromotion) * (produit.quantite ?? 1);
        return total + economie;
      }
      return total;
    }, 0);
  }

  viderPanier() {
    this.panier.next([]);
    this.mettreAJourTotal();
  }




}
