import { Component,Input } from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'hero-detail',
  template:`<div *ngIf="hero" class="detailBox">
                <h2>{{hero.name}} details!</h2>
                <div><label>Id: </label>{{hero.id}}</div>
                <div>
                    <label >Name: </label>
                    <input [(ngModel)]="hero.name" placeholder="name"/>
                </div>
              </div>`,
    styles:[`
        .detailBox{
            width:400px;
            border:#607D8B solid 4px;
            background-color:#DDDDDD;
            padding:0px 5px 5px 5px;
        }
    `]              
})

export class HeroDetailComponent {
    @Input() hero: Hero;
}


