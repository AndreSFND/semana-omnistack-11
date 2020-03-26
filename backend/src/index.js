const express = require('express');
const cors    = require('cors');
const routes  = require('./routes');

const app = express();

const corsOptions = {
    exposedHeaders: 'x-total-count',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

//Query params: ?id=2 - filtros, paginação                          - request.query
//Route params: /users/2 - identificar recursos                     - request.params /users/:id
//Request body: corpo da requisição; criar ou alterar recursos      - request.body

app.listen(3333);