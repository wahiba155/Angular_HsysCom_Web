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
    const index = current.findIndex(p => p.nom === produit.nom);

    if (index !== -1) {
      const updatedProduit = { ...current[index] };
      updatedProduit.quantite += produit.quantite;

      const updatedPanier = [...current];
      updatedPanier[index] = updatedProduit;

      this.panier.next(updatedPanier);
    } else {
      this.panier.next([...current, produit]);
    }
  }

 supprimerProduit(produit: any) {
  const produits = this.panier.getValue().filter(p => p !== produit);
  this.panier.next(produits);
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
  mettreAJourTotal() {
  const total = this.panier.getValue().reduce((acc, item) => acc + item.prix * item.quantite, 0);
  this.totalPanier.next(total);
}

  getTotal(): number {
    return this.panier.value.reduce((total: number, produit: any) => {
      return total + (produit.prix * (produit.quantite ?? 1));
    }, 0);
  }

  viderPanier() {
    this.panier.next([]);
  }
}
