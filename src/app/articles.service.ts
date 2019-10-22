import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Article } from "./article.model";

@Injectable({
  providedIn: "root"
})
export class ArticlesService {
  baseUrl = "https://my-json-server.typicode.com/rajeshpabbu/ang-assn-1";

  constructor(private http: HttpClient) {}

  getAllAtricles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.baseUrl + "/articles");
  }
}
