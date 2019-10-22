import { Component, OnInit } from "@angular/core";
import { ArticlesService } from "./articles.service";
import { Article } from "./article.model";
import { map } from "rxjs/operators";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  allArticles: Article[];
  allCats = [];
  filteredArticles: Article[];
  selectedCategory: string;

  constructor(private artService: ArticlesService) {}

  ngOnInit() {
    this.artService
      .getAllAtricles()
      .pipe(
        map(articles => {
          const categories = this.filterUniqueCats(articles);
          return { data: articles, categories: categories };
        })
      )
      .subscribe(articles => {
        this.allArticles = articles.data;
        this.allCats = articles.categories;
      });
  }

  filterUniqueCats(data: Article[]) {
    let catList = [];
    data.forEach(function(article: Article) {
      if (catList.indexOf(article.category) == -1) {
        catList.push(article.category);
      }
    });

    return catList;
  }

  updateContent(category: string) {
    this.selectedCategory = category;

    this.filteredArticles = this.allArticles.filter(
      article => article.category === category
    );

    console.log(this.filteredArticles);
  }
}
