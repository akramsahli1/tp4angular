import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './application/parent/parent.component';
import { EnfantComponent } from './application/enfant/enfant.component';
import { TableauComponent } from './exercice1/tableau/tableau.component';
import { NombreComponent } from './exercice1/nombre/nombre.component';
import { MaterielComponent } from './exercice2/materiel/materiel.component';
import { MaterielListComponent } from './exercice2/materiel-list/materiel-list.component';
import { NotesComponent } from './notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    EnfantComponent,
    TableauComponent,
    NombreComponent,
    MaterielComponent,
    MaterielListComponent,
    NotesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
