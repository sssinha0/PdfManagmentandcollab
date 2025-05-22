import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatList, MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule,FormsModule,MatFormFieldModule,MatInputModule,MatListModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  files: any[] = [];
  filteredFiles: any[] = [];
  selectedPDF: any = null;
  searchTerm = '';

  constructor(
    // private fileService: FileService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.auth.getUserId().subscribe(uid => {
    //   if (uid) {
    //     this.fileService.listUserFiles(uid).subscribe((files: any) => {
    //       this.files = files;
    //       this.filteredFiles = files;
    //     });
    //   }
    // });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    // if (file) {
    //   this.fileService.uploadPDF(file)?.subscribe(() => {
    //     window.location.reload();
    //   });
    // }
  }

  previewPDF(file: any) {
    this.selectedPDF = file;
  }

  sharePDF(fileId: string) {
    // this.fileService.generateShareLink(fileId).subscribe((res: any) => {
    //   navigator.clipboard.writeText(res.link);
    //   alert('Shareable link copied to clipboard!');
    // });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  ngOnChanges(): void {
    this.filteredFiles = this.files.filter(f => f.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
}

// import { Pipe, PipeTransform } from '@angular/core';
// import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

// @Pipe({ name: 'safeUrl' })
// export class SafeUrlPipe implements PipeTransform {
//   constructor(private sanitizer: DomSanitizer) {}
//   transform(url: string): SafeResourceUrl {
//     return this.sanitizer.bypassSecurityTrustResourceUrl(url);
//   }
// }