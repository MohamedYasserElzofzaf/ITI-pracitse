/* import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  searchTerm: string = '';
  countries!: Country[];
  term: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Country[]>('./assets/data/countries.json')
      .subscribe((data: Country[]) => {
        this.countries = data;
      });
  }
}
*/

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  searchTerm: string = '';
  countries!: Country[];
  allCountries!: Country[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Country[]>('./assets/data/countries.json')
      .subscribe((data: Country[]) => {
        this.countries = data;
        this.allCountries = this.countries;
      });
  }

  search(value: string): void {
    this.countries = this.allCountries.filter((val) =>
      val.name.toLowerCase().includes(value)
    );
  }
}
