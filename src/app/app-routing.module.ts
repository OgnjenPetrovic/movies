import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';


const appRoutes: Routes = [
    {
      path: '',
      redirectTo: '/Movies',
      pathMatch: 'full'
    },
    {
      path: 'Movies',
      component: MoviesComponent,
    },

  ];
  
  
@NgModule({
    imports:[
        RouterModule.forRoot(
            appRoutes
          )
    ], 
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}