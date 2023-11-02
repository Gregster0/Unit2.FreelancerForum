console.log(`Testing, Testing 1,2,3`);

const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

  // Create a function to find the average price and implement that into your webpage
  const avPrice = () => {
    sum = 0;
    divider = 0;
    freelancers.forEach((freelancer) => {
        sum += freelancer.price;
        divider++
    })
    return sum / divider;
  }

  // Create element variables
  const body = document.querySelector("body");
  const title = document.createElement("h1");
  const avgPrice = document.createElement("h2");
  const tblTitle = document.createElement("h1");
  const freetable = document.createElement("table");
  const tablehead = document.createElement("tr");
  const tableName = document.createElement("th");
  const tableOcc = document.createElement("th");
  const tablePric = document.createElement("th");

  // Use DOM methods to create the webpage
  body.append(title, avgPrice, tblTitle, freetable);
  freetable.append(tablehead);
  tablehead.append(tableName, tableOcc, tablePric)


  title.textContent = "Freelancer Forum";
  avgPrice.textContent = `The average starting price is $${avPrice()}`;
  tblTitle.textContent = "Available Freelancers";
  tableName.textContent = "Name";
  tableOcc.textContent = "Occupation";
  tablePric.textContent = "Price";

  // Populate a table with information from the freelancers array
    freelancers.forEach((freelancer) => {
    const row = document.createElement("tr");
    const name = document.createElement("td");
    const occ = document.createElement("td");
    const price = document.createElement("td");

    name.textContent = freelancer.name;
    occ.textContent = freelancer.occupation;
    price.textContent = freelancer.price;
    row.append(name, occ, price);
    freetable.append(row);
  })