import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatStepperModule } from "@angular/material/stepper";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  imports: [
    MatCardModule,
    MatIconModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatExpansionModule,
    MatGridListModule,
    MatSnackBarModule,
    MatStepperModule,
    MatToolbarModule
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatExpansionModule,
    MatGridListModule,
    MatSnackBarModule,
    MatStepperModule,
    MatToolbarModule
  ]
})
export class CustomMaterialModule {}