// here we're importing your express app
const server = require('./app');

const PORT = process.env.PORT || 3000

// We're telling the app to listen for network requests on port 3000
server.listen(PORT, function() {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
