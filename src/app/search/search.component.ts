import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  constructor(private searchService: SearchService){

  }
  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm){

    if(!form.valid) {
      return;
    }
    this.searchService.getTracks(form.value.search)
    form.reset()
  }
}
