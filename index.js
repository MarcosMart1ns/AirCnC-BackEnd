const express = require ('express');
const routes = require ('./routes');
const db = require('mongoose');
const cors = require ('cors');
const path = require ('path');
const app = express();

db.connect('mongodb://martinez90:arsenal01@omni-shard-00-00-zrpy5.mongodb.net:27017,omni-shard-00-01-zrpy5.mongodb.net:27017,omni-shard-00-02-zrpy5.mongodb.net:27017/test?ssl=true&replicaSet=Omni-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.use(cors())
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'uploads')));
app.use(routes);

app.listen(3636);