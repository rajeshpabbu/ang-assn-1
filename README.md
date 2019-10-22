# Assignment

Create a news website using a mock web service.

You can use an online json server (https://my-json-server.typicode.com/) for creating the mock web service

You would be consuming a single mock web service to get a list of all articles.
The json structure of the list of articles would be like below,

```
[
 {
   "id": 1,
   "category": "sports",
   “content”: "Lorem ipsum lorem ipsum"
 },
 {
   "id": 1,
   "category": "health",
   "content": "Lorem ipsum lorem ipsum"
 },
 ..
]
```

Create a landing page with left nav bar and right content panel.
You may use any css libraries for styling if you wish to, but the criteria for evaluation would be mainly Angular code quality.

1. Left side panel should list all categories of news as available from the list of articles from service. (The category property in the json)
2. When clicking on any category on left side nav panel, the right side panel should show the content of the filtered articles. (The content property in the json)

**The project should be structured so that you have**

1. Parent app-component which is the main landing page with following two components
2. Nav-component which lists the different categories
3. Content-component which lists the articles under any selected category.
4. Create Article type so as to define the json structure being used.
5. There should be a service which consumes the mock web service and returns a list of Articles as an Observable<Article[]>
6. The service is consumed from app-component only

**References**
[https://stackblitz.com/edit/ang-assn-1](https://stackblitz.com/edit/ang-assn-1)
[https://ang-assn-1.stackblitz.io/️](https://ang-assn-1.stackblitz.io/)
