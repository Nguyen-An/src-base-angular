import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  standalone: true,
  host: {
    '[class.page-header]': 'true'
  },
  imports: [RouterModule, CommonModule]
})
export class PageHeaderComponent implements OnInit {
  @Input() breadcrumbs: Breadcrumb[] = [];
  @Input() showTitle: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
