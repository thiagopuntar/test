const app = require("./server");
const { PORT = 3000 } = process.env;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
