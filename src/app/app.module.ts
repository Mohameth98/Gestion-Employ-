import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// Définition des routes
const routes: Routes = [
  { path: '', component: LoginComponent }, // route par défaut
  { path: 'register', component: RegisterComponent },
  // Ajoutez ici d'autres routes selon votre application
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Ajoutez FormsModule ici
    RouterModule.forRoot(routes) // Configurer les routes avec RouterModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

