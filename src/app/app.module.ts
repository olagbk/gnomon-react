import { APP_INITIALIZER, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';


import { GalleryModule } from 'ng-gallery';

import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

import { AppRoutingModule } from './app-routing.module';

import { AboutComponent } from './pages/about/about.component';
import { AlbumThumbComponent } from './pages/photos/album-thumb.component';
import { AppComponent } from './app.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactFormComponent } from './widgets/contact-form/contact-form.component';
import { DrawingsComponent } from './pages/drawings/drawings.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryThumbComponent } from './gallery/gallery-thumb.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './widgets/navbar/navbar.component';
import { PaginationComponent } from './widgets/pagination/pagination.component';
import { PhotoAlbumComponent } from './pages/photos/photo-album.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { SketchesComponent } from './pages/sketches/sketches.component';
import { SpinnerComponent } from './widgets/spinner/spinner.component';
import { ScrollComponent } from './widgets/scroll/scroll.component';

import { BlogService } from './pages/blog/blog.service';
import { FlickrService } from './gallery/flickr.service';
import { AlbumsService } from './gallery/albums.service';

import { TimesPipe } from './pipes/times.pipe';

import { galleryConfig } from './gallery/gallery.config';

export function startupServiceFactory(albumsService: AlbumsService): Function {
  return () => albumsService.loadAll();
}

@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    PaginationComponent,
    SpinnerComponent,
    ScrollComponent,
    ContactFormComponent,

    HomeComponent,
    BlogComponent,
    AboutComponent,
    SketchesComponent,
    DrawingsComponent,
    PhotosComponent,
    PhotoAlbumComponent,
    AlbumThumbComponent,

    GalleryComponent,
    GalleryThumbComponent,

    TimesPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    GalleryModule.forRoot(galleryConfig),
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule
  ],
  providers: [
    AlbumsService,
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [AlbumsService],
      multi: true
    },
    BlogService,
    FlickrService,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: { siteKey: '6LfB2jkUAAAAAAM_uaJSpcoLZk3mEe1Sh17ShDcN' } as RecaptchaSettings,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
