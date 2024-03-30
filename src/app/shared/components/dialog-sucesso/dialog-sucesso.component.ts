import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-sucesso',
  templateUrl: './dialog-sucesso.component.html',
  styleUrls: ['./dialog-sucesso.component.scss']
})
export class DialogSucessoComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string){}
}
