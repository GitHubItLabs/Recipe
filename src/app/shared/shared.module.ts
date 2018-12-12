import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RecipesModule } from '../recipes/recipes.module';
import { ShoppingModule } from '../shopping-list/shopping.module';

const DECLARATIONS = [
    HeaderComponent
];

const MODULES = [
    RecipesModule,
    ShoppingModule
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
export class SharedModule { }
