import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResetpasswordComponent } from "./resetpassword/resetpassword.component";
import { NevbarComponent } from "./navbar/nevbar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ResetpasswordComponent, NevbarComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FinallWork';
}
