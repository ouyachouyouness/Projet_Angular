import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { PostService } from "./post.service";

//data base path
//https://live-posts-4a2f7-default-rtdb.firebaseio.com/

@Injectable({ providedIn: 'root'})

export class backEndService {

    constructor(private postService: PostService, private http: HttpClient){

    }
    //Save
    saveData(){
        //step1 get list of post.service
        const listOfPosts : Post[] = this.postService.getPosts()

        //step2 
        this.http.put('https://live-posts-4a2f7-default-rtdb.firebaseio.com/posts.json', listOfPosts)

    }

    //fetch

}