import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingService } from './services/shopping.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

const DECLARATIONS = [
    ShoppingListComponent,
    ShoppingEditComponent
];

const MODULES = [
    BrowserModule,
    CommonModule
];

const SERVICES = [
    ShoppingService
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
