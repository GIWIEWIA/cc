import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NevbarComponent } from '../navbar/nevbar.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FooterComponent,NevbarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
