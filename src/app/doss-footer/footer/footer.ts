import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';  // << important !
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule,
    RouterModule ],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer {
 
}
