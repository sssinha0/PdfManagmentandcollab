import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { SafeUrlPipe } from "../../safe-url.pipe";

@Component({
  selector: 'app-pdf-preview-dialog',
  imports: [MatIconModule, SafeUrlPipe,MatDialogModule],
  templateUrl: './pdf-preview-dialog.component.html',
  styleUrl: './pdf-preview-dialog.component.css'
})
export class PdfPreviewDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { name: string; url: string },
    public dialogRef: MatDialogRef<PdfPreviewDialogComponent>
  ) {}
}
