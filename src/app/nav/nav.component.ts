import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  selectedClubName = 'Gilt Nightclub';
  clubs = [
    {id: 1, name: 'Tao Nightclub', avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'},
    {id: 2, name: 'Roku Bistro', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15'},
    {id: 3, name: 'Gilt Nightclub', avatar: './../assets/images/gilt_logo.svg'},
    {id: 4, name: 'Artisan Nightclub', avatar: './../assets/images/gilt_logo.svg'},
    {id: 5, name: 'Fremont Social Club', avatar: './../assets/images/gilt_logo.svg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
