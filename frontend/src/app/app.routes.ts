import { DeveloperProfileComponent } from './developer-profile/developer-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/dev-profile', pathMatch: 'full'},    
    { path: 'dev-profile', component: DeveloperProfileComponent },


    { path: '**', component: PageNotFoundComponent },
];
