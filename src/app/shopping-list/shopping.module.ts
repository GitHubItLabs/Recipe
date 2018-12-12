import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

const DECLARATIONS = [
    ShoppingListComponent,
    ShoppingEditComponent
];

const MODULES = [

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
export class ShoppingModule { }
