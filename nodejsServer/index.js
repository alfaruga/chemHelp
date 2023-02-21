const app = require('./app')
const config = require('./utils/config')
const cors = require('cors')
const logger= require('./utils/logger')


app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
