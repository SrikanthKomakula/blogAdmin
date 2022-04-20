import { AfterViewInit, Component, OnInit } from '@angular/core';
import { data, map } from 'jquery';
import { pipe } from 'rxjs';
import { PostService } from 'src/app/services/post.service';

declare const $:any;

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {


  li: any;
  posts: [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getAllPosts().pipe(

    ).
    subscribe((data) => {
      this.li = data;
      this.posts =  this.li.posts;
    //alert(this.posts);
      console.log(data);
    });



  }




  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    $('#example').DataTable();
  }
}
