import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'cm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Star Wars';
  people: any[];
  planets: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCustomers()
        .subscribe(data => this.people = data);

        this.dataService.getPlanets()
        .subscribe(data => this.planets = data);
  }



}


