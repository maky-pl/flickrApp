# Search Flickr App

This is a simple app that use free Flickr API to search images by tags and display on the page.

Clone repo and your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

Go to: [https://www.flickr.com/services/api/](https://www.flickr.com/services/api/) to register your API key. Update App.js - line 9 with your API key.

```sh
apiKey: "c2ec20695", // update with your API key
```

In the project directory, you can run:

```sh
npm start
```

This will run the app in the development mode.
Go to: [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

App will display 20 photos for "rock concert" tag as a default state. You can use input box to search for different tags. Use "Load more phootos" button at the bottom of the page to load next 20 photos.

### Todos

- move search box to new component
- fix validation for search box after editing tags
- update header with react-helmet (Meta Tag Management)
- add real name from Flickr
- rwd updates


![picture](http://sellit.ie/flickrapp.png)

## License

MIT
