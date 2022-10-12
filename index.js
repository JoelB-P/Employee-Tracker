var mysql = require('mysql');
var inquirer = require('inquirer');
var cTable = require('console.table');


const PORT = process.env.PORT || 3001;



connection.connect((err) => {
    if (err) throw err;
  
    runSearch();
  });
  
  
  function runSearch() {
  inquirer
    .prompt({
      name: "selection",
      type: "list",
      message: "What would you like to do?",
      choices: 
        [
            "View All The Employees",
            "View Department",
            "View role", 
            "Add Employee",
            "Add Department",
            "Add Role", 
            "Update Role",
        ]
    })
    .then(function(answer) {
        console.log(answer);
      
      if (answer.selection === "View All The Employees") {
        viewAll();
      }
      else if(answer.selection === "View Department") {
        viewDepts();
  
      } 
      else if(answer.selection === "View role") {
        viewrole();
  
      }
      else if(answer.selection === "Add Employee") {
        addEmployee();
  
      }
      else if(answer.selection === "Add Department") {
        addDept();
  
      }
      else if(answer.selection === "Add Role") {
        addRole();
  
      }
      else if(answer.selection === "Update Role") {
        updateRole();
  
      }else{
        connection.end();
      }
    });
  }

const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'Cloud!1109',
    database: 'courses_db'
  },
  console.log(`Connected to the courses_db database.`)
);



db.query(`DELETE FROM course_names WHERE id = ?`, 3, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

// Query database
db.query('SELECT * FROM course_names', function (err, results) {
  console.log(results);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
