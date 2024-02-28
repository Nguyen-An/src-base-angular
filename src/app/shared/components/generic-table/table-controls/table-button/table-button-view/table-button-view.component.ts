import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-button-view',
  templateUrl: './table-button-view.component.html',
  styleUrls: ['./table-button-view.component.scss']
})
export class TableButtonViewComponent implements OnInit {
  @Output() onClick = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

}
