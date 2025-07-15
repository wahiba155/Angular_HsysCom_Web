import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PanierService } from '../../services/panier.service';
import { Subscription } from 'rxjs';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faSearch, faHeart, faCartShopping, faUser, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch, faHeart, faCartShopping, faUser, faTimes);

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})

export class Header implements OnInit, OnDestroy {
  // Initialisation des badges à 0
  nombreFavoris: number = 0;
  nombreArticles: number = 0;
  
  // Icônes FontAwesome
  faSearch = faSearch;
  faHeart = faHeart;
  faCartShopping = faCartShopping;
  faUser = faUser;
  faTimes = faTimes;
  
  // État de la sidebar et navigation
  sidebarVisible = false;
  navOpen = false;
  isMenuOpen = false;
  
  // Subscription pour le panier
  private panierSub!: Subscription;

  constructor(
    private elementRef: ElementRef, 
    public panierService: PanierService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeAnimations();
    
     this.nombreArticles = 0;

  // Ecoute du panier
  this.panierSub = this.panierService.panier$.subscribe(panier => {
    this.nombreArticles = panier?.length ?? 0;
  });
  }

  ngOnDestroy(): void {
    if (this.panierSub) {
      this.panierSub.unsubscribe();
    }
  }

  // Gestion de la sidebar panier
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  closeSidebar() {
    this.sidebarVisible = false;
  }

  // Gestion de la navigation mobile
  toggleNav() {
    this.navOpen = !this.navOpen;
  }

  // Animations pour la barre de recherche
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

  // Gestion des quantités dans le panier
  incrementQuantite(produit: any) {
    produit.quantite++;
  }

  decrementQuantite(produit: any) {
    if (produit.quantite > 1) {
      produit.quantite--;
    }
  }

  // Navigation vers la page panier
  voirPanier() {
    this.closeSidebar();
this.router.navigate(['/panierpage']);
  }

  // Gestionnaires d'événements
  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    const searchTerm = input.value.trim();
    
    if (searchTerm) {
      console.log('Recherche pour:', searchTerm);
      // Ajoutez ici votre logique de recherche
    }
  }

  onHeartClick(): void {
    console.log('Favoris cliqués - Nombre actuel:', this.nombreFavoris);
    // Ajoutez ici votre logique pour gérer les favoris
    // Exemple: this.nombreFavoris++;
  }

  onCartClick(): void {
    console.log('Panier cliqué - Nombre actuel:', this.nombreArticles);
    this.toggleSidebar();
  }

  onLoginClick(): void {
    console.log('Connexion cliquée');
    this.router.navigate(['/login']);
  }

  // Méthodes pour incrémenter les badges (à utiliser plus tard)
  incrementFavoris(): void {
    this.nombreFavoris++;
  }

  decrementFavoris(): void {
    if (this.nombreFavoris > 0) {
      this.nombreFavoris--;
    }
  }

  // Méthode pour réinitialiser les badges
  resetBadges(): void {
    this.nombreFavoris = 0;
    this.nombreArticles = 0;
  }
}