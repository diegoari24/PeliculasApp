import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'movie', pathMatch: 'full' },
  { path: 'movie', loadChildren: './pages/movie/movie.module#MoviePageModule' },
  { path: 'movie/:id', loadChildren: './pages/movie-details/movie-details.module#MovieDetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
