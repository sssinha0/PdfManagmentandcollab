import { Component, Inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { AuthService } from '../../services/auth.service';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { FileService } from '../../services/file.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-share-dialog',
  imports: [MatFormFieldModule,MatInputModule,MatDialogModule,FormsModule,MatButtonModule],
  templateUrl: './share-dialog.component.html',
  styleUrl: './share-dialog.component.css'
})
export class ShareDialogComponent {
  email: string = '';

  constructor(
    private dialogRef: MatDialogRef<ShareDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { fileName: string },
    private auth: AuthService,
    private fileService:FileService
  ) {}

  sendEmail() {
    this.fileService.shareViaEmail(this.data?.fileName.replace(".pdf",''),this.email)
  }

  cancel() {
    this.dialogRef.close();
  }
}