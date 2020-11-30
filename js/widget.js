
// alert banner

const alertBanner = document.getElementById("alert");
// create the html for the banner
alertBanner.innerHTML =
`
<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>
`
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none"
    }
});

// Line Graph

let trafficCanvas = document.getElementById("traffic-chart");

let trafficData = {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3","4-10", "11-17", "18-24", "25-31", "32-38"],
        datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 2000, 2500, 3000],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficMonthly = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June,", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
        datasets: [{
        data: [250, 5350, 2300, 1000, 1500, 1750, 1250, 1850, 2250, 2000, 2500, 3000]
    }]
};

document.querySelector('#btn4').addEventListener('click', e => {
  e.preventDefault();  // prevent browser from reloading
  trafficChart.data = trafficMonthly; // set new data object
  trafficChart.update(); // update the chart
});

let trafficWeekly = {
      labels: ["Week1", "Week2", "Week3", "Week4", "Week5", "Week6", "Week7", "Week8", "Week9", "Week10"],
      datasets: [{
      data: [550, 950, 1250, 2050, 3000, 4350, 300, 2000, 500, 150, 1450]
    }]
};

document.querySelector('#btn3').addEventListener('click', e => {
  e.preventDefault();  // prevent browser from reloading
  trafficChart.data = trafficWeekly; // set new data object
  trafficChart.update(); // update the chart
});

let trafficDaily = {
  labels: ["Mon", "Tues", "Weds", "Thurs", "Fri", "Sat", "Sun"],
  datasets: [{
  data: [550, 950, 1250, 2050, 3000, 4350, 5000]
}]
};

document.querySelector('#btn2').addEventListener('click', e => {
  e.preventDefault();  // prevent browser from reloading
  trafficChart.data = trafficDaily; // set new data object
  trafficChart.update(); // update the chart
});


let trafficHourly = {
  labels: ["9am", "12pm", "3pm", "6pm", "9pm", "12am"],
  datasets: [{
  data: [900, 2000, 2150, 1000, 4050, 2500]
}]
};

document.querySelector('#btn1').addEventListener('click', e => {
  e.preventDefault();  // prevent browser from reloading
  trafficChart.data = trafficHourly; // set new data object
  trafficChart.update(); // update the chart
});



let trafficOptions = {
    aspectRatio: 2.5,
        animation: {
            duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
        }
      }]
    },
    legend : {
        display: false
    }
};


let trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficData,
        options: trafficOptions
});


// Bar Graph

const dailyCanvas = document.getElementById("daily-chart");

// data for daily traffic bar chart
const dailyData = {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: '# of Hits',
            data: [75, 115, 175, 125, 225, 200, 100],
            backgroundColor: '#7477BF',
            borderWidth: 1
      }]
    };
    const dailyOptions = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
       }
      }]
    },
        legend : {
            display: false
      }
    }

    let dailyChart = new Chart(dailyCanvas, {
        type: 'bar',
        data: dailyData,
        options: dailyOptions
    });


// Doughnut Chart

const mobileCanvas = document.getElementById("mobile-chart");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
      }]
    };

const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
      }
    }    

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});    


// Messaging Section

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
        alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});


// notifications

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.addEventListener('click', event => {
    modal.style.display = "block";
    event.preventDefault();
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// autocomplete

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  
  /*An array containing all the country names in the world:*/
  var names = ["Victoria", "Dale", "Dawn", "Dan", "Justin", "Tony", "Christine", "Annabelle", "Chris", "Adam", "Bianca", "Brian", "Mark", "Ken", "Toby", "Mikel", "Louise", "Tate", "Christine", "Mick", "Tina", "Ricky", "Anthony", "Tabby", "Jacob", "Peter"];
  
  /*initiate the autocomplete function on the "myInput" element, and pass along the names array as possible autocomplete values:*/
  autocomplete(document.getElementById("myInput"), names);


// Local Storage Saved Settings //

const emailToggle = document.querySelector('#myonoffswitch');
const profileToggle = document.querySelector('#myonoffswitch1');
const timezoneSelect = document.querySelector('#timezone');

function testStorage() {
  const test = 'test';
   try {
     localStorage.setItem(test, test);
     localStorage.removeItem(test);
     return true;
    } catch(e) {
      return false;
  }  
}

if (testStorage() === true) {

  document.querySelector("#save").addEventListener("click", () => {
    localStorage.setItem('emailNotification', emailToggle.checked);
    localStorage.setItem('profilePublic', profileToggle.checked);
    localStorage.setItem('myTimeZoneSelectedValue', timezoneSelect.value);
    alert("Settings Successfully Saved!");
  });

  document.querySelector("#cancel").addEventListener("click", () => {
    const cancel = confirm('Are you sure you want to cancel changes?');
    if (cancel) {
      localStorage.setItem('emailNotification', emailToggle.checked = null);
      localStorage.setItem('profilePublic', profileToggle.checked = null);
    };
  }); 

  document.querySelector('#timezone').addEventListener("click", () => {
    localStorage.setItem('myTimeZoneSelectedValue', 'Pacific');
    localStorage.setItem('myTimeZoneSelectedValue', 'Mountain');
    localStorage.setItem('myTimeZoneSelectedValue', 'Central');
    localStorage.setItem('myTimeZoneSelectedValue', 'Eastern');
  });

  document.querySelector("#cancel").addEventListener("click", () => {
    const cancel = confirm('Are you sure you want to cancel changes?');
    if (cancel) {
      localStorage.removeItem('myTimeZoneSelectedValue', 'Pacific');
      localStorage.removeItem('myTimeZoneSelectedValue', 'Mountain');
      localStorage.removeItem('myTimeZoneSelectedValue', 'Central');
      localStorage.removeItem('myTimeZoneSelectedValue', 'Eastern');
    };
  }); 

}

emailToggle.checked = JSON.parse(localStorage.getItem('emailNotification'));
profileToggle.checked = JSON.parse(localStorage.getItem('profilePublic'));
document.querySelector('#timezone').value = localStorage.getItem('myTimeZoneSelectedValue');