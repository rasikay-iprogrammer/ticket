import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  card = [{ 
    title: 'Capital Control', cols: 1, rows: 1, 
    IMGPath: 'http://www.pngmart.com/files/5/Tea-Cup-PNG-Transparent-Image.png' ,
    ButtonLabel:'Stack Overflow',
    ButtonLink:'https://stackoverflow.com'
  },{ 
    title: 'Capital Control', cols: 1, rows: 1, 
    IMGPath: 'http://www.pngmart.com/files/4/Tea-PNG-File.png' ,
    ButtonLabel:'Stack Overflow',
    ButtonLink:'https://stackoverflow.com'
  },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
