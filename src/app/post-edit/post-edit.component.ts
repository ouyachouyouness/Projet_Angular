import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  form!: FormGroup;
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.maxLength(10)]),
      description: new FormControl(null, [Validators.required]),
      imagePath: new FormControl(null, [Validators.required]),

    })
  }
  onSubmit() {
    const title = this.form.value.title;
    const description = this.form.value.description;
    const imagePath = this.form.value.imagePath;

    console.log(description);


    const post: Post = new Post(title,
      description,
      imagePath,
      "ouyachouyouness@gmail.com",
      new Date()
    );

    //calling service
    this.postService.addPost(post)

    //Navigate to post-list
    this.router.navigate(["/post-list"])

  }

}
