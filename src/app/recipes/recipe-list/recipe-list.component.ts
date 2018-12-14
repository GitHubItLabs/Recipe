import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';


@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: any = [];

  constructor(
    private getAllRecipes: RecipeService
  ) { }

  ngOnInit() {
    this.getRecipes()
  }

  getRecipes() {
    this.getAllRecipes.getRecipe().subscribe(res => {
      this.recipes = res;
    })
  }

}