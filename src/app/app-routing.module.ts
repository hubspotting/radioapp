import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'donate',
    loadChildren: () => import('./pages/donate/donate.module').then( m => m.DonatePageModule)
  },
  {
    path: 'lyrics',
    loadChildren: () => import('./pages/lyrics/lyrics.module').then( m => m.LyricsPageModule)
  },
  {
    path: 'trackrequest',
    loadChildren: () => import('./pages/track-request/track-request.module').then( m => m.TrackRequestPageModule)
  },
  {
    path: 'prayerrequest',
    loadChildren: () => import('./pages/prayer-request/prayer-request.module').then( m => m.PrayerRequestPageModule)
  },
  {
    path: 'conselling',
    loadChildren: () => import('./pages/conselling/conselling.module').then( m => m.ConsellingPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'policy',
    loadChildren: () => import('./pages/policy/policy.module').then( m => m.PolicyPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
