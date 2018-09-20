import { Celebrity } from './../../../shared/models/celebritie.model';
import { CelebritiesService } from './../../../shared/services/celebrities.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-celebrities-form',
  templateUrl: './celebrities-form.component.html',
  styleUrls: ['./celebrities-form.component.css']
})
export class CelebritiesFormComponent implements OnInit {
  celebrity: Celebrity;

  constructor(
    private celebritiesService: CelebritiesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.celebrity = new Celebrity();
  }

  onSubmit() {
    this.celebritiesService.createCelebrity(this.celebrity).subscribe(newCeleb => {
      return newCeleb
    }) 

  }

}
