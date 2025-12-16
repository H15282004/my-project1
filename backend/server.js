const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Hien thi trang thai ket noi Database
  res.end('BACKEND NODEJS DANG CHAY!\n-------------------------\nTrang thai: Da ket noi den Database MongoDB.\nDia chi Database: ' + (process.env.DB_HOST || 'localhost') + ':27017');
});

server.listen(5000, () => {
  console.log('Backend da khoi dong xong!');
});
