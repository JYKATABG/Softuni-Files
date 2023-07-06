import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute) {
    console.log('snapshot data', this.activeRoute.snapshot.data);

    this.activeRoute.params.subscribe((data) => {
      console.log(`params.subscribe: ${data}`);
    });
  }

  ngOnInit(): void {}
}
