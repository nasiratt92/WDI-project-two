const express = require('express');
const app = express();
const { port } = require('./config/environment');





app.listen(port, () => console.log(`Express is listening on port ${port}`));
