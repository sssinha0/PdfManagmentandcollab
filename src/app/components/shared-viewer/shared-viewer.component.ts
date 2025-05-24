import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SafeUrlPipe } from "../../safe-url.pipe";
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-shared-viewer',
  imports: [MatCardModule, MatFormFieldModule, MatButtonModule, MatInputModule, FormsModule, SafeUrlPipe, CommonModule],
  templateUrl: './shared-viewer.component.html',
  styleUrl: './shared-viewer.component.css'
})
export class SharedViewerComponent {
  file: any = null;
  comments: any[] = [];
  newComment = '';
  name: string = ''
  rootComments: any[] = []; // parent_id === null
  replyTo: number | null = null;
  replyText: string = '';
  fileName:string=''
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.fileName = id ||'';
    this.file = {
      url: `http://localhost:3000/api/files/view/${id}.pdf`,
      name: id + '.pdf'
    };
    this.loadComments(id!);
  }

  loadComments(id: string) {
    this.http.get(`http://localhost:3000/api/files/${id}/comments`).subscribe((data: any) => this.comments = data);
  }

  addComment() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.post(`http://localhost:3000/api/files/${id}/comments`, {
      author: this.name,
      text: this.newComment
    }).subscribe(() => {
      this.newComment = '';
      this.loadComments(id!);
    });
  }
  getReplies(parentId: number) {
    return this.comments.filter(c => c.parent_id === parentId);
  }

  startReply(commentId: number) {
    this.replyTo = commentId;
    this.replyText = '';
  }

  cancelReply() {
    this.replyTo = null;
    this.replyText = '';
  }

  submitReply(parentId: number) {
    // this.http.post(`/api/files/${this.fileName}/comments`, {
    //   author: this.name || 'Guest',
    //   text: this.replyText,
    //   parentId
    // }).subscribe(() => {
    //   this.cancelReply();
    //   this.loadComments(this.fileName);
    // });
  }
}
