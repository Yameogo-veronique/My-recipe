import { Inject,Injectable } from '@angular/core';
import{LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';
import { Recipe } from './recipe.model';
@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
private  recipes: Recipe[];
  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ) {
    this.recipes=this.readRecipes('recipes');
   }
   getRecipes(){
     return this.recipes;
   }
   getOneRecipe(name: string){
     return {...this.recipes.find(recipe=>recipe.name===name)};
   }
   //read the recipe save
   readRecipes(key: string){
     return this.storage.get(key)|| [];
   }
   //save recipe that you see recently
   saveRecipe(recipe: Recipe){
     this.recipes.push(recipe);
     this.storage.set('recipes', this.recipes);
   }
   resetStats(key: string){
     this.storage.set(key, []);
  }
  getStatsOf(key: string){
    return this.readRecipes(key).length;
  }
}
