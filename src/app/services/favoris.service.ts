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
      this.favoris.next([...favorisActuels, produit]);
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

  viderFavoris() {
    this.favoris.next([]);
  }
}