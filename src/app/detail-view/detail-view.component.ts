import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artist, Album, Track } from '../models';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})

export class DetailViewComponent implements OnInit{
  constructor(private route: ActivatedRoute,
              private http: HttpClient) { }

  //init data-models from import
  artist: Artist = {} as Artist;
  topTracks: Track[] = [];
  topAlbums: Album[] = [];


  //init-function
  ngOnInit(): void {

    //get mbid of searched artist from navigation
    const artistId = this.route.snapshot.queryParamMap.get('mbid');

    //set constants
    const apiKey = 'cd8611045e809417db5ff1a28cdc866f';
    const getArtist = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&mbid=${artistId}&api_key=${apiKey}&format=json`;
    const getTrack = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&mbid=${artistId}&limit=5&api_key=${apiKey}&format=json`;
    const getAlbum = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&mbid=${artistId}&limit=5&api_key=${apiKey}&format=json`;

    //get artist from api with mbid
    this.http.get<any>(getArtist).subscribe((response) => {
      //set data from response
      const artistInfo = response.artist;
      //assign data to model
      this.artist = {
        name: artistInfo.name,
        bannerImage: artistInfo.image[3]['#text'],
        listeners: artistInfo.stats.listeners,
        plays: artistInfo.stats.playcount,
      };
    });

    //get topTracks from api with mbid
    this.http.get<any>(getTrack).subscribe((response) => {
      const tracks = response.toptracks.track;
      this.topTracks = tracks.map((track: any) => ({
        title: track.name,
        artwork: track.image[2]['#text'],
        playcount: track.playcount
      }));
    });

    //get topAlbums from api with mbid
    this.http.get<any>(getAlbum).subscribe((response) => {
      const albums = response.topalbums.album;
      this.topAlbums = albums.map((album: any) => ({
        title: album.name,
        artwork: album.image[2]['#text'],
        playcount: album.playcount
      }));
    });
  }

}
