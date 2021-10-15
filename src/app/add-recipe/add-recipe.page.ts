import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Recipe } from '../list-recipe/recipe.model';
import { RecipeServiceService } from '../list-recipe/recipe-service.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.page.html',
  styleUrls: ['./add-recipe.page.scss'],
})
export class AddRecipePage {
  recipeForm: FormGroup = this.fb.group({
    nameInput: [[], Validators.required],
    ingredientInput: [[], Validators.required],
    instructionInput: [[], Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeServiceService
  ) { }
    addRecipe(): void{
      if(this.recipeForm.valid){
        const newRecipe: Recipe = {
          name: this.recipeForm.get('nameInput').value,
          ingredients: this.recipeForm.get('ingredientInput').value,
          instruction: this.recipeForm.get('instructionInput').value,
        };

        this.recipeService.saveRecipe(newRecipe);
      }
    }
  }

