import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: any;
  
  constructor() { }

  ngOnInit() {
  }

}
