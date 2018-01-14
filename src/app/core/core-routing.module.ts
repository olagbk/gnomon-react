// angular modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { HomeComponent } from './pages/home/home.component';
import { SketchesComponent } from './pages/sketches/sketches.component';
import { DrawingsComponent } from './pages/drawings/drawings.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { PhotoAlbumComponent } from './pages/photos/photo-album.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogEntryComponent } from './pages/blog/blog-entry.component';
import {LoginComponent} from './pages/login/login.component';

// guards
import { AuthGuard } from './guards/auth.guard';

export const routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'drawings',
    component: DrawingsComponent
  },
  {
    path: 'sketches',
    component: SketchesComponent
  },
  {
    path: 'photos',
    component: PhotosComponent
  },
  {
    path: 'photos/:album',
    component: PhotoAlbumComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog/:id',
    component: BlogEntryComponent
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [ AuthGuard ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ],
  declarations: []
})
export class CoreRoutingModule { }
