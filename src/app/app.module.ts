import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchedulerLayoutComponent } from './scheduler-layout/scheduler-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule, MatDialogModule, MatInputModule } from '@angular/material';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    SchedulerLayoutComponent,
    TaskDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TaskDialogComponent]
})
export class AppModule { }
