import { createServer } from "http";

// import prompt from "prompt";
const PORT = process.env.PORT;

const users = [
  { id: 1, name: "john doe" },
  { id: 2, name: "john oe" },
  { id: 3, name: "hono d" },
];

// logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// JSON meddleWare

const jsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

// route handleer for /api/users
const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

//route handler for GET /api/user/id
const getIdHandler = (req, res) => {
  const id = req.url.split("/")[3];
  const user = users.find((user) => user.id === parseInt(id));

  if (user) {
    console.log("id: ", id);
    res.write(JSON.stringify(user));
  }
  if (!users.id) {
    // let addData = alert('enter your name')
    users[users.length] = { id: users.length + 1, name: "akram" };
    console.log(users);
  }
  // if(){

  // }
  else {
    res.statusCode = 404;
    res.write(JSON.stringify({ messege: "User not found" }));
  }

  res.end();
};

// not found handler
//

const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ messege: "User not found" }));
  res.end();
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        getUsersHandler(req, res);
      } else if (
        req.url.match(/\/api\/users\/([0-9]+)/) &&
        req.method === "GET"
      ) {
        getIdHandler(req, res);
      } else if (req.url === "/api/add-user" && req.method === "POST") {
        let body = "";

        req.on("data", (chunk) => {
          body += chunk.toString();
          console.log("chunk", chunk.toString());
          console.log("body", body);
        });

        // Process once data collection is complete
        req.on("end", () => {
          try {
            let parsedBody = JSON.parse(body); // Parse JSON body
            console.log("Request Body:", parsedBody);
            let { name } = parsedBody;

            if (!users.some((user) => user.name === name)) {
              // let addData = alert('enter your name')
              users[users.length] = { id: users.length + 1, name: name };
              console.log(users, "matching");
            } else {
              console.log("alredy exists you cant add same names");
              console.log(users, "matching");
            }

            // if(){
            //   // let addData = alert('enter your name')
            //   // users[users.length] = {id:users.length + 1 , name:name}
            //    console.log("alredy exists")
            // }
          } catch (error) {
            console.error("Error parsing JSON:", error);
          }
          res.statusCode = 200;
          res.end("Request logged");
        });
      } else if (req.url === "/api/update-user" && req.method === "PUT") {
        let body = "";

        req.on("data", (chunk) => {
          body += chunk.toString();
        });

        req.on("end", () => {
          try {
            // json.pase(body) it convert the string to object
            let parsedBody = JSON.parse(body);
            console.log("parsedBOdy = > ", parsedBody , users);

            let { id, name } = parsedBody;
            let userFound = false;

            for (let i = 0; i < users.length; i++) {
              if (users[i].id === id) {
                users[i].name = name;
                userFound = true;
                console.log("users = > ",users)
                break;

                // console.log("succesfuly loged",users)
              }
            }

            if (userFound) {
              res.statusCode = 200;
              res.end(
                JSON.stringify({ message: "succesfully updated", users })
              );

              // console.log("userFound => ", userFound);
              // console.log("users => ", users);
            } else {
              res.statusCode = 404;
              res.end(JSON.stringify({ message: "user not found" }));
              // console.log("user not found")
            }
          } catch (error) {
            console.error("error pasring json: ", error);
            res.statusCode = 400;
            res.end(JSON.stringify({ message: "invalid json file " }));
          }
        });
      } else if (req.url === "/api/delete-user" && req.method === "DELETE") {
      } else {
        notFoundHandler(req, res);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server is running at Port: ${PORT}`);
});
