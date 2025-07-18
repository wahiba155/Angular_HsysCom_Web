
// FavorisService mis à jour
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {
  private favoris = new BehaviorSubject<any[]>([]);
  favoris$ = this.favoris.asObservable();

 ajouterFavori(produit: any) {
  const favorisActuels = this.favoris.value;
  const existe = favorisActuels.find(p => p.id === produit.id);

  if (!existe) {
    const produitAvecPrixFinal = {
      ...produit,
      prixFinal: produit.prixFinal || (produit.prixPromotion > 0 ? produit.prixPromotion : produit.prix),
      quantite: 0 // ✅ Initialisation de la quantité
    };
    this.favoris.next([...favorisActuels, produitAvecPrixFinal]);
  }
}


  retirerFavori(id: number) {
    const favorisFiltres = this.favoris.value.filter(p => p.id !== id);
    this.favoris.next(favorisFiltres);
  }

  getFavoris(): any[] {
    return this.favoris.value;
  }

  estDansFavoris(id: number): boolean {
    return this.favoris.value.some(p => p.id === id);
  }

  // Nouvelle méthode pour obtenir le prix final d'un produit favori
  getPrixFinal(produit: any): number {
    return produit.prixFinal || (produit.prixPromotion > 0 ? produit.prixPromotion : produit.prix);
  }

  // Nouvelle méthode pour calculer la valeur totale des favoris
  getValeurTotaleFavoris(): number {
    return this.favoris.value.reduce((total: number, produit: any) => {
      const prix = produit.prixFinal || (produit.prixPromotion > 0 ? produit.prixPromotion : produit.prix);
      return total + prix;
    }, 0);
  }

  // Nouvelle méthode pour obtenir les favoris en promotion
  getFavorisEnPromotion(): any[] {
    return this.favoris.value.filter(produit => produit.prixPromotion > 0);
  }

  // Nouvelle méthode pour calculer les économies potentielles sur les favoris
  getEconomiesPotentielles(): number {
    return this.favoris.value.reduce((total: number, produit: any) => {
      if (produit.prixPromotion > 0) {
        return total + (produit.prix - produit.prixPromotion);
      }
      return total;
    }, 0);
  }

  viderFavoris() {
    this.favoris.next([]);
  }
}