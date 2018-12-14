import { Component, OnInit } from '@angular/core';
import { ShoppingService } from './services/shopping.service';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: any = [];


  constructor(
    private shoppingService: ShoppingService
  ) { }

  ngOnInit() {
    this.getAllIngred();
  }

  getAllIngred() {
    this.shoppingService.getIngredients().subscribe(res => {
      this.ingredients = res
    })
  }

}
