const express = require("express");
const app = express();
const port = 4000;
const rectangle = require("../my_modules/rectangle");
string = "Area of rectangle (2, 4) is: " + rectangle.area (2, 4) + "\n";

app.get("/", (req, res) => {
res.write("Rectangle Math\n");
res.write(string);
res.write("Perimeter of rectangle (2, 4) is: " +
rectangle.perimeter (2, 4) + "\n")
res.end();
});
app.listen(port, () => {
console.log(`Example app listening on port ${port}!`);
});