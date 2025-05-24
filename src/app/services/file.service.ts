import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FileService {
  private baseUrl = 'http://localhost:3000/api/files';

  constructor(private http: HttpClient, private auth: AuthService) {}

  uploadPDF(file: File) {
    const formData = new FormData();
    formData.append('pdf', file);

    return this.auth.getToken() ? this.http.post(`${this.baseUrl}/upload`, formData, {
      headers: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    }) : null;
  }

  listUserFiles(userId: string) {
    return this.http.get(`${this.baseUrl}/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });
  }

  generateShareLink(fileId: string) {
    return this.http.get(`${this.baseUrl}/${fileId}/share`, {
      headers: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });
  }
  shareViaEmail(fileId:string,email:string){
    return this.http.post(`${this.baseUrl}/${fileId}/share/email`, { "email":email },{
      headers: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
  });
  }
}
