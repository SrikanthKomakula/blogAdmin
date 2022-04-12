import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  errMessage :string;
  loading = false;
  imageSrc: string = '';
  addPostSubmitted: boolean = false;

  addPostForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl(''),
    user_id: new FormControl('')
  });

  constructor(private postSerive: PostService, private tokenStrorageService: TokenStorageService) { }

  ngOnInit(): void {
  }

  get f(){
    return this.addPostForm.controls;
  }

  onFileChange(event: any){
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
        this.addPostForm.patchValue({
          fileSource: reader.result
        });
      };
    }
  }


  submitPostForm(){
    this.addPostSubmitted = true;
    console.log(this.addPostForm);

    if(this.addPostForm.invalid){
      return;
    }
     const user_id = this.tokenStrorageService.getUser().id;
     this.addPostForm.patchValue({user_id: user_id});
     this.postSerive.addPost(this.addPostForm.value)
       .subscribe(data => {



         console.log('output' + data);
       });
   }
}
