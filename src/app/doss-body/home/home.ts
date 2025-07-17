import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartShopping,faHeart,faStar,faSearch } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { PanierService } from '../../services/panier.service';

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
  faHeart = faHeart;
  faStar = faStar;
  faSearch = faSearch;
  isImageLoaded: boolean = false;
  hoveredCategorie: string | null = null;

   constructor(
    private router: Router,
    private elementRef: ElementRef,
    public panierService: PanierService
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
  note: 4,
  nombreAvis: 12,
  garantie: "2 ans",
  livraison: "Livraison gratuite en 48h",
  descriptionComplete: "Ordinateur performant pour les tâches bureautiques et le multimédia.",
  caracteristiques: [ 
    { nom: "Processeur", valeur: "Intel Core i5" },
    { nom: "RAM", valeur: "16GB" },
    { nom: "Stockage", valeur: "SSD 512GB" }
  ],
      },

    {
      id:2,
      categorie: 'Matériel Informatique',
      nom: 'Imprimante Oet d\'encre',
      description: 'Canon PIXMA G3430 Imprimante multifonction',
      prix: 1650,
      image: 'assets/images/imprémente.png',
      enStock: true, 
      note: 3,
      nombreAvis: 12,
      livraison: "Livraison gratuite en 48h",
      descriptionComplete: "Ordinateur performant pour les tâches bureautiques et le multimédia.",

  
      },

    {
      id:3,
      categorie: 'Matériel Informatique',
      nom: 'Carte mémoire',
      description: 'Carte Mémoire MicroSD 256GB - DHI-TF-C100/256GB',
      prix: 117,
      image: 'assets/images/carte.png',
   
      },
       {
      id:4,
      categorie: 'Matériel Informatique',
      nom: 'Tablette Graphiquee',
      description: 'Tablette Graphique One by Wacom Moyenne ',
      prix: 469,
      image: 'assets/images/tablette.png',
   
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

selectedImage: string | undefined;

selectColorImage(produit: any, image: string, color: string): void {
  produit.selectedImage = image;
  produit.selectedColor = color;
}

getProduitsParCategorie(categorie: string) {
  return this.produits.filter(p => p.categorie === categorie);
}


selectedColor: string = '';


// Méthode pour voir les détails d'un produit
voirDetails(produit: any): void {
  console.log('Voir détails du produit:', produit);

}
calculerNombreArticles(): void {
  const produits = this.panierService.getProduits();
  this.nombreArticles = produits.reduce((total, produit) => {
    return total + (produit.quantite || 1);
  }, 0);
}



// Modifier toggleFavoris pour recalculer le nombre de favoris à chaque toggle
toggleFavoris(produit: any): void {
  if (produit.favoris === undefined) {
    produit.favoris = false;
  }
  produit.favoris = !produit.favoris;

}

// Modifier ajouterAuPanier pour recalculer le nombre d'articles
ajouterAuPanier(produit: any) {
  produit.quantite = this.quantites[produit.id] || 1;
  this.panierService.ajouterProduit(produit);
}



  produitsFiltres: any[] = [];

  filtrerProduits(categorie: string) {
    this.produitsFiltres = this.produits.filter(p => p.categorie === categorie);
  }


  ngOnInit(): void {
    this.initializeAnimations();
     this.calculerNombreArticles();
  this.initializeAnimations();
   this.produits.forEach(p => {
    this.quantites[p.id] = 1; 
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

}
