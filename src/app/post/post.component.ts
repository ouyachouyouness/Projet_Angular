import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from '../post.model'
import { PostService } from '../post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {



  @Input() post?: Post;
  @Input() index: number = 0;
  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {

    });
    console.log(this.post);

  }
  onDelete() {
    console.log("called onDelete()");



    this.postService.deletePost(this.index);

  }

  onEdit() {
    console.log("OnEdit called");
    this.router.navigate(['/post-edit', this.index])

  }

}
