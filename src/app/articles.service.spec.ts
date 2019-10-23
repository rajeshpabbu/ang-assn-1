import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { ArticlesService } from "./articles.service";
import { defer } from "rxjs";
import { Article } from "./article.model";

let httpClientSpy: { get: jasmine.Spy };
let articleService: ArticlesService;

describe("ArticlesService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
    articleService = new ArticlesService(<any>httpClientSpy);
  });

  it("should be created", () => {
    const service: ArticlesService = TestBed.get(ArticlesService);
    expect(service).toBeTruthy();
  });
  it("should return expected articles (HttpClient called once)", () => {
    const expectedArticles: Article[] = [
      { id: 1, category: "Health", content: "query" },
      { id: 2, category: "Education", content: "query123" }
    ];

    httpClientSpy.get.and.returnValue(asyncData(expectedArticles));

    articleService
      .getAllAtricles()
      .subscribe(
        heroes => expect(heroes).toEqual(expectedArticles, "expected heroes"),
        fail
      );
    expect(httpClientSpy.get.calls.count()).toBe(1, "one call");
  });

  function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
  }
});
