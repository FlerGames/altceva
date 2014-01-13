app = require("derby").createApp(module)
  .use(require("derby-ui-boot"))
  .use(require("../../ui"))
  .use(require("derby-auth/components/index.coffee"))
  
  
require "./pages"

require "./login"
require "./forms"

console.log app.pages


#app.get "/", (page, model) ->
#  $user = model.at "auths.#{model.get("_session.userId")}"
#  $user.subscribe (err) ->
#    throw err if err
#    model.ref "_page.user", $user
#    page.render()
    
    