# quote-api

We are live on 8000 - http://localhost:8000

---
### Install && Experiment

```shell
# install
npm install

# experiment
npm run dev
```

---
### Methods
```python
'/quote':

  .GET: # Returns all quotes

  .POST: # Create a quote

    parameters:

      text: String,
      author: String

'/quote/:unique identifier'

  .GET: # Return a specific quote

  .PUT: # Update a quotes information

    parameters:

      text: String,
      author: String

  .DELETE: # Delete a quote
```
