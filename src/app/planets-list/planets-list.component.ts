import { Component, OnInit, Input } from '@angular/core';
import { IPlanets } from '../interfaces';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {
  showPlanets = false;

  @Input() planets: IPlanets[];

  constructor() { }

  ngOnInit() {
  }

  onToggleDetails() {
    this.showPlanets = !this.showPlanets;
  }

}
