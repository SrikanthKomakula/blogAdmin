import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl= environment.apiUrl;
  constructor(private apiSerivce: ApiService) { }

  addPost(post:any){

    let finalObjPost = {
      'title' : post.title,
      'description' : post.description,
      'mainImage' : post.file,
      'imgUrl' : post.fileSource,
      'user_id' : post.user_id,
      'category_id' : 1
    }
    return this.apiSerivce.post(this.apiUrl+ '/post', finalObjPost);
  }
  getAllPosts(){
    return this.apiSerivce.get(this.apiUrl+ '/post');
  }

}
