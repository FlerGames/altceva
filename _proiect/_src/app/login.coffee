app = require("./index")


app.get app.pages.index.href, (page, model, params, next) ->
  
  page.render app.pages.index.view