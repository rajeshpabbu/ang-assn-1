import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  @Input() categories;
  @Output() catSelected = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}
}
