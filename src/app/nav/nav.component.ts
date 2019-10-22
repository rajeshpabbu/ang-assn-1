import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent {
  @Input() categories: string[];
  @Output() catSelected = new EventEmitter<string>();
  selectedCat: string;

  selectCat(cat: string) {
    this.selectedCat = cat;
    this.catSelected.emit(this.selectedCat);
  }
}
