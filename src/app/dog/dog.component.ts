import { DogService } from './../shared/dog.service';
import { Component, OnInit } from '@angular/core';
import { Dog } from './../shared/dog';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})

export class DogComponent implements OnInit {

  dog: Dog = new Dog();
  isVideo: boolean = false;
  isFoto: boolean = false;

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.getDog();
  }

  getDog(): void {
    this.isVideo = false;
    this.isFoto = false;

    this.dogService.getDog()
       .subscribe((dog) => {
        this.dog = dog;
        var isVideo = this.dog.url?.includes(".mp4");

        if(isVideo)
        {
          this.isVideo = true;
          this.isFoto = false;
        }
        else
        {
          this.isVideo = false;
          this.isFoto = true;
        }

       });
  }
}
