import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { ProductListComponent } from "./product-list.components";
import { ConvertToSpacesPipe } from "../shared/convert-to-spaces.pipe";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductGuardService } from "./product-guard.service";
import { ProductService } from "./product.service";
import { SharedModule } from './../shared/shared.module';



@NgModule({
  imports: [   
    HttpClientModule, 
    RouterModule.forChild([      
      {path:'products',  component: ProductListComponent },
      {path:'product/:id', 
          canActivate: [ProductGuardService],
          component: ProductDetailComponent  }        
    ]), SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,    
    ConvertToSpacesPipe     
  ], 
  providers : [ProductService,
    ProductGuardService 
  ]
})

export class ProductModule { }
