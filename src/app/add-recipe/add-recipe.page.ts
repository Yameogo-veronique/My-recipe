import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../recette.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.page.html',
  styleUrls: ['./add-recipe.page.scss'],
})
export class AddRecipePage {
  NAME: any;
  INGREDIENTS: any;
  INSTRUCTION: any;

  constructor(
    public recetteservice: RecetteService
  ) { }

  ENREGISTRER(){
    let data = {
      NAME: this.NAME,
      INGREDIENTS: this.INGREDIENTS,
      INSTRUCTION: this.INSTRUCTION,
    }
    this.recetteservice.ENREGISTRER(data).subscribe((res:any) =>{
       console.log("success ===",res);
       this.NAME = '';
       this.INGREDIENTS = '';
       this.INSTRUCTION = '';
       alert('SUCCESS');
    },(error: any)=> {
      alert('ERROR');
      console.log("ERROR ===", error);
    })
  }
}
