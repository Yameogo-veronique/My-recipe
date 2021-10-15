import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeServiceService} from'./recipe-service.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.page.html',
  styleUrls: ['./list-recipe.page.scss'],
})
export class ListRecipePage implements OnInit {
recipesList: Recipe[];
  constructor( private recipeService: RecipeServiceService,
    private alertCtrl: AlertController,) { }
async addRecipe(){
  const alert = await this.alertCtrl.create({
    header: 'Add new recipe',
    subHeader: 'Follow different step',
    message:'please complet the different informatique to add a new recipe',
    inputs:[
      {
        name:'name',
        type:'text',
        placeholder:'enter the name'
      },
      {
        name:'ingredients',
        type:'text',
        placeholder:'enter the ingredients'
      },
      {
        name:'instruction',
        type:'text',
        placeholder:'enter the instruction'
      }
    ],
    buttons:[
      {
        text:'Cancel',
        handler: ()=>{}
      },
      {
        text: 'Add',
        handler: (data)=>{
          this.recipeService.saveRecipe(data);
        }
      }
    ]
  });
  alert.present();
}
  ngOnInit() {
    this.recipesList = this.recipeService.getRecipes();
  }
  delAll(){
    localStorage.clear();
  }

}
