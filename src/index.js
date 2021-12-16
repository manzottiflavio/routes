const express =require("express");
const app = express();
app.listen(5555);
app.use(express.json());





app.get("/curso", (request, response)=>{
const query=request.query
console.log(query)/*paginação e filtro*/
return response.json(["curso1"])
});

app.post("/curso", (request, response)=>{
const body=request.body
console.log(body)/*sempre usar body iserir usar(json)*/
return response.json(["curso1","curso2"])
});


app.put("/curso/:id", (request, response)=>{
    const params=request.params
    console.log(params)/*sempre usar params editar buscar e deletar*/
     return response.json(["curso1","curso3"])
});

app.patch("/curso/:id", (request, response)=>{
    const params=request.params
    console.log(params)/*sempre usar params editar buscar e deletar*/
    return response.json(["curso1","curso8"])
});

app.delete("/curso/:id", (request, response)=>{
    const params=request.params
    console.log(params)/* sempre usar parms*/
    return response.json(["curso1"])
})