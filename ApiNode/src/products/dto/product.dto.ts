
 export class CreateProductDTO {

  constructor(   
   public  code: string,
   public name: string,
   public description: string,
   public price: number,
   public quantity: number,
   public inventoryStatus: string,
   public category: string,
   public image?: string,
   public rating?: number) {}
}

export class ProductResponseDTO{ 
    constructor(   
    public  _id: number,
    public  code: string,
    public name: string,
    public description: string,
    public price: number,
    public quantity: number,
    public inventoryStatus: string,
    public category: string,
    public image?: string,
    public rating?: number) {}
}