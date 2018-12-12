import { NgModule } from '@angular/core';
import { RecipesModule } from '../recipes/recipes.module';
import { ShoppingModule } from '../shopping-list/shopping.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';

const DECLARATIONS = [
    HomeComponent
];

const MODULES = [
    RecipesModule,
    ShoppingModule,
    SharedModule,
];

const SERVICES = [

];

@NgModule({
    declarations: [
        ...DECLARATIONS
    ],
    imports: [
        ...MODULES
    ],
    exports: [
        ...DECLARATIONS,
        ...MODULES
    ],
    providers: [
        ...SERVICES
    ],
})
export class HomeModule { }
