import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(private router: Router, private http: HttpClient) { }

  //int value from search-input
  searchQuery: string = '';
  //init array with search-results
  searchResults: any[] = [];

  //search possible artists with typed letters form search-input
  updateSearch(): void {
    //set constants
    const apiKey = 'cd8611045e809417db5ff1a28cdc866f';
    const apiUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${this.searchQuery}&api_key=${apiKey}&format=json`;

    //get possible artists
    this.http.get<any>(apiUrl).subscribe((response) => {
      //assign result-data
      const artists = response.results.artistmatches.artist;
      //output of result
      this.searchResults = artists;
    });
  }

  //get artist and navigate to detail-view
  performSearchList($artistName: string): void {
    //set constants
    const apiKey = 'cd8611045e809417db5ff1a28cdc866f';
    const apiUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${$artistName}&api_key=${apiKey}&format=json`;

    //search artist with entered name
    this.http.get<any>(apiUrl).subscribe((response) => {
      const artists = response.results.artistmatches.artist;

      //check if artist found
      if (artists.length > 0) {
        //assign first(0) artist of result
        const artist = artists[0];
        const mbid = artist.mbid;

        //navigate to detail-view with mbid as parameter
        this.router.navigate(['/detail', mbid], { queryParams: { mbid: mbid } })
      .then(() => {
          //reload to update page
          window.location.reload();
      });
        //error if no artist found
      } else {
        console.log("Error - no Artist found!")
      }
    });
  }

}
