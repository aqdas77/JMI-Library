console.log('Welcome');

let data = localStorage.getItem('data');
let Bookobj;
if (data == null) {
  Bookobj = [];
}
else {
  Bookobj = JSON.parse(data);
}
let tbody = '';
Bookobj.forEach(function (element, index) {
  tbody += ` <tbody>
  <tr>
    
    <td>${element.bname}</td>
    <td>${element.aname}</td>
    <td>${element.type}</td>
    <td><div class="form-group row">
    <div class="col-sm-10">
      <button id="${index}" onclick="deletebook(this.id)"  class="btn btn-primary" >Delete</button>
    </div>
  </div></td>
    
  </tr>
  
</tbody>`

});


let tcontent = document.getElementById("tablebody");
tcontent.innerHTML = tbody;


let fsubmit = document.getElementById('libraryform');
fsubmit.addEventListener('submit', submit);

function submit(e) {
  let bname = document.getElementById("bookname").value;
  let aname = document.getElementById("author").value;
  let fiction = document.getElementById('fiction');
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");
  let type;
  if (fiction.checked) {
    type = fiction.value;
  }
  else if (programming.checked) {
    type = programming.value;
  }
  else if (cooking.checked) {
    type = cooking.value;
  }

  //Validating the input
  if (bname.length < 2 || aname.length < 2) {
    let alert = document.getElementById("message");
    alert.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Warning!</strong> Too short Book Name or Author Name.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`

    setTimeout(function () {
      alert.innerHTML = '';
    }, 1500);

    let freset = document.getElementById('libraryform');
    freset.reset();
  }


  else {

    let Book = new book(bname, aname, type);
    let data = localStorage.getItem('data');
    let Bookobj;
    if (data == null) {
      Bookobj = [];
    }
    else {
      Bookobj = JSON.parse(data);
    }
    Bookobj.push(Book);
    localStorage.setItem('data', JSON.stringify(Bookobj));
    let tbody = '';
    Bookobj.forEach(function (element, index) {
      tbody += ` <tbody>
      <tr>
        
        <td>${element.bname}</td>
        <td>${element.aname}</td>
        <td>${element.type}</td>
        <td><div class="form-group row">
        <div class="col-sm-10">
          <button id="${index}" onclick="deletebook(this.id)"  class="btn btn-primary" >Delete</button>
        </div>
      </div></td>
        
      </tr>
      
    </tbody>`

    });


    let tcontent = document.getElementById("tablebody");
    tcontent.innerHTML = tbody;

    let freset = document.getElementById('libraryform');
    freset.reset();
  }
  e.preventDefault();

}

//Creating a constructor
class book {
  constructor(bname, aname, type) {
    this.bname = bname;
    this.aname = aname;
    this.type = type;
  }

}

// Creating deletebook function
function deletebook(index) {
  let data = localStorage.getItem('data');
  let Bookobj;
  if (data == null) {
    Bookobj = [];
  }
  else {
    Bookobj = JSON.parse(data);
  }

  Bookobj.splice(index, 1);
  localStorage.setItem('data', JSON.stringify(Bookobj));
  let tbody = '';
  if (Bookobj == null) {
    tbody = null;
  }
  else {
    Bookobj.forEach(function (element, index) {
      tbody += ` <tbody>
          <tr>
            
            <td>${element.bname}</td>
            <td>${element.aname}</td>
            <td>${element.type}</td>
            <td><div class="form-group row">
            <div class="col-sm-10">
              <button id="${index}" onclick="deletebook(this.id)"  class="btn btn-primary" >Delete</button>
            </div>
          </div></td>
            
          </tr>
          
         </tbody>`

    });

    let tcontent = document.getElementById("tablebody");
    tcontent.innerHTML = tbody;

  }

}