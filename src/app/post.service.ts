import { Injectable } from "@angular/core";
import { Post } from "./post.model";


@Injectable({ providedIn: 'root' })
export class PostService {
    listOfPosts: Post[] = [
        new Post('Nature', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in nostrum animi accusantium fugit, porro facere maxime corporis doloremque vitae nulla quod optio quasi, voluptas cupiditate. Architecto dolorum magnam aliquid', 'https://france3-regions.francetvinfo.fr/image/p7I_vw3kQ2eUoJ-59wyFXHEGs1Q/1200x900/regions/2020/06/09/5edfa1437fe2a__g9b1055-4583991.jpg', 'ouyachou@gmail.com', new Date()),
        new Post('Desert', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in nostrum animi accusantium fugit, porro facere maxime corporis doloremque vitae nulla quod optio quasi, voluptas cupiditate. Architecto dolorum magnam aliquid', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Gobi_Desert_dunes.jpg/1200px-Gobi_Desert_dunes.jpg', 'oubaha@gmail.com', new Date()),
        new Post('Neige', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in nostrum animi accusantium fugit, porro facere maxime corporis doloremque vitae nulla quod optio quasi, voluptas cupiditate. Architecto dolorum magnam aliquid', 'https://cdn-s-www.ledauphine.com/images/C1EF4387-522E-4E63-8ECA-5D4831EDF703/NW_raw/la-neige-est-tombee-samedi-sur-la-capitale-photo-ludovic-marin-afp-1610864867.jpg', 'ouyachou@gmail.com', new Date())
    ];

    getPosts() {
        return this.listOfPosts;
    }

    deletePost(index: number) {
        this.listOfPosts.splice(index, 1)
    }

    addPost(post: Post) {

        this.listOfPosts.push(post)

    }

    updatePost(index: number, post: Post) {
        this.listOfPosts[index] = post;
    }
}