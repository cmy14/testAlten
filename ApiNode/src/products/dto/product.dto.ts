// export interface ProductDTO{
//     _id: number;
//     code: string;
//     name: string;
//     description: string;
//     price: number;
//     quantity: number;
//     inventoryStatus: string;
//     category: string;
//     image?: string;
//     rating?: number;
//  }

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