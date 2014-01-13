app = require("./index")


app.pages = 
  index:
    title: "iForms.me"
    href: "/"
    view: "login"
  
  new_form:
    href: "/create/form"
    
  create_form:
    title: "Create Form"
    href: "/create/form/:id"
    view: "create_form"

console.log "12312312312312312312333333333333333333333333333333sdf333333333333333333333333"

app.view.fn 'pageTitle', (current) ->
  return app.pages[current]?.title || "iForms"