import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            // tslint:disable-next-line:max-line-length
            'Ketchup',
            'Delicious red sour sauce is about to come!', 'https://cdn-image.realsimple.com/sites/default/files/styles/rs_horizontal_image_4/public/ketchup-pour.jpg?itok=drVffsZn',
            [
                new Ingredient('Tomato', 1),
                new Ingredient('Sugar', 2)
            ]),
        new Recipe(
            // tslint:disable-next-line:max-line-length
            'Tomato sauce',
            'Delicious red sour sauce is about to come!', 'https://cdn-image.realsimple.com/sites/default/files/styles/rs_horizontal_image_4/public/ketchup-pour.jpg?itok=drVffsZn',
            [
                new Ingredient('Tomato', 1),
                new Ingredient('Salt', 2)
            ])
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}
