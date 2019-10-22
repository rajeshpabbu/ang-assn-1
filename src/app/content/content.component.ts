import { Component, Input } from "@angular/core";
import { Article } from "./../article.model";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
})
export class ContentComponent {
  @Input() articles: Article[];
  @Input() category: string;
}
