<template>
    <link href='https://fonts.googleapis.com/css?family=Inter:500,700' rel='stylesheet'>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css"
    />
 
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    
    <section style="background: var(--background-color, #EDF0F4);" >
           <header class="fixed-top" style="position: fixed;" >
            <div class="frame-24" style="width: 40px;margin-left: 25px;">
      <img
        alt=""
        class="payhouse-logo-1"
        src="../../assets/images/payhouse.png"
      />
    </div>
     <nav  style="margin-right: 90px;white-space: nowrap;color: white;margin-top: 15px;" id="sidebar">
       <ul class="fixed">
         <li>
           <a href="/stockdashboard" style="font-size: 16px;font-family:inter;font-weight:medium;">Home</a>
         </li>
         <li class="dropDown-menu fixed-top">
           <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Stock Users</a>
           <ul>
             <li class="dropDown-menu fixed-top">
               <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Recipient</a>
               <ul>
                 <li><a href="/customer" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Recipient</a></li>
               </ul>
             </li>
             <li class="dropDown-menu fixed-top">
               <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Suppliers</a>
               <ul>
                 <li><a href="/supplier" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Suppliers</a></li>
               </ul>
             </li>
           </ul>
         </li>
         <li class="dropDown-menu fixed-top">
           <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Set Up</a>
           <ul>
             <li class="dropDown-menu fixed-top">
               <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Item SetUp</a>
               <ul>
                 <li><a href="/brand" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Brand</a></li>
              
                 <li><a href="/category" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Category</a></li>
              
                 <li><a href="/device" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Devices/Spare Parts</a></li>
            
                <li><a href="/addItem" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Item</a></li>

          
                </ul>
                
             </li>
             <li class="dropDown-menu fixed-top">
               <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">User SetUp</a>
               <ul>
                 <li><a href="/makeApprover" style="font-size: 16px;font-family:inter;font-weight:medium">Make Approver</a></li>
                 <li><a href="/makeIssuer" style="font-size: 16px;font-family:inter;font-weight:medium">Make Issuer</a></li>
              
                 <li><a href="/viewusers" style="font-size: 16px;font-family:inter;font-weight:medium">View Users</a></li>
              
                
          
                </ul>
                
             </li>
            
       
          
                        <li class="dropDown-menu  fixed-top">
                            <a href="" style="font-size: 16px;font-family:inter;font-weight:medium" >Roles SetUp</a>
                            <ul>
                               
                                <li><a href="/rolestable" style="font-size: 16px;font-family:inter;font-weight:medium" >View Roles</a></li>
                                <li><a href="/roles"  style="font-size: 16px;font-family:inter;font-weight:medium">Add Roles</a></li>
                                <li><a href="/userWithRole"  style="font-size: 16px;font-family:inter;font-weight:medium">View User With Role</a></li>
                              
                            </ul>                        
                        </li>
                        <li class="dropDown-menu  fixed-top">
                            <a href="" style="font-size: 16px;font-family:inter;font-weight:medium" >Responsibility</a>
                            <ul>
                              
                                <li><a href="/responsibilityTable"  style="font-size: 16px;font-family:inter;font-weight:medium">View Responsibility</a></li>
                                <li><a href="/responsibility" style="font-size: 16px;font-family:inter;font-weight:medium" >Add responsibility</a></li>
                                <li><a href="/addclaimtorole" style="font-size: 16px;font-family:inter;font-weight:medium" >Grant Permission</a></li>
                                <li><a href="/allroleclaims" style="font-size: 16px;font-family:inter;font-weight:medium" >View Responsibility assigned to role</a></li>
                              
                            </ul>                        
                        </li>
                      </ul>
              
                
            
        
         
           </li>
            
       
   
         <li class="dropDown-menu fixed-top">
           <a href="" style="font-size: 15px;font-family:inter;font-weight:medium">Inventory</a>
          
           <ul>
            <li><a  href="/apply" style="font-size: 16px;font-family:inter;font-weight:medium">Apply</a></li>
             <li><a href="/applicationstatus" style="font-size: 16px;font-family:inter;font-weight:medium">Requisition Review</a></li>
             <li><a href="/issueitems" style="font-size: 16px;font-family:inter;font-weight:medium">Items To Be Issued</a></li>
             <li><a href="/poComplete" style="font-size: 16px;font-family:inter;font-weight:medium">Receive Batch</a></li>
             <li><a href="/itemByClient" style="font-size: 16px;font-family:inter;font-weight:medium">Get item By client</a></li>
             <li><a href="/stockissued" style="font-size: 16px;font-family:inter;font-weight:medium">Issued Items</a></li>
             <li><a href="/returnsreview" style="font-size: 16px;font-family:inter;font-weight:medium">Returns Review</a></li>
          
            </ul>
         </li>
         <li >
           <button class="fixed-top" id="blinking-buttons" style="font-size: 15px;font-family:inter;font-weight:medium;color: blue;width: 120px;display:fixed"><router-link to="/apply"><h1  style="font-size: 16px;margin-right: 70px;color:blue;font-family:inter">APPLY</h1></router-link></button>
         
          </li>
          <li style="">
        <a style="display: flex; margin-left: 100px; font-size: 16px; font-family: inter; font-weight: medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
      
          </a>
    </li>
         
       </ul>
     </nav>
   </header>

  
 
 <div class="" style="width: 95%;margin-left: 35px;">

   <div class="card-list"  >
    
    <div class="row" style="margin-top: 80px;">
  <p style="margin-left: 7px;
            font-size: 22px;
            font-family: inter;
            font-weight: medium;
           font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
    id="greeting"
    :style="getColorStyle()"

  >
    {{ dynamicGreeting }} ,  {{ userbody.firstName }} {{ userbody.lastName }} !
  </p>


      <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4" style="background: var(--background-color, #EDF0F4);"  > 
        
        <div class="card" style="display: flex;width: 290px;
padding: 8px 84px;
flex-direction: column;
align-items: center;
gap: 8px; height: 114px;border-radius: 10px;
background: #22b0c9;
box-shadow: 0px 8px 27px 0px rgba(136, 133, 133, 0.25);border:0;"  >
         <a href="/allstockrecord" style="text-decoration: none;">
      <div class="card-content">
        <div class="card-body">
          <div class="media d-flex">
            <div class="align-self-center">
              <i class="icon-pencil primary font-large-2 float-left"></i>
            </div>
            <div class="media-body text-right">
              <h3 style="color: white; font-size: 16px; font-family: Inter; font-weight: 600; display: flex; white-space: nowrap;">Quantity In Hand</h3>
              <h4 id="totalDeliveredValue" style="color: var(--green, white); font-size: 18px; font-family: Inter; font-weight: 500; margin-left: 20px;"></h4>
              <h5 style="color: var(--light-grey, white); font-size: 16px; font-family: Inter; margin-bottom: 20px; white-space: nowrap;">Total Delivered</h5>
            </div>
          </div>
        </div>
      </div>
    </a>
    </div>
    </div>
      <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4 "  > 
        <div class="card" style="display: flex;
width: 290px;
padding: 8px 84px;
flex-direction: column;
align-items: center;
gap: 8px; height: 114px;border-radius: 10px;
background: #eeaf5d;
box-shadow: 0px 8px 27px 0px rgba(136, 133, 133, 0.25);border:0;"  >
   <a href="/allstockrecord" style="text-decoration: none;">
          <div class="card-content" >
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                  <i class="icon-pencil primary font-large-2 float-left"></i>
                </div>
                <div class="media-body text-right">
                  <h3 style="color: white;

/* H1 */
font-size: 16px; 
font-family: Inter;
font-weight: 600;display: flex;white-space: nowrap;">Quantity Issued</h3>
<h4 id="totalStocOutForAllItems" style="color: white;

/* H2 */
font-size: 18px;
font-family: Inter;
font-weight: 500;margin-left: 20px;"></h4>
                  <h5 style="color: white;
/* SH2 Regular */
font-size: 16px;
font-family: Inter;margin-bottom: 20px;white-space: nowrap;">Total Issued</h5>
                </div>
              </div>
            </div>
          </div>
          </a>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4 "  > 
        <div class="card" style="display: flex;
width: 290px;
padding: 8px 84px;
flex-direction: column;
align-items: center;
gap: 8px; height: 114px;border-radius: 10px;border:0;
background: #dd5858;
box-shadow: 0px 8px 27px 0px rgba(136, 133, 133, 0.25);"  >
   <a href="/allstockrecord" style="text-decoration: none;">
          <div class="card-content" >
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                  <i class="icon-pencil primary font-large-2 float-left"></i>
                </div>
                <div class="media-body text-right">
                    <h2 style="font-size: 16px; color: white; font-family:inter;font-weight:600;white-space: nowrap;width: fit-content;">
                         Damaged Stock
                        </h2>
<h4 id="totalDamagedQuantity" style="color: white;

/* H2 */
font-size: 18px;
font-family: Inter;
font-weight: 500;margin-left: 30px;"></h4>
                          <h5 style="color: white;
/* SH2 Regular */
font-size: 16px;
font-family: Inter;margin-bottom: 20px;white-space: nowrap;width: fit-content;">Stocks Damaged</h5>
                </div>
              </div>
            </div>
          </div>
          </a>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4 "  > 
        <div class="card box-shadow" style="display: flex;
width: 290px;
padding: 8px 84px;
flex-direction: column;
align-items: center;
gap: 8px; height: 114px;border-radius: 10px;
background: #46af0a;
box-shadow: 0px 8px 27px 0px rgba(136, 133, 133, 0.25);border:0;"  >
   <a href="/allstockrecord" style="text-decoration: none;">
          <div class="card-content" >
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                  <i class="icon-pencil primary font-large-2 float-left"></i>
                </div>
                <div class="media-body text-right">
                    <h2 style="font-size: 16px; color: white;font-family:inter;font-weight:600;white-space: nowrap;width: fit-content;">
                         Available Stock
                        </h2>
<h4 id="totalAvailableStock" style="color: white;

/* H2 */
font-size: 18px;
font-family: Inter;
font-weight: 500;margin-left: 30px;"></h4>
                  <h5 style="color: white;
/* SH2 Regular */
font-size: 16px;
font-family: Inter;margin-bottom: 20px;display: flex;white-space: nowrap;width: fit-content;">Available Stock</h5>
                </div>
              </div>
            </div>
          </div>
          </a>
        </div>
      </div>
    
      </div>
   
      </div>
</div>
  <div class="dashboard-container">
    
    <div class="chart-section" style="width:60%;border-style: none;">
  
     
      <BarChart class="w-100" />
    </div>
    <div class="table-section" style="margin-left: 50px;">
      <div class="form-control" style="border-style: none;height: 475px;">
        <h4 style="color: white; font-size: 16px; font-family: Inter; font-weight: 600; background: orange; text-align: center;"><b>ITEMS TO BE REORDERED</b></h4>
        <table class="table-no-more">
          <thead style="font-family:inter">
            <tr style="font-family:inter">
              <th>#</th>
              <th>Item Name</th>
              <th>Remaining Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody v-for="(stock, index) in alltobereordered" v-bind:key="stock.id">
            <tr style="font-family: inter;">
              <td>{{ index + 1 }}</td>
              <td>{{ stock.brandName }}<br>{{ stock.itemName }}</td>
              <td>{{ stock.availableStock }}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-sm"
                  style="width: 60px; font-size: 15px; height: 30px; color: white; border-radius: 37px;"
                  :style="getStatusStyle(stock)"
                >
                  {{ stock.status }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

                        </section>
</template>
<script>
 // import swal from "sweetalert2";
 //import BarChart from "../bargraph/dashboard.vue";
import AppMixins from "../../Mixins/shared";

import BarChart from "../bargraph/dashboard.vue";
export default {
  name: "AddStock",
  components: {
  BarChart,
},

  mixins: [AppMixins],
 // components: { BarChart },
  data() {
    return {
      chartWidth: 100, // Adjust as needed
      chartHeight: 100, // Adjust as needed
      
      userbody: {},
      allstockitems:{},
      alltobereordered:{},
      dynamicGreeting: "", 
    }
},
methods:{
  getStatusStyle(stock){
  if(stock.status==="Good"){
    return{
      background:"green"
    };
  }else if(stock.status==="Low"){
    return{
      background:"orange"
    };

  }else if(stock.status==="Out"){
    return{
      background:"red"
    };
  }else{
    return "";
  }
},
getColorStyle() {
  if (this.dynamicGreeting ==="Good Evening") {
    return { background: " 	", color:"black" };
  }
  else if (this.dynamicGreeting==="Good Morning"){
    return {background : "", color:"black"};
  }
  else if (this.dynamicGreeting==="Good Afternoon"){
    return {background:"",color:"black"};
  }
},

    async GetLoggedInUser() {
      var response = await this.Gettingloggedinuser();
      this.userbody = response.body;
      console.log("Logged in user __________ email:", this.userbody);
    },
    updateTimeBasedGreeting() {
  const currentHour = new Date().getHours();
  let color = "red"; // Default color

  let greeting = "";
  if (currentHour >= 5 && currentHour < 12) {
    color = "green"; // Set the color to green for morning
    greeting = "Good Morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    color = "orange"; // Set the color to orange for afternoon
    greeting = "Good Afternoon";
  } else {
    color = "blue"; // Set the color to purple for evening
    greeting = "Good Evening";
  }

  // Assuming you want to update the color of an HTML element with id "greeting"
  const greetingElement = document.getElementById("greeting");
  if (greetingElement) {
    greetingElement.style.color = color;
  }

  this.dynamicGreeting = greeting;
},

    async GetAllStockItemss() {
  try {
    const response = await this.GettingAllStockItems();
    this.allstockitems = response.body;
    console.log("allsuppliers: ", this.allstockitems);

    // Check if the list has items
    if (this.allstockitems.length > 0) {
      // Get the most recently added item (assuming it's at the end of the list)
      const mostRecentItem = this.allstockitems[0];

      // Access the totalDeliveredForAllItems property from the most recent item
      const totalDeliveredValue = mostRecentItem.totalDeliveredForAllItems;
      const totalDamagedQuantity = mostRecentItem.totalQuantityDamaged;
      const totalAvailableStock = mostRecentItem.totalAvailableStock;
      const totalStocOutForAllItems = mostRecentItem.totalStockOutForAllItems;

      // Display the totalDeliveredValue in your HTML
      const totalDeliveredValueElement = document.getElementById("totalDeliveredValue");
      const totalDamagedQuantityElement = document.getElementById("totalDamagedQuantity");
      const totalAvailableStockElement = document.getElementById("totalAvailableStock");
      const totalStocOutForAllItemsElement = document.getElementById("totalStocOutForAllItems");
if (!totalDeliveredValueElement) {
  console.log("Element with id 'totalDeliveredValue' not found in the DOM.");
}

      
      if (totalDeliveredValueElement) {
        totalDeliveredValueElement.textContent = totalDeliveredValue;
        console.log("Total Delivered Value:", totalDeliveredValue);
      } else {
        console.log("Element with id 'totalDeliveredValue' not found in the DOM.");
      }
      if (totalDamagedQuantityElement) {
        totalDamagedQuantityElement.textContent = totalDamagedQuantity;
        console.log("Total Damaged Value:", totalDamagedQuantity);
      } else {
        console.log("Element with id 'totaldamagedquantity' not found in the DOM.");
      }
      if (totalStocOutForAllItemsElement) {
        totalStocOutForAllItemsElement.textContent = totalStocOutForAllItems;
        console.log("Total stock out Value:", totalStocOutForAllItems);
      } else {
        console.log("Element with id 'totalStocOutForAllItems' not found in the DOM.");
      }
      if (totalAvailableStockElement) {
        totalAvailableStockElement.textContent = totalAvailableStock;
        console.log("Total Available Stock Value:", totalAvailableStock);
      } else {
        console.log("Element with id 'totalAvailableStock' not found in the DOM.");
      }
   
    } else {
      console.log("The list is empty.");
    }

    return response;
  } catch (error) {
    console.error("An error occurred:", error);
  }
},




async GetItemsToBeReordered() {
    const response = await this.GettingAllItemsToBeReordered();
    this.alltobereordered = response.body.filter((item) => item.status !== "Good");
    console.log("All items to be reordered: ", this.alltobereordered);
    return response;
  },
  // Add a method to refresh the data
  async refreshData() {
    await this.GetItemsToBeReordered();
  },
formatDateAssigned(value) {
      let formattedDate = new Date(value);
      formattedDate = `${formattedDate.toDateString()} at ${formattedDate.toLocaleTimeString()}`;
      return formattedDate;
    },
    formatDate(dateString) {
            const date = new Date(dateString);

            return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
        },

},
created(){
    this.GetLoggedInUser();
    this.GetAllStockItemss();
    this.GetItemsToBeReordered();
    this.updateTimeBasedGreeting();
    
  }
}
</script>
<style>




.card-list-table {
    background: white;
   
    }
    .dashboard-container {
  display: flex;
  flex-wrap: wrap;
}
   
 

.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
tbody td {
    padding: 10px 10px 20px 1%;
    position: relative;
   
}
th {
        border-bottom: 1px solid  darken(#f8f8f8, 10%);
        padding: 2px;
      }
      td{
        border-bottom: 1px solid  darken(#f8f8f8, 10%);
        cursor: pointer;
        display: table-cell;
        padding: 20px 24px;
        transition: background .2s ease-out;
        vertical-align: middle;
      }
      .table-no-more {
        width: 100%;
    }

    .table-no-more th,
    .table-no-more td {
        padding: 10px;
        text-align: left;
        border: 1px solid #ccc;
    }

    .table-no-more th {
        background-color: #f2f2f2;
    }

    .table-no-more tbody tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    .table-no-more tbody tr:hover {
        background-color: #ddd;
    }
      thead th {
   
    font-size: .85em;
    color:black;
    letter-spacing: .5pt;
  }.my-custom-scrollbar {
position: relative;
height: 200px;
overflow: auto;
}
.table-wrapper-scroll-y {
display: block;
}
.table {
  table-layout: fixed;
}
@media(max-width: 767px){
   
    body{
       display:flex;
       flex-direction: column;
       position: fixed;
     
     }
 
  }
  @media (max-width: 991px) {
  .card-registration-2 .bg-indigo {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
}
@media (min-width: 992px) {
  .card-registration-2 .bg-indigo {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
}
nav ul li a::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    transition: width .2s;
    background-color:  white;
          -webkit-transition: opacity .3s ease,width .3s ease;
          -moz-transition: opacity .3s ease,width .3s ease;
          -o-transition: opacity .3s ease,width .3s ease;
          transition: opacity .3s ease,width .3s ease;
          -ms-transition: opacity .3s ease,width .3s ease;
}

nav ul li a:hover::after {
    width: 100%;
    transition: width .3s;
}
.blink {
    color : red;
    margin-right: 0.5rem;
      animation: blink 2s steps(5, start) infinite;
      -webkit-animation: blink 1s steps(5, start) infinite;
    }
    @keyframes blink {
      to {
        visibility: hidden;
      }
    }
    @-webkit-keyframes blink {
      to {
        visibility: hidden;
      }
    }
.noblink {
   margin-right: 0.5rem;
    }
    #blinking-buttons {
  position: fixed;
  top: 0;
  margin-left: 1020px;
  font-size: 15px;
  font-family: inter;
  font-weight: medium;
  color: rgb(235, 232, 68);
  width: 120px;
  background-color: orange;
  border: none;
  border-radius: 48px 0;
  padding: 8px 35px;
}

@keyframes blink {
  0%, 100% {
    background-color: rgb(30, 235, 23);
  }
  50% {
    background-color: orange;
  }
}


@keyframes blink {
  0%, 100% {
    background-color: rgb(30, 235, 23);
  }
  50% {
    background-color: orange;
  }
}

@keyframes blink {
  0%, 100% {background-color:rgb(30, 235, 23);}
  50% {background-color: orange;}
}
#blinking-button {
  background-color:orange;
  color: white;
  animation: blink 1s linear infinite;
}
.custom-success-icon .swal2-icon.swal2-success::before {
  background-color: #00cc00; /* Change the background color */
  border: 2px solid #009900; /* Change the border color */
}

.custom-success-icon .swal2-icon.swal2-success::after {
  background-color: #009900; /* Change the checkmark color */
}

</style>