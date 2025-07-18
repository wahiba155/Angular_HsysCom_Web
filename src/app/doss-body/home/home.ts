import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartShopping,faHeart,faStar,faSearch } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { PanierService } from '../../services/panier.service';
import { FavorisService } from '../../services/favoris.service';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { ActivatedRoute } from '@angular/router';

library.add(faCartShopping);


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class Home implements OnInit {
  @ViewChild('imageElement') imageElement!: ElementRef<HTMLImageElement>;
  faCartShopping = faCartShopping;
  faStar = faStar;
  faSearch = faSearch;
  faHeart = faHeartSolid;
  faHeartEmpty = faHeartRegular;
  isImageLoaded: boolean = false;
  hoveredCategorie: string | null = null;

   constructor(
    private router: Router,
    private route: ActivatedRoute,
    private elementRef: ElementRef,
    public panierService: PanierService,
    public favorisService: FavorisService  // <-- ici

  ) {}
categoriesDisponibles = [
  { nom: 'Matériel Informatique', image: 'assets/images/pc.jpg' },
  { nom: 'Sécurité', image: 'assets/images/cable.png' },
  { nom: 'Multimédia', image: 'assets/images/milti.png' },
  { nom: 'Espace Gaming', image: 'assets/images/moniteur.png' },
  { nom: 'Équipement Réseaux', image: 'assets/images/réseau.png' },
  { nom: 'Bébé et enfant', image: 'assets/images/baby.png' },
  { nom: 'Tables et chaises', image: 'assets/images/tables_chairs.png' },
  { nom: 'Tapis et paillasson', image: 'assets/images/Tapis_paillasson.png' },
  { nom: 'Maison connectée', image: 'assets/images/smart_home.png' },
  { nom: 'Linge de maison et textile', image: 'assets/images/textiles.png' },
  { nom: 'Salle de bain', image: 'assets/images/bathroom.png' },
  { nom: 'Décoration', image: 'assets/images/decoration.png' },
  { nom: 'Animalerie', image: 'assets/images/animalerie.png' },
  { nom: 'Bricolage et entretien', image: 'assets/images/bricolage.jpg' }
];

   
    produits = [
        {
          id:1,
      categorie: 'Matériel Informatique',
      nom: 'Ordinateur Portable HP',
      description: 'Intel i5, 16GB RAM, SSD 512GB',
      prix: 7500,
      image: 'assets/images/pc.jpg',
       couleurImages: [
    { color: '#000000', image: 'assets/images/pc_noir.jpg' },
    { color: '#C21F1F', image: 'assets/images/pc_rouge.jpg' },
    { color: '#4D6A8D', image: 'assets/images/pc_bleu.png' }
  ],
  enStock: true,
  garantie: "2 ans",
  caracteristiques: [ 
    { nom: "Processeur", valeur: "Intel Core i5" },
    { nom: "RAM", valeur: "16GB" },
    { nom: "Stockage", valeur: "SSD 512GB" }
  ],
  prixPromotion: 6999,
      },

    {
      id:2,
      categorie: 'Matériel Informatique',
      nom: 'Imprimante Oet d\'encre',
      description: 'Canon PIXMA G3430 Imprimante multifonction',
      prix: 1650,
      image: 'assets/images/imprémente.png',
      enStock: true, 
      prixPromotion: 1499,

  
      },

    {
      id:3,
      categorie: 'Matériel Informatique',
      nom: 'Carte mémoire',
      description: 'Carte Mémoire MicroSD 256GB - DHI-TF-C100/256GB',
      prix: 117,
      image: 'assets/images/carte.png',
       prixPromotion: 0,

      },
       {
      id:4,
      categorie: 'Matériel Informatique',
      nom: 'Tablette Graphiquee',
      description: 'Tablette Graphique One by Wacom Moyenne ',
      prix: 469,
      image: 'assets/images/tablette.png',
      prixPromotion: 0,
      },
        {
      id:5,
      categorie: 'Matériel Informatique',
      nom: 'SSD',
      description: 'Disque SSD Portable 500GB - Dahua',
      prix: 400 ,
      image: 'assets/images/ssd.png',
   
      },
   
    {
     id:6,
      categorie: 'Sécurité',
      nom: 'Caméra IP Hikvision',
      description: 'Surveillance HD nuit & jour',
      prix: 1399,
      image: 'assets/images/caméra.jpg'
    },
    {
          id:7,
      categorie: 'Multimédia',
      nom: 'Casque Bluetooth JBL',
      description: 'Son clair et basse puissante',
      prix: 599,
      image: 'assets/images/casque_noir.png',
 couleurImages: [
    { color: '#000000', image: 'assets/images/casque_noir.png' },
    { color: '#C21F1F', image: 'assets/images/casque_rouge.jpg' },
    { color: '#ffffff', image: 'assets/images/casque_blanc.jpg' },
    { color: '#4D6A8D', image: 'assets/images/casque_bleu.jpeg' }
  ],
    },
    {
          id:8,
      categorie: 'Espace Gaming',
      nom: 'Écran Gaming 27"',
      description: '144Hz, 1ms, Full HD',
      prix: 2100,
      image: 'assets/images/moniteur.png'
    },
    {
                id:9,
      categorie: 'Équipement Réseaux ',
      nom: 'Switch TP-Link 8 ports',
      description: 'Gestion intelligente, 1Gbps',
      prix: 329,
      image: 'assets/images/switch.png'
    },{
                id:10,
      categorie: 'Matériel Informatique',
      nom: 'Ordinateur Portable HP',
      description: 'Intel i5, 16GB RAM, SSD 512GB',
      prix: 7500,
      image: 'assets/images/pc.jpg',
       couleurImages: [
    { color: '#000000', image: 'assets/images/pc_noir.jpg' },
    { color: '#C21F1F', image: 'assets/images/pc_rouge.jpg' },
    { color: '#4D6A8D', image: 'assets/images/pc_bleu.png' }
  ],
      },

    {
                id:11,
      categorie: 'Matériel Informatique',
      nom: 'Imprimante Oet d\'encre',
      description: 'Canon PIXMA G3430 Imprimante multifonction',
      prix: 1650,
      image: 'assets/images/imprémente.png',
   
      },

    {
       id:12,
      categorie: 'Matériel Informatique',
      nom: 'Carte mémoire',
      description: 'Carte Mémoire MicroSD 256GB - DHI-TF-C100/256GB',
      prix: 117,
      image: 'assets/images/carte.png',
   
      },
       {
       id:13,
      categorie: 'Matériel Informatique',
      nom: 'Tablette Graphiquee',
      description: 'Tablette Graphique One by Wacom Moyenne ',
      prix: 469,
      image: 'assets/images/tablette.png',
   
      },
        {
                id:14,
      categorie: 'Matériel Informatique',
      nom: 'SSD',
      description: 'Disque SSD Portable 500GB - Dahua',
      prix: 400 ,
      image: 'assets/images/ssd.png',
   
      },
   
    {
                id:15,

      categorie: 'Sécurité',
      nom: 'Caméra IP Hikvision',
      description: 'Surveillance HD nuit & jour',
      prix: 1399,
      image: 'assets/images/caméra.jpg'
    },
    {
                id:16,

      categorie: 'Multimédia',
      nom: 'Casque Bluetooth JBL',
      description: 'Son clair et basse puissante',
      prix: 599,
      image: 'assets/images/casque_noir.png',
 couleurImages: [
    { color: '#000000', image: 'assets/images/casque_noir.png' },
    { color: '#C21F1F', image: 'assets/images/casque_rouge.jpg' },
    { color: '#ffffff', image: 'assets/images/casque_blanc.jpg' },
    { color: '#4D6A8D', image: 'assets/images/casque_bleu.jpeg' }
  ],
    },
    {
                id:17,
      categorie: 'Espace Gaming',
      nom: 'Écran Gaming 27"',
      description: '144Hz, 1ms, Full HD',
      prix: 2100,
      image: 'assets/images/moniteur.png'
    },
    {
                id:18,
      categorie: 'Équipement Réseaux ',
      nom: 'Switch TP-Link 8 ports',
      description: 'Gestion intelligente, 1Gbps',
      prix: 329,
      image: 'assets/images/switch.png'
    },
    {
                id:19,
      categorie: 'Matériel Informatique',
      nom: 'Ordinateur Portable HP',
      description: 'Intel i5, 16GB RAM, SSD 512GB',
      prix: 7500,
      image: 'assets/images/pc.jpg',
       couleurImages: [
    { color: '#000000', image: 'assets/images/pc_noir.jpg' },
    { color: '#C21F1F', image: 'assets/images/pc_rouge.jpg' },
    { color: '#4D6A8D', image: 'assets/images/pc_bleu.png' }
  ],
      },

    {
                id:20,
      categorie: 'Matériel Informatique',
      nom: 'Imprimante Oet d\'encre',
      description: 'Canon PIXMA G3430 Imprimante multifonction',
      prix: 1650,
      image: 'assets/images/imprémente.png',
   
      },

    {
                id:21,
      categorie: 'Matériel Informatique',
      nom: 'Carte mémoire',
      description: 'Carte Mémoire MicroSD 256GB - DHI-TF-C100/256GB',
      prix: 117,
      image: 'assets/images/carte.png',
   
      },
       {
                  id:22,
      categorie: 'Matériel Informatique',
      nom: 'Tablette Graphiquee',
      description: 'Tablette Graphique One by Wacom Moyenne ',
      prix: 469,
      image: 'assets/images/tablette.png',
   
      },
        {
        id:23,
      categorie: 'Matériel Informatique',
      nom: 'SSD',
      description: 'Disque SSD Portable 500GB - Dahua',
      prix: 400 ,
      image: 'assets/images/ssd.png',
   
      },
   
    {
            id:24,
      categorie: 'Sécurité',
      nom: 'Caméra IP Hikvision',
      description: 'Surveillance HD nuit & jour',
      prix: 1399,
      image: 'assets/images/caméra.jpg'
    },
    {
                id:25,
      categorie: 'Multimédia',
      nom: 'Casque Bluetooth JBL',
      description: 'Son clair et basse puissante',
      prix: 599,
      image: 'assets/images/casque_noir.png',
 couleurImages: [
    { color: '#000000', image: 'assets/images/casque_noir.png' },
    { color: '#C21F1F', image: 'assets/images/casque_rouge.jpg' },
    { color: '#ffffff', image: 'assets/images/casque_blanc.jpg' },
    { color: '#4D6A8D', image: 'assets/images/casque_bleu.jpeg' }
  ],
    },
    {
                id:26,
      categorie: 'Espace Gaming',
      nom: 'Écran Gaming 27"',
      description: '144Hz, 1ms, Full HD',
      prix: 2100,
      image: 'assets/images/moniteur.png'
    },
    {
                id:27,
      categorie: 'Équipement Réseaux ',
      nom: 'Switch TP-Link 8 ports',
      description: 'Gestion intelligente, 1Gbps',
      prix: 329,
      image: 'assets/images/switch.png'
    }
  ];
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
produitsFiltres: any[] = [];

  filtrerProduits(categorie: string) {
    this.produitsFiltres = this.produits.filter(p => p.categorie === categorie);
  }


selectedImage: string | undefined;

selectColorImage(produit: any, image: string, color: string): void {
  produit.selectedImage = image;
  produit.selectedColor = color;
}

getProduitsParCategorie(categorie: string) {
  return this.produits.filter(p => p.categorie === categorie);
}


selectedColor: string = '';


voirDetails(produit: any): void {
  console.log('Voir détails du produit:', produit);

}
calculerNombreArticles(): void {
  const produits = this.panierService.getProduits();
  this.nombreArticles = produits.reduce((total, produit) => {
    return total + (produit.quantite || 1);
  }, 0);
}



toggleFavoris(): void {
  const favoris = this.panierService.getProduits();
  this.nombreFavoris = favoris.reduce((total, produit) => {
    return total + (produit.quantite || 1);
  }, 0);

}
updateNombreFavoris(): void {
  this.nombreFavoris = this.favorisService.getFavoris().length;
}



ajouterAuPanier(produit: any) {
  // Créer une copie du produit pour éviter de modifier l'original
  const produitPanier = { ...produit };
  
  // Utiliser le prix promotionnel si disponible, sinon le prix normal
  produitPanier.prixFinal = produit.prixPromotion > 0 ? produit.prixPromotion : produit.prix;
  
  // Ajouter la quantité sélectionnée
  produitPanier.quantite = this.quantites[produit.id] || 1;
  
  this.panierService.ajouterProduit(produitPanier);
  
  // Optionnel : Afficher un message de confirmation
  console.log(`Produit ajouté au panier avec le prix: ${produitPanier.prixFinal} MAD`);
}





  ngOnInit(): void {
    this.initializeAnimations();
     this.calculerNombreArticles();
    this.updateNombreFavoris();

   this.produits.forEach(p => {
    this.quantites[p.id] = 1; 
  });
   this.route.queryParams.subscribe(params => {
    const categorieParam = params['categorie'];
    if (categorieParam) {
      this.filtrerProduits(categorieParam);
    } else {
      this.produitsFiltres = []; // ou tous les produits si tu veux
    }
  });
 
  }

  private initializeAnimations(): void {
    const textBlock = this.elementRef.nativeElement.querySelector('.text-block');
    if (textBlock) {
      textBlock.classList.add('slide-in-left');
    }

    setTimeout(() => {
      const imageBlock = this.elementRef.nativeElement.querySelector('.image-block');
      if (imageBlock) {
        imageBlock.classList.add('slide-in-right');
      }
    }, 300);

    this.initializeParallax();
  }

  private initializeParallax(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    });

    const homeContainer = this.elementRef.nativeElement.querySelector('.home-container');
    if (homeContainer) {
      observer.observe(homeContainer);
    }
  }

  onVoirPlusClick(): void {
    console.log('Voir plus cliqué');
    this.router.navigate(['/categorie']);
  }

  onImageLoad(): void {
    this.isImageLoaded = true;
    const img = this.elementRef.nativeElement.querySelector('.image-block img');
    if (img) {
      img.classList.add('loaded');
    }
  }

  onImageError(): void {
    const img = this.elementRef.nativeElement.querySelector('.image-block img') as HTMLImageElement;
    if (img) {
      img.src = 'assets/images/default-product.jpg';
      img.alt = 'Image par défaut';
    }
  }
Details(produit: any): void {
  console.log('Voir détails du produit:', produit);
  this.router.navigate(['/produit', produit.id]);
}

onProductCardClick(produit: any): void {
  this.Details(produit);
}



favorisOuvert: boolean = false;



// Méthode corrigée pour toggleFavori aussi
toggleFavori(produit: any): void {
  const estFavori = this.favorisService.estDansFavoris(produit.id);
  if (estFavori) {
    this.favorisService.retirerFavori(produit.id);
  } else {
    // Créer une copie du produit avec le bon prix
    const produitFavoris = { ...produit };
    produitFavoris.prixFinal = produit.prixPromotion > 0 ? produit.prixPromotion : produit.prix;
    
    this.favorisService.ajouterFavori(produitFavoris);
  }
  this.updateNombreFavoris();
}

// Méthode utilitaire pour obtenir le prix final d'un produit
getPrixFinal(produit: any): number {
  return produit.prixPromotion > 0 ? produit.prixPromotion : produit.prix;
}


estFavori(produit: any): boolean {
  return this.favorisService.estDansFavoris(produit.id);
}


toggleFavorisSidebar() {
  this.favorisOuvert = !this.favorisOuvert;
}

// Méthode corrigée pour ajouter aux favoris
ajouterAuFavoris(produit: any): void {
  // Créer une copie du produit pour éviter de modifier l'original
  const produitFavoris = { ...produit };
  
  // Utiliser le prix promotionnel si disponible, sinon le prix normal
  produitFavoris.prixFinal = produit.prixPromotion > 0 ? produit.prixPromotion : produit.prix;
  
  this.favorisService.ajouterFavori(produitFavoris);
  this.updateNombreFavoris();
  
  // Optionnel : Afficher un message de confirmation
  console.log(`Produit ajouté aux favoris avec le prix: ${produitFavoris.prixFinal} MAD`);
}
}
