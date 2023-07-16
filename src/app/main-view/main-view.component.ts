import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Artist {
  name: string;
  image: string;
  listeners:  number;
}

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  topArtists: Artist[] = [];

  constructor(private http: HttpClient) {}


  //on init, get top artists from predefined country
  ngOnInit(): void {
    this.fetchTopArtists();
  }

  //string selected country with spain as predefined country
  selectedCountry: string = 'spain';
  //array with possible countries
  countries: { name: string, code: string }[] = [
    { name: 'Spain', code: 'spain' },
    { name: 'Italy', code: 'italy' },
    { name: 'Norway', code: 'norway' }
  ];

  //get topArtists from selected country
  fetchTopArtists(): void {
    //set constans for api-call
    const apiKey = 'cd8611045e809417db5ff1a28cdc866f';
    const apiUrl = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${this.selectedCountry}&limit=10&api_key=${apiKey}&format=json`;

    //get topArtists from api with selected country
    this.http.get<any>(apiUrl).subscribe((response) => {
      //set data from response
      this.topArtists = response.topartists.artist.map((artist: any) => {
        return {
          name: artist.name,
          image: artist.image[1]['#text'],
          listeners: artist.listeners,
        };
      });
    });
  }

}
