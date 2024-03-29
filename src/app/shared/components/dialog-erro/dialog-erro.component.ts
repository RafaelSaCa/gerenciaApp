import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-erro',
  templateUrl: './dialog-erro.component.html',
  styleUrls: ['./dialog-erro.component.scss'],
})
export class DialogErroComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}

}
