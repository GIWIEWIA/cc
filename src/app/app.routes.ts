import { Routes } from '@angular/router';
import path from 'path';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { DonationComponent } from './donation/donation.component';


;


export const routes: Routes = [
    {path:"Resetpassword",component: ResetpasswordComponent},
    {path:"Login",component:LoginComponent},
    {path:"Register",component:RegisterComponent},
    {path:"Profile",component:ProfileComponent},
    {path:"bottom",component:FooterComponent},
    {path:"Volunteer",component:VolunteerComponent},
    {path:"Donation",component:DonationComponent},
   
    
    
    
    
    


];

