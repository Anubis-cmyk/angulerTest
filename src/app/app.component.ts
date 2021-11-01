import { Component, OnInit } from '@angular/core';

import { AdService } from './ad.service';
import { AdItem } from './ad-item';

@Component({
  selector: 'app-root',
  template: `
    
    <button (click)="loadChildComponent();">Load</button>
    <div *ngIf= 'loadComponent'>
    <div>
      <app-ad-banner [ads]="ads"></app-ad-banner>
    </div>
    </div>
  `
})
export class AppComponent implements OnInit {
  ads: AdItem[] = [];
  loadComponent = false;

  constructor(private adService: AdService) {}

  loadChildComponent(){ 
       this.loadComponent = true; 
    }
  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}

