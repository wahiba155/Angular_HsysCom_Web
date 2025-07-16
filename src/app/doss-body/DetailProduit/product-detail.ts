import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Home } from '../home/home'; // ou un service si tu externalises les produits
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping,faHeart,faSearch,faShare,faArrowLeft,faStar} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PanierService } from '../../services/panier.service';

library.add(faCartShopping,faHeart,faSearch,faShare,faArrowLeft,faStar);

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css'],
  standalone: true,
  imports: [RouterModule, CommonModule,FontAwesomeModule],
})
export class ProductDetailComponent implements OnInit {
  produit: any;
  selectedImage: string = '';
  selectedColor: string = '';
  quantity: number = 1;
faHeart =faHeart;
faSearch =faSearch;
faShare=faShare;
faArrowLeft = faArrowLeft;
faCartShopping = faCartShopping;
faStar=faStar;

  constructor(private route: ActivatedRoute,public panierService: PanierService
  ) {}
 

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const home = new Home(null as any, null as any, null as any); // ⚠️ temporaire. Idéalement à remplacer par un service
    this.produit = home.produits.find(p => p.id === id);
    this.selectedImage = this.produit?.image;
this.quantites[this.produit.id] = 1;

  }

  selectColorImage(image: string, color: string) {
    this.selectedImage = image;
    this.selectedColor = color;
  }
 nombreArticles: number = 0;
nombreFavoris: number = 0;
quantites: { [produitId: number]: number } = {};

incrementQuantite(id: number) {
  this.quantites[id]++;
}

decrementQuantite(id: number) {
  if (this.quantites[id] > 1) {
    this.quantites[id]--;
  }
}
calculerNombreArticles(): void {
  const produits = this.panierService.getProduits();
  this.nombreArticles = produits.reduce((total, produit) => {
    return total + (produit.quantite || 1);
  }, 0);
}


ajouterAuPanier(produit: any) {
  produit.quantite = this.quantites[produit.id] || 1;
  this.panierService.ajouterProduit(produit);
}

  toggleFavoris() {
    this.produit.favoris = !this.produit.favoris;
  }

  getStars(): number[] {
    return Array(5).fill(0).map((_, i) => i < this.produit.note ? 1 : 0);
  }

  retourner() {
    history.back();
  }

  partager() {
    console.log('Partager le produit');
  }
}
