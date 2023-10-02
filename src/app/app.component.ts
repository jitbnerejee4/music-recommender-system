import { Component, Renderer2, Inject } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { SearchService } from './search.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('bgColorChange', [
      state('start', style({ backgroundColor: '*' })),
      transition('* => *', [
        animate('0.3s')
      ]),
    ])
  ]
})
export class AppComponent {
  backgroundColor = '';
  constructor(private searchService: SearchService, private renderer: Renderer2, @Inject(DOCUMENT) private document: any){
    this.searchService.colorResponse.subscribe(color=>{
      this.renderer.setStyle(this.document.body, 'backgroundColor', color);
      this.renderer.setStyle(this.document.body, 'transition', 'background-color 0.5s ease'); // Smooth transition
    })
    
  }

  

  
}