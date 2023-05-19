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



const db = client.db('kwfCRUD');

async function insereElemento() {
    
    //Collection
    const corredores = db.collection("kwf");
    
    //Document
    const documents = [
      {nome:"Paulo", numero: 44, posicao: 45,  categoria: "piloto f1"},
      {nome:"Perpepole", numero: "12", posicao: 8,  categoria: "piloto f1"},
      {nome:"Corredor fantasma", numero: 5, posicao: 23,  categoria: "piloto f1"}
    ]
    //Incerindo
    const result = await corredores.insertMany(documents);

    let ids = result.insertedIds;
    
    for (let id of Object.values(ids)) {
      console.log(`O corredor inserido tem o id: ${id}`)
    }
}

async function listarCorredores() {
  const corredores = await db.collection('kwf').find();
  for await (let corredor of corredores){
          console.log(corredor);
  }  
}

async function editarValor() {
  const corredores =  db.collection("kwf");
  const filtro = { nome :"Theaga"};
  const update = {"$set":{numero: 44}};
  await corredores.updateOne(filtro, update);
  listarCorredores();
  
}

async function deletar() {
  const corredores = db.collection("kwf");
  const corredor = await corredores.findOne({nome: "Luis"});
  corredores.deleteOne(corredor);
  listarCorredores();
}

listarCorredores();