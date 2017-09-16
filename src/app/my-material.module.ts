import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdMenuModule, MdButtonModule } from '@angular/material';

@NgModule({
    imports: [MdButtonModule, MdMenuModule],
    exports: [MdButtonModule, MdMenuModule]
})
export class MyMaterialModule {}
