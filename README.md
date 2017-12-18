Introduction to cross platform native mobile app using React Native
===

##### Creating Books React Native Project

    Objectives:
    [X] 1. Create a React-Native Project using create-react-native-app tool
    [X] 2. Create a static View for a List of Books.
    [ ] 3. Create a method to Get List of Books via REST.
    [ ] 4. Create a method to Create a Book via REST.
    [ ] 5. Create a method to Edit a Book via REST.
    [ ] 6. Create a method to Delete a Book via REST.
    [ ] ... Do 1 to 6 First ...


Part II
---

###### I. Create a static View for a List of Books.
    #Use Data Schema at
    https://fakerestapi.azurewebsites.net/swagger/ui/index#/Books

```javascript
  // Schema
  Book {
    ID (integer, optional),
    Title (string, optional),
    Description (string, optional),
    PageCount (integer, optional),
    Excerpt (string, optional),
    PublishDate (string, optional)
  }

  // JSON
  [
    {
    "ID": 0,
    "Title": "React Native in Action",
    "Description": "From Beginner to Ninja",
    "PageCount": 0,
    "Excerpt": "string",
    "PublishDate": "2017-12-18T07:02:00.802Z"
    }
  ]
```
