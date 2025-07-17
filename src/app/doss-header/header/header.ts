import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PanierService } from '../../services/panier.service';
import { FavorisService } from '../../services/favoris.service';
import { Subscription } from 'rxjs';
import { library } from '@fortawesome/fontawesome-svg-core';
import { NavigationEnd } from '@angular/router';

import { faSearch, faHeart, faCartShopping, faUser, faTimes,faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faSearch, faHeart, faCartShopping, faUser, faTimes,faTrash);

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})

export class Header implements OnInit, OnDestroy {
  nombreFavoris: number = 0;
  nombreArticles: number = 0;
  totalMontant: number = 0;

  faSearch = faSearch;
  faHeart = faHeart;
  faCartShopping = faCartShopping;
  faUser = faUser;
  faTimes = faTimes;
  faTrash = faTrash;
  
  sidebarVisible = false;
  favorisOuvert: boolean = false;
  navOpen = false;
  isMenuOpen = false;
  
  private panierSub!: Subscription;
  private favorisSub!: Subscription; 

  constructor(
    private elementRef: ElementRef, 
    public panierService: PanierService,
    private router: Router,
    public favorisService: FavorisService
  ) {}

  ngOnInit(): void {
    this.initializeAnimations();
    
    this.favorisSub = this.favorisService.favoris$.subscribe(favoris => {
      this.nombreFavoris = favoris.length;
      console.log('🤍 Favoris mis à jour :', this.nombreFavoris);
    });

    this.panierSub = this.panierService.panier$.subscribe(panier => {
      this.nombreArticles = panier.reduce((total, produit) => total + (produit.quantite ?? 1), 0);
      console.log('🧾 Articles dans le panier :', this.nombreArticles);
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && event.urlAfterRedirects === '/panierpage') {
        this.closeSidebar();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.panierSub) {
      this.panierSub.unsubscribe();
    }
    if (this.favorisSub) {
      this.favorisSub.unsubscribe();
    }
  }

  toggleFavorisSidebar() {
    this.favorisOuvert = !this.favorisOuvert;
    console.log('favorisOuvert:', this.favorisOuvert);
  }

  get favoris() {
    return this.favorisService.getFavoris();
  }

 
  ajouterAuPanier(produit: any) {
    this.panierService.ajouterProduit(produit);
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  closeSidebar() {
    this.sidebarVisible = false;
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
  }

  private initializeAnimations(): void {
    const searchInput = this.elementRef.nativeElement.querySelector('.search-container input');
    const searchContainer = this.elementRef.nativeElement.querySelector('.search-container');
    
    if (searchInput && searchContainer) {
      searchInput.addEventListener('focus', () => {
        searchContainer.style.transform = 'scale(1.05)';
      });
      
      searchInput.addEventListener('blur', () => {
        searchContainer.style.transform = 'scale(1)';
      });
    }
  }

  incrementQuantite(produit: any) {
    produit.quantite++;
  }

  decrementQuantite(produit: any) {
    if (produit.quantite > 1) {
      produit.quantite--;
    }
  }

  voirPanier() {
    this.closeSidebar();
    this.router.navigate(['/panierpage']);
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    const searchTerm = input.value.trim();
    
    if (searchTerm) {
      console.log('Recherche pour:', searchTerm);
    }
  }

  onHeartClick(): void {
    console.log('Favoris cliqués - Nombre actuel:', this.nombreFavoris);
  }

  onCartClick(): void {
    console.log('Panier cliqué - Nombre actuel:', this.nombreArticles);
    this.toggleSidebar();
  }

  onLoginClick(): void {
    console.log('Connexion cliquée');
    this.router.navigate(['/login']);
  }

  incrementFavoris(): void {
    this.nombreFavoris++;
  }

  decrementFavoris(): void {
    if (this.nombreFavoris > 0) {
      this.nombreFavoris--;
    }
  }

  resetBadges(): void {
    this.nombreFavoris = 0;
    this.nombreArticles = 0;
  }

  supprimerProduit(produit: any): void {
    this.panierService.supprimerProduit(produit);
  }

  supprimerFavori(id: number): void {
    this.favorisService.retirerFavori(id);
  }

  viderFavoris(): void {
    this.favorisService.viderFavoris();
  }
}