import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { PostService } from "./post.service";

@Injectable({ providedIn: 'root'})

export class backEndService {

    constructor(private postService: PostService){

    }
    //Save
    saveData(){
        //step1 get list of post.service
        const listOfPosts : Post[] = this.postService.getPosts()

        //step2 
        
    }

    //fetch

}