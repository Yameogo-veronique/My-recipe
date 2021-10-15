export class Recipe{
  constructor(
    public name: string,
    public ingredients: string,
    public instruction: string,
    public id?: number,
  ){}
}
