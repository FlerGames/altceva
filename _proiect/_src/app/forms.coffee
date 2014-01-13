app = require("./index")


app.get "/forms", (page, model, params, next) ->
    
    page.render "index"