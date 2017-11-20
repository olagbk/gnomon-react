import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../album';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  albums: Album[];
  backgroundImage: string;
  backgroundsLoaded = 0;

  constructor(private albumsService: AlbumsService) { }

  ngOnInit() {
    this.albums = this.albumsService.getPhotos();
  }
  imagePath(filename): string {
    return `../../assets/${filename}`;
  }
  setBackground(filename) {
    this.backgroundImage = this.imagePath(filename);
    this.backgroundsLoaded++;
  }
}
