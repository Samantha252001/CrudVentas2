import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Related } from '../related';
import { RelatedService } from '../related.service';

@Component({
  selector: 'app-related-search',
  templateUrl: './related-search.component.html'
})
export class RelatedSearchComponent implements OnInit {

  constructor(
    private relatedService: RelatedService
  ) { }

  @Output() relatedEmiter = new EventEmitter<Related>();
  relateds: Related[] = [];

  ngOnInit(): void {
  }

  findByName(term: string):void {
    
    if (term.length>=2){
      this.relatedService.findByName(term).subscribe(
        (response) => {
          console.log(term + " "+ response);
          this.relateds = response
        }
      )
    }
    if (term.length===0){
      this.relateds = [];
    }
    
  }

  onSelect(related: Related): void{
    this.relatedEmiter.emit(related);
  }

}
