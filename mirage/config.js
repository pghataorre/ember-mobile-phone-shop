export default function() {

    this.get('products', () => {
      return {
          "data" :[
            {
              "type": "product",
              "id": "1",
              "attributes": {
                "prod-title": "Iphone X",
                "desc": "This phone is pants Avoid",
                "price": "2.99",
                "prod-image": "http://via.placeholder.com/150x150"
              }
            },
            {
              "type": "product",
              "id": "2",
              "attributes" : {
                "prod-title": "Samsung 8+",
                "desc": "Samsung Phone is quick",
                "price": "300",
                "prod-image": "http://via.placeholder.com/150x150"
              }
            },
            {
              "id": "3",
              "type": "product",
              "attributes": {
                "prod-title": "HTC 9",
                "desc": "The HTC BEST",
                "price": "900",
                "prod-image": "http://via.placeholder.com/150x150"
              }
            },
            {
              "id": "4",
              "type": "product",
              "attributes": {
                "prod-title": "Nokia - 11",
                "desc": "The new thing",
                "price": "700",
                "prod-image": "http://via.placeholder.com/150x150"
              }
            },
            {
              "id": "5",
              "type": "product",
              "attributes": {
                "prod-title": "Xiomi Redmi 4",
                "desc": "Super quick super flat",
                "price": "500",
                "prod-image": "http://via.placeholder.com/150x150"
              }
            },
            {
              "id": "6",
              "type": "product",
              "attributes": {
                "prod-title": "Huawei Mate 10",
                "desc": "Nice phone to get",
                "price": "450",
                "prod-image": "http://via.placeholder.com/150x150"
              }
            }
          ]
        }
    });
  
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
