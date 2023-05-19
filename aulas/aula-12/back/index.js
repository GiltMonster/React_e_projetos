const { MongoClient, ServerApiVersion, Collection } = require('mongodb');
const uri = "mongodb+srv://lucasscampos:van123456@aula-12.ldqixmx.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

const db = client.db('Pizzaria');

async function insereElemento() {
    
    //Collection
    const pizzas = db.collection("Pizzas");
    
    //Document
    const pizza = {nome:"4 queijo", qtdPedacos: "8"}

    //Incerindo
    const result = await pizzas.insertOne(pizza);

    console.log(`A pizza inserida foi a:${result.nome}`)
}

async function incereNelemento() {
        //Collection
        const pizzas = db.collection("Pizzas");
    
        //Document
        const documents = [
                        {nome:"Vulcão", qtdPedacos: "8"},
                        {nome:"Baina", qtdPedacos: "8"},
                        {nome:"Escarola", qtdPedacos: "8"},
                        {nome:"haviana", qtdPedacos: "8"},
                        {nome:"Americana", qtdPedacos: "8"},
                        {nome:"Batata", qtdPedacos: "8"},
                    ]
        //Incerindo
        const result = await pizzas.insertMany(documents);
        let ids = result.insertedIds;
        for (let id of Object.values(ids)) {
            console.log(`A pizza foi cadastrata ${id}`)
        }
        
}

async function listarPizzas() {
    const pizzas = await db.collection('Pizzas').find();
    for await (let pizza of pizzas){
            console.log(pizza);
    }
    
}

async function editarValor() {
    const pizzas =  db.collection("Pizzas");
    const filtro = { nome :"Escarola"};
    const update = {"$set":{qtdPedacos : 12}};
    await pizzas.updateOne(filtro, update);
    listarPizzas();
    
}

async function deletar() {
    const pizzas = db.collection("Pizzas");
    const pizza = await pizzas.findOne({nome: "4 queijo"});
    pizzas.deleteOne(pizza);
    listarPizzas();
}

deletar();