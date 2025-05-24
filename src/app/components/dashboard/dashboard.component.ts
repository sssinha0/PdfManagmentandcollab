import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FileService } from '../../services/file.service';
import { SafeUrlPipe } from "../../safe-url.pipe";

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule, FormsModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatListModule, CommonModule, SafeUrlPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  files: any[] = [];
  filteredFiles: any[] = [];
  selectedPDF: any = null;
  searchTerm = '';

  constructor(
    private fileService: FileService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((res:any)=>{
      console.log(res);
    })
    this.fileService.listUserFiles(localStorage.getItem("userId") ?? '').subscribe((files: any) => {
      this.files = files;
      this.filteredFiles = files;
    });

  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.fileService.uploadPDF(file)?.subscribe(() => {
        window.location.reload();
      });
    }
  }

  previewPDF(file: any) {
    this.selectedPDF = {
      url: `http://localhost:3000/api/files/view/${file.name}`
    };
  }

  sharePDF(fileId: string) {
    this.fileService.generateShareLink(fileId).subscribe((res: any) => {
      navigator.clipboard.writeText(res.link);
      alert('Shareable link copied to clipboard!');
    });
  }
  detailsView(fileId: any) {
    this.router.navigate(['shared', fileId.name.replace(".pdf", '')])
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
  filterFiles(): void {
    this.filteredFiles = this.files.filter(f => f.name.toLowerCase().includes(this.searchTerm.toLowerCase()));

  }
  ngOnChanges(): void {
    this.filteredFiles = this.files.filter(f => f.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
}