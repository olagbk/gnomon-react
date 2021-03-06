import { Component, OnInit } from '@angular/core';
import { Album } from '../../gallery/album';
import { AlbumsService } from '../../gallery/albums.service';

@Component({
  selector: 'app-sketches',
  templateUrl: './sketches.component.html',
  styleUrls: ['./sketches.component.scss']
})
export class SketchesComponent implements OnInit {
  album: Album;

  constructor(private albumsService: AlbumsService) {}

  ngOnInit() {
    this.album = this.albumsService.getAlbumByType('sketches');
  }
}
