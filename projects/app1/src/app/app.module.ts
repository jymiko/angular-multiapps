import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { App1Component } from './app.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/app/shared/navbar/navbar.module';
import { InputModule } from 'src/app/shared/input/input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'src/app/shared/select/select.module';
@NgModule({
    declarations: [
        App1Component,
        HomeComponent
    ],
    providers: [App1Component],
    bootstrap: [App1Component],
    imports: [
        CommonModule,
        AppRoutingModule,
        NavbarModule,
        InputModule,
        SelectModule,
        ReactiveFormsModule
    ]
})
export class App1SharedModule {}

