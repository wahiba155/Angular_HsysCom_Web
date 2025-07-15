import { Component, OnInit, ElementRef } from '@angular/core';
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

export class Header implements OnInit {
  faSearch = faSearch;
  faHeart = faHeart;
  faCartShopping = faCartShopping;
  faUser = faUser;
  faTimes = faTimes;
  nombreArticles = 0;
  sidebarVisible = false;
  private panierSub!: Subscription;

  navOpen = false;

  toggleNav() {
    this.navOpen = !this.navOpen;
  }
  isMenuOpen = false;

  constructor(
    private elementRef: ElementRef, 
    public panierService: PanierService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeAnimations();
    this.panierSub = this.panierService.panier$.subscribe(panier => {
      this.nombreArticles = panier.length;
    });
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  closeSidebar() {
    this.sidebarVisible = false;
  }

  ngOnDestroy(): void {
    if (this.panierSub) this.panierSub.unsubscribe();
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
    this.router.navigate(['/PanierPage']); 
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    const searchTerm = input.value.trim();
    
    if (searchTerm) {
      console.log('Recherche pour:', searchTerm);
    }
  }

  onHeartClick(): void {
    console.log('Favoris cliqués');
  }

  onCartClick(): void {
    console.log('Panier cliqué');
  }

  onLoginClick(): void {
    console.log('Connexion cliquée');
  }
}