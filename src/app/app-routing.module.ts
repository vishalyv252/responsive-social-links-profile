import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialLinksProfilePageComponent } from './components/social-links-profile-page/social-links-profile-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [

  // Default route that loads the 'Social Links Profile Page' component.
  { path: '',  component: SocialLinksProfilePageComponent },

  // Wildcard route that catches all undefined routes and loads the 'Not Found Page' component.
  { path: '**', component: NotFoundPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
