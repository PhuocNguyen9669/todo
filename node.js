var jobs = [
    {
        "Name": "Huda",
        "Price": 11000,
        "Date" : "2020-2-20"
    },
    {
        "Name": "Tiger",
        "Price": 13000,
        "Date" : "2022-2-30"

    },
]
function render() {
  let tbody =  document.querySelector('.table>tbody');
//   let hmtls = [];
//   for (let index = 0; index < jobs.length; index++) {
//       let element =
//       `
//       <tr>
//           <td>${jobs[index].Name}</td>
//           <td>${jobs[index].Price}</td>
//           <td>
//               <a href="#" onclick="doneJob()">Done</a>
//               <a href="#" onclick="removeJob()">Remove</a>
//           </td>
//       </tr>
//       `
//       hmtls.push(element);
//   }

//   tbody.innerHTML = hmtls.join("");
  tbody.innerHTML =  jobs.map(function(job, index) {
      return `
      <tr>
          <td id="idName${index}">${job.Name}</td>
          <td id="idPrice${index}">${job.Price}</td>
          <td id="idDate${index}">${job.Date}</td>

          <td>
              <a href="#" onclick="doneJob(${index})">Done</a>
              <a href="#" onclick="removeProducts(${index})">Remove</a>
          </td>
      </tr>
      `
  }
  
  ).join("");
}
render();
function creatJob () {
    let product = document.querySelector('#product').value;
    let price = document.querySelector('#Price').value;
    let date = document.querySelector('#date').value; 
    jobs.unshift({Name: product, Price: price, Date: date.split("-").reverse().join("-")});
    
    render();
}
function removeProducts (index) {
    jobs.splice(index,1);
    render();
}
function doneJob(index) {
    document.querySelector(`#idName${index}`).style.textDecoration = "line-through";
    document.querySelector(`#idPrice${index}`).style.textDecoration = "line-through";
    document.querySelector(`#idDate${index}`).style.textDecoration = "line-through";
    
}