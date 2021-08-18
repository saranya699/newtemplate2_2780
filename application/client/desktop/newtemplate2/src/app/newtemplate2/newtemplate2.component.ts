import { Component, OnInit } from '@angular/core';
import { Newtemplate2Service } from './newtemplate2.service';

@Component({
  selector: 'app-newtemplate2',
  templateUrl: './newtemplate2.component.html',
  styleUrls: ['./newtemplate2.component.scss'],
})

export class Newtemplate2Component implements OnInit {

    constructor (
        private newtemplate2Service: Newtemplate2Service,
    ) { }

    ngOnInit() {
    }
}