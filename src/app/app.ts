import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { Header } from './doss-header/header/header'; // ✅ attention au nom exact
import { Footer } from './doss-footer/footer/footer';  // Import du footer

@Component({
  selector: 'app-root',
  standalone: true, // ✅ obligatoire si tu n’as pas de app.module.ts
  imports: [RouterOutlet, CommonModule, Header, Footer], // ✅ ajoute le Header ici
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Angular_HsysCom_Web';
}
