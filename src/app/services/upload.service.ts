import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private baseUrl = 'http://13.61.188.131:3000/api/files';

  constructor(private http: HttpClient) {}

  // uploadPDF(file: File, userId: string) {
  //   return this.auth.getIdToken().pipe(
  //     switchMap(token => {
  //       const formData = new FormData();
  //       formData.append('pdf', file);
  //       formData.append('userId', userId);
  //       return this.http.post(`${this.baseUrl}/upload`, formData, {
  //         headers: {
  //           Authorization: `Bearer ${token}`
  //         }
  //       });
  //     })
  //   );
  // }
  // onFileSelected(event: any) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     this.uploadService.uploadPDF(file, this.userId).subscribe(response => {
  //       console.log('Upload success', response);
  //     });
  //   }
  // }
}
