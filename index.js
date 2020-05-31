var mysql = require("mysql");
var inquirer = require("inquirer");

require("console.table");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "password",
  database: "bamazon_db"
});

  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
    }
    loadProducts();
  });


  function loadProducts() {
    connection.query(
        "SELECT * FROM PRODUCTS", function (err, response) {
            if (err) throw err;
            console.table(response);
        start(response);    
        } 
    )};

    function start(products){
      inquirer
      .prompt([
        {
        name: "id",
        type: "list",
        message: "What is the ID of the product you are looking to buy?",
        choices: ["shirt", "pants", "shoes"]
        },
        {
          name: "quantity",
          type: "input",
          message: "How many units of the product would you like to buy?",
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        },

      ])
      .then (function(answers){
        
      })
    }