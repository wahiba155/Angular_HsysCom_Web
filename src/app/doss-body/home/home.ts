import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartShopping, faHeart as faHeartSolid, faStar, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { CommonModule } from '@angular/common';
import { PanierService } from '../../services/panier.service';
import { FavorisService } from '../../services/favoris.service';

library.add(faCartShopping); // Optionnel, selon usage

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  @ViewChild('imageElement') imageElement!: ElementRef<HTMLImageElement>; // Utilisé ?

  faCartShopping = faCartShopping;
  faStar = faStar;
  faSearch = faSearch;
  faHeartSolid = faHeartSolid;
  faHeartRegular = faHeartRegular;

  isImageLoaded: boolean = false;
  hoveredCategorie: string | null = null;

  constructor(
    private router: Router,
    private elementRef: ElementRef,
    public panierService: PanierService,
    public favorisService: FavorisService
  ) {}


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
  ];  }

