<template>
    <link href='https://fonts.googleapis.com/css?family=Inter:500,700' rel='stylesheet'>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>
 
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
     <nav  style="margin-right: 90px;white-space: nowrap;color: white;margin-top: 15px;">
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
              
                 <li><a href="/viewusers" style="font-size: 16px;font-family:inter;font-weight:medium">View Users</a></li>
              
                
          
                </ul>
                
             </li>
            
       
          
                        <li class="dropDown-menu  fixed-top">
                            <a href="" style="font-size: 16px;font-family:inter;font-weight:medium" >Roles SetUp</a>
                            <ul>
                               
                                <li><a href="/rolestable" style="font-size: 16px;font-family:inter;font-weight:medium" >View Roles</a></li>
                                <li><a href="/roles"  style="font-size: 16px;font-family:inter;font-weight:medium">Add Roles</a></li>
                              
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
             <li><a href="/applicationstatus" style="font-size: 16px;font-family:inter;font-weight:medium">Application Status</a></li>
             <li><a href="/issueitems" style="font-size: 16px;font-family:inter;font-weight:medium">IssueItems</a></li>
             <li><a href="/poComplete" style="font-size: 16px;font-family:inter;font-weight:medium">Update Batch</a></li>
             <li><a href="/itemByClient" style="font-size: 16px;font-family:inter;font-weight:medium">Get item By client</a></li>
        
            </ul>
         </li>
         <li >
           <button class="fixed-top" id="blinking-button" style="font-size: 15px;font-family:inter;font-weight:medium;color: blue;width: 120px;display:fixed"><router-link to="/apply"><h1  style="font-size: 16px;margin-right: 20px;color:blue;font-family:inter">APPLY</h1></router-link></button>
         
          </li>
         <li style="">
        
           <a style="display: flex;margin-left:100px;font-size: 16px;font-family:inter;font-weight:medium"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg><p style="margin-left:7px;">{{userbody.firstName}} {{userbody.lastName}}</p></a>

         </li>
         
       </ul>
     </nav>
   </header>

  
 
 <div class="" style="width: 95%;margin-left: 35px;">

   <div class="card-list"  >
    
    <div class="row" style="margin-top: 100px;" >
      <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4" style="background: var(--background-color, #EDF0F4);"  > 
        <div class="card" style="display: flex;width: 290px;
padding: 8px 84px;
flex-direction: column;
align-items: center;
gap: 8px; height: 114px;border-radius: 10px;
background: #22b0c9;
box-shadow: 0px 8px 27px 0px rgba(136, 133, 133, 0.25);border:0;"  >
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
font-weight: 600;display: flex;white-space: nowrap;">Quantity In Hand</h3>
<h4 id="totalDeliveredValue" style="color: var(--green, white); /* H2 */ font-size: 18px; font-family: Inter; font-weight: 500; margin-left: 20px;"></h4>

                  <h5 style="color: var(--light-grey,white);
/* SH2 Regular */
font-size: 16px;
font-family: Inter;margin-bottom: 20px;white-space: nowrap;">Total Delivered </h5>
                </div>
              </div>
            </div>
          </div>
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
<h4 style="color: white;

/* H2 */
font-size: 18px;
font-family: Inter;
font-weight: 500;margin-left: 20px;">500</h4>
                  <h5 style="color: white;
/* SH2 Regular */
font-size: 16px;
font-family: Inter;margin-bottom: 20px;white-space: nowrap;">Total Issued</h5>
                </div>
              </div>
            </div>
          </div>
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
        </div>
      </div>
      </div>
      </div>
 

 
   <div class="" style="background: var(--background-color, #EDF0F4);">
     <div class="form-control "  style="margin-top: 30px;border:0;

background: #FFF;
box-shadow: 0px 8px 27px 0px rgba(136, 133, 133, 0.25);" >
<div class="  ">
      <h4 style="color: var(--grey, #1E1E1E);


/* H1 */
font-size: 16px;
font-family: Inter;
font-weight: 600;margin-left:30px;margin-top: 50px;"><b>STOCK SUMMARY</b></h4>
    </div>
        <div class="form-inline" style="margin-top: 20px;display: flex;margin-left:30px">
                                      <div class="">
                                        <div class="form-group" style="width: 184px;">
                                          
                                          <select
                                            name="product"
                                            id="product"
                                            class="form-select rounded-0"
                                            required
                                             style="font-family: inter;font-size: 13px;border-radius: 4px"
                                          >
                                            <option value="" >
                                            This Week
                                            </option>
                                         
                                          </select>
                                        </div>
                                      </div>
                                      <div class="" >
                                        <div class="form-group ">
                                      <input type="date" style="width: 184px;height:33px;margin-left: 13px;border-radius: 4px" />
                                        </div>
                                      </div>
                                      <div class=" " style="margin-left: 3px;" >
                                        <div class="form-group">
                                      <input type="date" style="width: 184px;height:33px;margin-left: 13px;border-radius: 4px" />
                                        </div>
                                      </div>
                                      <div class=" ">
                                        <div class="form-group" style="width: 184px;">
                                          
                                          <select
                                            name="product"
                                            id="product"
                                            class="form-select rounded-0"
                                            required
                                             style="font-family: inter;font-size: 13px;margin-left: 13px;border-radius: 4px"
                                          >
                                            <option value="" >
                                            Select Brand
                                            </option>
                                         
                                          </select>
                                        </div>
                                      </div>
                                      <div class=" ">
                                        <div class="" style="width: 184px;"><a href="/purchaseordered" style="text-decoration: none;">
                                            <input
                                            type="submit"
                            class="button"
                                        value="View Purchase Orders"
                                        form="purchaseForm"
                                        style="height:40px;font-family: inter;font-size: 13px;margin-left: 61px;width: 154px;
background: #FF8C22;color:white;border: none;"

                                    
                                      />
                                        </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="table-wrapper">
                  <div class="table-title">
                    <div class="">
                      <div class="table-responsive">
                        <table id="purchaseList" class="table card-list-table  table-hover table-bordered" style="margin-top: 30px;margin-left:20px">
                      <thead style="font-family: inter;font-weight: bold;background: #F3E6DA;font-size: 16px;border-bottom: 1px solid  darken(#f8f8f8, 10%);
        padding: 12px 34px">
                     <tr>
                       <th >Stock ID</th>
                       <th  >Stock Name</th>
                       <th >Opening Stock</th>
                       <th >New Stock</th>
                       <th >Total StockOut</th>
                       <th>Available Stock</th>
                       <th style="width: 200px;">Last Updated</th>
                       <th >Status</th>
                       <th style="width: 130px;">Updated By</th>
                     </tr>
                   </thead>
                   <tbody style="font-family: inter;font-size: 16px;font-weight: medium;color: gray;" v-for="(stock,index) in this.allstockitems" v-bind:key="stock.id">
                     <tr>
                       <th scope="row" style="padding-left: 25px;">{{index +1}}</th>
                       <td style="">{{stock.brandName}}<br>{{stock.itemName}}</td>
                       <td style="padding-left: 25px;">{{stock.openingStock}}</td>
                       <td style="padding-left: 25px;">{{stock.quantity}}</td>
                       <td style="padding-left: 25px;">{{stock.stockOut}}</td>
                       <td style="padding-left: 25px;">{{stock.availableStock}}</td>
                       <td style="padding-left: 25px;font-size: 15px;">{{formatDate(stock.dateAdded)}}</td>
                       <td style="text-align: center;">
                        <button
                               
                               type="button"
                               class="btn btn-sm"
                               style="   width: 60px;
                                 font-size: 15px;
                                 height: 30px;
                                 color: white;
                                 border-radius: 37px;"
                               :style="getStatusStyle(stock)"
                               
                             >
                             {{ stock.status }}
                             </button>
                     </td>
                       <td style="padding-left: 25px;">{{stock.updatedBy}}</td>
           
                     </tr>
                    
                   </tbody>
                </table>
               </div>
           
</div>
</div>


         </div>
         </div>
         </div>
        </div>
        <div class="" style="width: 100%; margin-left: 30px; border-style: none;display: flex;">
    <div class="" style="display: inline-block;width:60%">
      <div class="form-control" style="border-style: none;">
        <BarChart style="width: 650px;"></BarChart>
      </div>
    </div>
    <div class="" style="display: inline-block;width:34%;margin-left: 30px;">
      <div class="form-control" style="border-style: none;margin-top: 2px;height: 98%;">
        <!-- Content for the second container -->
        <h4 style="color: white;


/* H1 */
font-size: 16px;
font-family: Inter;
font-weight: 600;margin-left:0px;margin-top: 10px;  -webkit-animation-direction: normal;
   background:orange;text-align: center;"><b >ITEMS TO BE REORDERED</b></h4>
 <table class="table-no-more">
    <thead>
        <tr>
            <th>#</th>
            <th>Item Name</th>
            <th>Remaining Quantity</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody v-for="(stock, index) in this.alltobereordered" v-bind:key="stock.id">
        <tr>
            <td>{{ index + 1 }}</td>
            <td>
               {{ stock.brandName }}<br>
                {{ stock.itemName }}
            </td>
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
 

       <!--  <div class="tab-content">
                                       <div class="tab-pane fade active show" id="tab-eg-55">
                                           <div class="widget-chart p-3">
                                               <div style="height: 350px">
                                                   <canvas id="line-chart"></canvas>
                                               </div>
                                               <div class="widget-chart-content text-center mt-5">
                                                   <div class="widget-description mt-0 text-warning">
                                                       <i class="fa fa-arrow-left"></i>
                                                       <span class="pl-1">175.5%</span>
                                                       <span class="text-muted opacity-8 pl-1">increased server resources</span>
                                                   </div>
                                               </div>
                                           </div>
                                           <div class="pt-2 card-body">
                                               <div class="row">
                                                   <div class="col-md-6">
                                                       <div class="widget-content">
                                                           <div class="widget-content-outer">
                                                               <div class="widget-content-wrapper">
                                                                   <div class="widget-content-left">
                                                                       <div class="widget-numbers fsize-3 text-muted">63%</div>
                                                                   </div>
                                                                   <div class="widget-content-right">
                                                                       <div class="text-muted opacity-6">Generated Leads</div>
                                                                   </div>
                                                               </div>
                                                               <div class="widget-progress-wrapper mt-1">
                                                                   <div class="progress-bar-sm progress-bar-animated-alt progress">
                                                                       <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="63" aria-valuemin="0" aria-valuemax="100" style="width: 63%;"></div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div class="col-md-6">
                                                       <div class="widget-content">
                                                           <div class="widget-content-outer">
                                                               <div class="widget-content-wrapper">
                                                                   <div class="widget-content-left">
                                                                       <div class="widget-numbers fsize-3 text-muted">32%</div>
                                                                   </div>
                                                                   <div class="widget-content-right">
                                                                       <div class="text-muted opacity-6">Submitted Tickers</div>
                                                                   </div>
                                                               </div>
                                                               <div class="widget-progress-wrapper mt-1">
                                                                   <div class="progress-bar-sm progress-bar-animated-alt progress">
                                                                       <div class="progress-bar bg-success" role="progressbar" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100" style="width: 32%;"></div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div class="col-md-6">
                                                       <div class="widget-content">
                                                           <div class="widget-content-outer">
                                                               <div class="widget-content-wrapper">
                                                                   <div class="widget-content-left">
                                                                       <div class="widget-numbers fsize-3 text-muted">71%</div>
                                                                   </div>
                                                                   <div class="widget-content-right">
                                                                       <div class="text-muted opacity-6">Server Allocation</div>
                                                                   </div>
                                                               </div>
                                                               <div class="widget-progress-wrapper mt-1">
                                                                   <div class="progress-bar-sm progress-bar-animated-alt progress">
                                                                       <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="71" aria-valuemin="0" aria-valuemax="100" style="width: 71%;"></div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div class="col-md-6">
                                                       <div class="widget-content">
                                                           <div class="widget-content-outer">
                                                               <div class="widget-content-wrapper">
                                                                   <div class="widget-content-left">
                                                                       <div class="widget-numbers fsize-3 text-muted">41%</div>
                                                                   </div>
                                                                   <div class="widget-content-right">
                                                                       <div class="text-muted opacity-6">Generated Leads</div>
                                                                   </div>
                                                               </div>
                                                               <div class="widget-progress-wrapper mt-1">
                                                                   <div class="progress-bar-sm progress-bar-animated-alt progress">
                                                                       <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="41" aria-valuemin="0" aria-valuemax="100" style="width: 41%;"></div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div class="row">
                           <div class="col-md-6 col-xl-4">
                               <div class="card mb-3 widget-content">
                                   <div class="widget-content-outer">
                                       <div class="widget-content-wrapper">
                                           <div class="widget-content-left">
                                               <div class="widget-heading">Total Orders</div>
                                               <div class="widget-subheading">Last year expenses</div>
                                           </div>
                                           <div class="widget-content-right">
                                               <div class="widget-numbers text-success">1896</div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                           <div class="col-md-6 col-xl-4">
                               <div class="card mb-3 widget-content">
                                   <div class="widget-content-outer">
                                       <div class="widget-content-wrapper">
                                           <div class="widget-content-left">
                                               <div class="widget-heading">Products Sold</div>
                                               <div class="widget-subheading">Revenue streams</div>
                                           </div>
                                           <div class="widget-content-right">
                                               <div class="widget-numbers text-warning">$3M</div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                           <div class="col-md-6 col-xl-4">
                               <div class="card mb-3 widget-content">
                                   <div class="widget-content-outer">
                                       <div class="widget-content-wrapper">
                                           <div class="widget-content-left">
                                               <div class="widget-heading">Followers</div>
                                               <div class="widget-subheading">People Interested</div>
                                           </div>
                                           <div class="widget-content-right">
                                               <div class="widget-numbers text-danger">45,9%</div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                           <div class="d-xl-none d-lg-block col-md-6 col-xl-4">
                               <div class="card mb-3 widget-content">
                                   <div class="widget-content-outer">
                                       <div class="widget-content-wrapper">
                                           <div class="widget-content-left">
                                               <div class="widget-heading">Income</div>
                                               <div class="widget-subheading">Expected totals</div>
                                           </div>
                                           <div class="widget-content-right">
                                               <div class="widget-numbers text-focus">$147</div>
                                           </div>
                                       </div>
                                       <div class="widget-progress-wrapper">
                                           <div class="progress-bar-sm progress-bar-animated-alt progress">
                                               <div class="progress-bar bg-info" role="progressbar" aria-valuenow="54" aria-valuemin="0" aria-valuemax="100" style="width: 54%;"></div>
                                           </div>
                                           <div class="progress-sub-label">
                                               <div class="sub-label-left">Expenses</div>
                                               <div class="sub-label-right">100%</div>
                                           </div>
                                       </div>
                                   </div>-->

 

   <!-- <div class="col-md-12 col-lg-6">
                               <div class="mb-3 card">
                                   <div class="card-header-tab card-header-tab-animation card-header">
                                       <div class="card-header-title">
                                           <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
                                           Sales/Purchase
                                       </div>
                                       <ul class="nav">
                                           <li class="nav-item"><a href="javascript:void(0);" class="active nav-link">Last</a></li>
                                           <li class="nav-item"><a href="javascript:void(0);" class="nav-link second-tab-toggle">Current</a></li>
                                       </ul>
                                   </div>
                                   <div class="card-body">
                                       <div class="tab-content">
                                           <div class="tab-pane fade show active" id="tabs-eg-77">
                                                <div class="card mb-3 widget-chart widget-chart2 text-left w-100">
                                                   <div class="widget-chat-wrapper-outer">
                                                       <div class="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                                                           <canvas id="canvas"></canvas>
                                                       </div>
                                                   </div>
                                               </div
                                               <h6 class="text-muted text-uppercase font-size-md opacity-5 font-weight-normal"> Sales Overview</h6>
                                               <div class="scroll-area-sm">
                                                   <div class="scrollbar-container">
                                                       <ul class="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                                                           <li class="list-group-item">
                                                               <div class="widget-content p-0 d-flex" >
                                                                   <div class="widget-content-wrapper" style="margin-left: 40px;">
                                                                       <div class="widget-content-left mr-3">
                                                                           <img width="42" class="rounded-circle" src="assets/images/avatars/9.jpg" alt="">
                                                                       </div>
                                                                       <div class="widget-content-left">
                                                                         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" class="bi bi-currency-exchange" viewBox="0 0 16 16">
 <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z"/>
</svg>
                                                                           <div class="widget-heading">Sales</div>
                                                                          
                                                                       </div>
                                                                       <div class="widget-content-right">
                                                                           <div class="font-size-xlg text-muted">
                                                                               <small class="opacity-5 pr-1">Ksh.</small>
                                                                               <span>129,000</span>
                                                                               <small class="text-danger pl-2">
                                                                                   <i class="fa fa-angle-down"></i>
                                                                               </small>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                                   <div class="widget-content-wrapper"  style="margin-left: 100px;" >
                                                                       <div class="widget-content-left mr-3">
                                                                           <img width="42" class="rounded-circle" src="assets/images/avatars/9.jpg" alt="">
                                                                       </div>
                                                                       <div class="widget-content-left">
                                                                         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="purple" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
 <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"/>
</svg>
                                                                           <div class="widget-heading">Revenue</div>
                                                                          
                                                                       </div>
                                                                       <div class="widget-content-right" >
                                                                           <div class="font-size-xlg text-muted">
                                                                               <small class="opacity-5 pr-1">Ksh.</small>
                                                                               <span>8,000</span>
                                                                               <small class="text-danger pl-2">
                                                                                   <i class="fa fa-angle-down"></i>
                                                                               </small>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                                   <div class="widget-content-wrapper"  style="margin-left: 150px;" >
                                                                       <div class="widget-content-left mr-3">
                                                                           <img width="42" class="rounded-circle" src="assets/images/avatars/9.jpg" alt="">
                                                                       </div>
                                                                       <div class="widget-content-left">
                                                                         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="orange" class="bi bi-graph-up" viewBox="0 0 16 16">
 <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
</svg>
                                                                           <div class="widget-heading">Profit</div>
                                                                          
                                                                       </div>
                                                                       <div class="widget-content-right" >
                                                                           <div class="font-size-xlg text-muted">
                                                                               <small class="opacity-5 pr-1">Ksh.</small>
                                                                               <span>80,000</span>
                                                                               <small class="text-danger pl-2">
                                                                                   <i class="fa fa-angle-down"></i>
                                                                               </small>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </li>
                                                           <li class="list-group-item">
                                                               <div class="widget-content p-0">
                                                                 <h6 class="text-muted text-uppercase font-size-md opacity-5 font-weight-normal"> Purchase Overview</h6>
                                                                   <div class="widget-content-wrapper"  style="margin-left:40px">
                                                                     
                                                                       <div class="widget-content-left mr-3">
                                                                           <img width="42" class="rounded-circle" src="assets/images/avatars/5.jpg" alt="">
                                                                       </div>
                                                                       <div class="widget-content-left">
                                                              
                                                                           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="blue" class="bi bi-bag" viewBox="0 0 16 16">
 <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg>
                                                                           <div class="widget-subheading">Purchase</div>
                                                                       </div>
                                                                       <div class="widget-content-right">
                                                                           <div class="font-size-xlg text-muted">
                                                                               <small class="opacity-5 pr-1">Ksh.</small>
                                                                               <span>540,000</span>
                                                                               <small class="text-success pl-2">
                                                                                   <i class="fa fa-angle-up"></i>
                                                                               </small>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </li>
                                                           <li class="list-group-item">
                                                               <div class="widget-content p-0">
                                                                   <div class="widget-content-wrapper">
                                                                       <div class="widget-content-left mr-3">
                                                                           <img width="42" class="rounded-circle" src="assets/images/avatars/4.jpg" alt="">
                                                                       </div>
                                                                       <div class="widget-content-left">
                                                                           <div class="widget-heading">Vinnie Wagstaff</div>
                                                                           <div class="widget-subheading">Java Programmer</div>
                                                                       </div>
                                                                       <div class="widget-content-right">
                                                                           <div class="font-size-xlg text-muted">
                                                                               <small class="opacity-5 pr-1">$</small>
                                                                               <span>429</span>
                                                                               <small class="text-warning pl-2">
                                                                                   <i class="fa fa-dot-circle"></i>
                                                                               </small>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </li>
                                                           <li class="list-group-item">
                                                               <div class="widget-content p-0">
                                                                   <div class="widget-content-wrapper">
                                                                       <div class="widget-content-left mr-3">
                                                                           <img width="42" class="rounded-circle" src="assets/images/avatars/3.jpg" alt="">
                                                                       </div>
                                                                       <div class="widget-content-left">
                                                                           <div class="widget-heading">Ella-Rose Henry</div>
                                                                           <div class="widget-subheading">Web Developer</div>
                                                                       </div>
                                                                       <div class="widget-content-right">
                                                                           <div class="font-size-xlg text-muted">
                                                                               <small class="opacity-5 pr-1">$</small>
                                                                               <span>129</span>
                                                                               <small class="text-danger pl-2">
                                                                                   <i class="fa fa-angle-down"></i>
                                                                               </small>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </li>
                                                           <li class="list-group-item">
                                                               <div class="widget-content p-0">
                                                                   <div class="widget-content-wrapper">
                                                                       <div class="widget-content-left mr-3">
                                                                           <img width="42" class="rounded-circle" src="assets/images/avatars/2.jpg" alt="">
                                                                       </div>
                                                                       <div class="widget-content-left">
                                                                           <div class="widget-heading">Ruben Tillman</div>
                                                                           <div class="widget-subheading">UI Designer</div>
                                                                       </div>
                                                                       <div class="widget-content-right">
                                                                           <div class="font-size-xlg text-muted">
                                                                               <small class="opacity-5 pr-1">$</small>
                                                                               <span>54</span>
                                                                               <small class="text-success pl-2">
                                                                                   <i class="fa fa-angle-up"></i>
                                                                               </small>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </li>
                                                       </ul>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>-->
                        </section>
</template>
<script>
 // import swal from "sweetalert2";
 import BarChart from "../bargraph/dashboard.vue";
import AppMixins from "../../Mixins/shared";
export default {
  name: "AddStock",
  mixins: [AppMixins],
  components: { BarChart },
  data() {
    return {
      chartWidth: 100, // Adjust as needed
      chartHeight: 100, // Adjust as needed
      
      userbody: {},
      allstockitems:{},
      alltobereordered:{},
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
  
    async GetLoggedInUser() {
      var response = await this.Gettingloggedinuser();
      this.userbody = response.body;
      console.log("Logged in user __________ email:", this.userbody);
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

      // Display the totalDeliveredValue in your HTML
      const totalDeliveredValueElement = document.getElementById("totalDeliveredValue");
      const totalDamagedQuantityElement = document.getElementById("totalDamagedQuantity");
      const totalAvailableStockElement = document.getElementById("totalAvailableStock");
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
  }
}
</script>
<style>




.card-list-table {
    background: white;
   
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
    #blinking-button {
  position: fixed;
  top: 0;
  margin-left: 930px;
  font-size: 15px;
  font-family: inter;
  font-weight: medium;
  color: rgb(235, 232, 68);
  width: 120px;
  background-color: orange;
  border: none;
  border-radius: 48px 0;
  padding: 8px 35px;
  animation: blink 1s linear infinite;
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