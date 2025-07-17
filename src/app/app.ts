import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { Header } from './doss-header/header/header'; 
import { Footer } from './doss-footer/footer/footer';  
import { CategoryBar } from './doss-catégorie/category-bar/category-bar'; 

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, CommonModule, Header, Footer,CategoryBar], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Angular_HsysCom_Web';
}
