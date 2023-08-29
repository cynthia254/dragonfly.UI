<template>
    <link
      href="https://fonts.googleapis.com/css?family=Inter:500,700"
      rel="stylesheet"
    />
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>
  
    <section>
      <header class="top">
        <div class="frame-24" style="width: 40px;margin-left: 25px;">
        <img
          alt=""
          class="payhouse-logo-1"
          src="../../assets/images/payhouse.png"
        />
      </div>
        <nav style="margin-right: 90px;white-space: nowrap;color: white;margin-top: 15px;">
         <ul>
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
             <a href="" style="font-size: 15px;font-family:inter;font-weight:medium">Inventory</a>
             <ul>
               <li>
                 <a href="/brand" style="font-size: 16px;font-family:inter;font-weight:medium">Manage ProductBrand</a>
               </li>
               <li>
                 <a href="/addItem" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Item</a>
               </li>
               <li>
                 <a href="/category" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Category</a>
               </li>
               
               <li><a href="/device" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Devices</a></li>
  
              
              </ul>
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
    </section>
    <div class="" style="width: 95%; margin: 60px auto">
      <div class="row">
        <div class="col">
          <nav aria-label="breadcrumb" class="bg-light  p-3 mb-4" style="border-radius: 12px;">
            <ol class="breadcrumb mb-0">
              <li
                class="breadcrumb-item"
                style="font-family: inter; font-size: 16px"
              >
                <a href="/stockdashboard" style="color: gray">Home</a>
              </li>
              <li
                class="breadcrumb-item"
                style="font-family: inter; font-size: 16px"
              >
                <a href="/pocomplete" style="color: gray"
                  >Manage POS With Capture Complete</a
                >
              </li>
              <li
                class="breadcrumb-item active"
                aria-current="page"
                style="font-family: inter; font-size: 16px;color: #ff8c22;"
              >
                Manage PO Items
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="table-wrapper">
        <div
          class="table-title"
          style="
            background: white;
            box-shadow: 3px 2px 3px rgba(0, 0, 0, 0.2);border-radius:12px;height:71px;
          "
        >
          <div class="row">
            <div class="col-sm-6">
              <h2 style="font-size: 1.50rem; color: var(--grey, #1E1E1E);
  text-align: center;
  
  /* H3 */
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;margin-top: 10px;; height: 1.81rem; border-width: 0.06rem; margin-left: 34px; top: 1.25rem; padding-top: 0.88rem; padding-bottom: 0.88rem; padding-left: 1.19rem; padding-right: 1.19rem; gap: 59.19rem;font-family:inter;white-space: nowrap;width: fit-content;">
                            PO ITEM LIST
                          </h2>
            </div>
            <div
              class="form-control"
              style="
                margin-top: 30px;
                border: 0;
                border-radius: 10px;
                margin: center;
  
                background: #fff;
                box-shadow: 0px 8px 27px 0px rgba(136, 133, 133, 0.25);
              "
            >
    <div>
      <div>
        <div>
      <div class="row mx-5 d-flex align-items-center">
        <!-- Search input -->
        <div class="col-sm-6 d-flex">
          <div class="search">
            <!-- Search input code... -->
            <div class="search" style="margin-left: 450px; margin-top: 5px; display: flex">
            <span class="form-control-feedback">
              <svg style="position:absolute;margin-top:12px;margin-left: 20px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </span>
            <input
              type="search"
              id="gsearch"
              name="gsearch"
              placeholder="   Search"
              style="width: 280px;text-align: center;height:40px;"
              v-model="searchword"
            />
            <img src="../../assets/images/filter.svg" style="width: 24px;height:24px;position: absolute;margin-left: 250px;margin-top:6px"/>
          </div>
          </div>
        </div>
          <!-- Complete button and animation text -->
      <div class="col-sm-6 d-flex align-items-center justify-content-end">
  <!-- Show the Complete button when allItemsAdded is true and captureStatus is not Complete -->
  <div v-if="showMovingText && !allDeliveryStatusComplete" class="moving-animation">
  <p @click="showCompleteButton" class="move-text" style="color: purple;font-size: 15px;"><span style="font-weight: bolder;">N/B:</span>    Click me if all delivery status is complete.</p>
</div>
<div v-else-if="!allItemsAdded && !isCaptureStatusComplete">
  <button @click="markComplete" class="complete-button">Complete</button>
</div>

<div v-else-if="allDeliveryStatusComplete">
  <p style="color: gray">All items have been delivered and are marked as complete.</p>
</div>
</div>


  
      </div>
    </div>
    </div>
  </div>
            
              <div class="table-wrapper" >
                <div class="table-title">
                  <div class="">
                    <div class="col-sm table-responsive ">
                      <table
                        id="purchaseList"
                        class="table table-hover table-bordered"
                        style="overflow: hidden"
                      >
                        <thead
                          style="
                            background-color: #f3e6da;
                            font-family: inter;
                            font-weight: bold;
                            font-size: 16px;
                            text-overflow: ellipsis;
                            overflow: hidden;
                           
                          "
                        >
                          <tr>
                            <th>Item ID</th>
                            <th>Item Name</th>
                            <th style="width:130px">Category Name</th>
                            <th>Quantity</th>
                            <th style="width:150px">Unit Price</th>
                            <th>Warranty<br><span style="font-size:11px;font-weight: bolder;color: gray;">(In Months)</span></th>
                            <th style="width:130px">Warranty Start Date</th>
                            <th style="width:120px">Warranty End Date</th>
                            <th>Updated By</th>
                            <th>Updated on</th>
                            <th style="width:150px">Delivery Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                    
                            v-for="(invoicelines, index) in this.invoiceItemBody"
                            :key="invoicelines.id"
                            @click.prevent="
                            addDeliveryNumber(
                              invoicelines
                            )" 
                            style="
                              font-family: inter;
                              font-size: 16px;
                              font-weight: medium;
                              color: gray;
                              overflow: hidden;
                            "
                          >
                            <td>{{ index + 1 }}</td>
                            <td style="white-space: normal">
                              {{ invoicelines.brandName }}
                              {{ invoicelines.itemName }}
                            </td>
                            <td>{{ invoicelines.categoryName }}</td>
                            <td>{{ invoicelines.quantity }}</td>
                            <td style="white-space: nowrap;">{{ invoicelines.currency }} {{formatCurrency (invoicelines.unitPrice )}}</td>
                            <td>{{ invoicelines.warranty }}</td>
                            <td>
                              {{
                                getFormattedDate(invoicelines.warrantyStartDate)
                              }}
                            </td>
                            <td>
                              {{ getFormattedDate(invoicelines.warrantyEndDate) }}
                            </td>
                            <td style="white-space: normal">
                              {{ invoicelines.updatedBy }}
                            </td>
                            <td style="white-space: normal">
                              {{ formatDate(invoicelines.updatedOn) }}
                            </td>
                            <td :style="getStatusStyle(invoicelines)">
                              {{ invoicelines.productStatus }}
                            </td>
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
      </div>
    </div>
    
  </template>
  <script>
  import swal from "sweetalert2";
  import AppMixins from "../../Mixins/shared";
  import moment from "moment";
  export default {
    name: "POLinesWithCaptureComplete",
    mixins: [AppMixins],
    data() {
      return {
        showModal: false,
        allinvoice: [],
        allitems: [],
        showMovingText: true,
        allcategory: [],
        allbatch: [],
        invoiceItemBody: [],
        userbody: {},
    allDeliveryStatusComplete: false,
        allbrands:[],
        itenbrandBody:[],
        searchword:"",
        showallstock:true,
        showallstocksearch:false,
        allItemsAdded: false, 
        formdata: {
          InvoiceSelected: "",
          itemSelected: "",
          Quantity: "",
          warranty: "",
          currency: "",
          unitPrice: "",
          brandSelected: "",
          warrantStartDate: "",
        },
      };
    },
 
  
    methods: {
      adddeliveryNumbr() {
    // Your existing logic to add delivery number...

    // Check if all delivery statuses are complete
    this.allDeliveryStatusComplete = this.invoiceItemBody.every(item => item.productStatus === 'Complete');
  },
      showCompleteButton() {
    this.showMovingText = false;
  },

      async GetAllInvoice() {
        const response = await this.gettingAllPOS();
        this.allinvoice = response.body;
  
        console.log("invoice response: ", response);
  
        console.log("allinvoice: ", this.allinvoice);
        return response;
      },
      async GetAllBrands() {
        const response = await this.gettingAllBrands();
        this.allbrands = response.body;
  
        console.log("Brands response: ", response);
  
        console.log("allbrands: ", this.allbrands);
        return response;
      },
      async GetLoggedInUser() {
        var response = await this.Gettingloggedinuser();
        this.userbody = response.body;
        console.log("Logged in user __________ email:", this.userbody);
      },
      async GetAllItems() {
        const response = await this.gettingAllItems();
        this.allitems = response.body;
  
        
  
        console.log("allitems: ", this.allitems);
        return response;
      },
       formatCurrency(value) {
    // Convert the value to a string
    const stringValue = String(value);
  
    // Split the string into integer and decimal parts (if any)
    const [integerPart, decimalPart = ''] = stringValue.split('.');
  
    // Add commas to the integer part
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
    // Combine the formatted integer part with the decimal part (if any)
    const formattedValue = decimalPart ? `${formattedIntegerPart}.${decimalPart}` : formattedIntegerPart;
  
  
    return formattedValue;
  
  },
  
  async markComplete() {
    const response = await this.markingpocompleteatDelivery(this.poNumber);
    console.log("form body is: ", response);
  
    if (response.isTrue == true) {
      swal.fire({
        heightAuto: false,
        html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
      });
  
      // Reset allItemsAdded to hide the button and animation
      this.allItemsAdded = false;
  
      // Fetch updated data and perform any necessary actions
      await this.gettingitembyinvoice();
      this.$router.push({
        path: `/PoItemLines/${this.poNumber}`,
        replace: true,
      });
  
      // Reload after a short delay
      setTimeout(() => {
        location.reload();
      }, 700);
  
      this.$refs.myForm.reset();
    } else {
      swal.fire({
        heightAuto: false,
        html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
      });
    }
  },
  
      async GetAllCategory() {
        const response = await this.gettingCategory();
        this.allcategory = response.body;
  
        console.log("Brands response: ", response);
  
        console.log("allbrands: ", this.allcategory);
        return response;
      },
      formatPrice(value) {
          let val = (value/1).toFixed(2).replace('.', ',')
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      },
      getStatusStyle(invoicelines) {
        if (invoicelines.productStatus === "Complete") {
          return {
            color: "green",
            
          };
        } else if (invoicelines.productStatus === "Incomplete") {
          return {
            color: "red",
          };
        } else {
          return "";
        }
      },
      async pushPO(poNumber) {
        console.log("PO Number is:", poNumber);
        this.$router.push({
          path: `/PoItemLines/${poNumber}`,
          replace: true,
        });
      },
  
      async gettingitembyinvoice() {
        var poNumber = this.poNumber;
        var response = await this.gettingitemsinPO(poNumber);
        this.invoiceItemBody = response.body;
        this.captureStatus = this.invoiceItemBody.captureStatus;
        console.log("capture status>>>>>>>>>>>>>>>>>>>>>>>>>",this.captureStatus);
        console.log("response on invoice body: : ", this.invoiceItemBody);
      },
      async gettingitembybrand() {
        var brandName = this.formdata.brandSelected;
        var response = await this.gettingitembybrandname(brandName);
        this.itenbrandBody = response.body;
        console.log("response on brand item body: : ", this.itenbrandBody);
      },
      async editinvoiceitem(invoiceLineId, categoryname) {
        if (categoryname == "Product") {
          console.log("Invoice Number is:", invoiceLineId);
          this.$router.push({
            path: `/invoice_item/${invoiceLineId}`,
            replace: true,
          });
        } else {
          return swal.fire({
            heightAuto: false,
            html: `<p class="text-danger" style="font-size:23px;font-family:inter;margin-top:22px">Oops! Nothing else to be added on accesory</p>`,
          });
        }
      },
  
      async getitnginvoicebyname() {
        var invoiceNumber = this.invoiceNumber;
        var response = await this.gettinginvoicebynumber(invoiceNumber);
        this.invoiceBody = response.body;
        console.log("response on returnned body: : ", this.invoiceBody);
        //console.log("body returned: ",this.stockBody);
      },
      formatDateAssigned(value) {
        let formattedDate = new Date(value);
        formattedDate = `${formattedDate.toDateString()} at ${formattedDate.toLocaleTimeString()}`;
        return formattedDate;
      },
      formatDate(dateString) {
        const date = new Date(dateString);
  
        return date.toLocaleDateString() + " " + date.toLocaleTimeString();
      },
      getFormattedDate(date) {
        return moment(date).format("YYYY-MM-DD");
      },
      async editInvoice(invoiceNumber) {
        console.log("Invoice Number is:", invoiceNumber);
        this.$router.push({
          path: `/editinvoice/${invoiceNumber}`,
          replace: true,
        });
      },
  
      async GetAllSuppliers() {
        const response = await this.gettingAllSuppliers();
        this.allsuppliers = response.body;
        console.log("allsuppliers: ", this.allsuppliers);
        return response;
      },
      async searchinvoicelines() {
        this.showallstock = false;
        this.showallstocksearch = true;
        var resp = await this.SearchingInvoiceLines(this.searchword);
        this.invoiceItemBody = resp.body;
        console.log("search  return body: ", resp.body);
      },
   
      async addDeliveryNumber(invoicelines) {
        this.$router.push({
          path: `/adddelivery/${invoicelines.id}`,
          replace: true,
        });
    //else {
     //return swal.fire({
      // heightAuto: false,
      // html: `<p class="text-danger" style="font-size:23px;font-family:inter;margin-top:22px">Oops! Nothing else to be added on accesory</p>`,
    // });
 //  }
 },
    },
   
    
    watch: {
      
      'formdata.brandSelected':function(newvalue) {
       console.log("selected_value: ", newvalue);
       if(newvalue !=""){
        this.gettingitembybrand();
       }
      },
      searchword(passedvalue) {
        if (passedvalue != "") {
         this.searchinvoicelines();
        } else {
          this.gettingitembyinvoice();
        }
    
    },
 
    },
   
      
    created() {
      this.poNumber=this.$route.params.id;
          console.log("item id:",this.poNumber);
          this.id=this.$route.params.id;
        console.log("item id:",this.invoiceItemBody.id);
      this.GetAllInvoice();
      this.GetAllSuppliers();
      this.gettingitembyinvoice();
      this.GetAllItems();
      this.GetAllCategory();
      this.GetLoggedInUser();
      this.GetAllBrands();
    },
   
  };
  </script>
  <style>
  .modal-mask {
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
    width: 100%;
    height: 100%;
  }
  
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  
  .table {
    table-layout: fixed;
    word-wrap: break-word;
  }
  th
   {
    overflow: hidden;
  }
  .moving-animation {
    overflow: hidden;
    height: 30px;
    margin-top: 10px;
  }
  
  .move-text {
    white-space: nowrap;
    font-family: inter;
    font-size: 14px;
    color: gray;
    animation: moveText 10s linear infinite;
  }
  .complete-button {
    margin-left: 200px;
    color: green;
    font-size: 14px;
    padding: 8px 16px;
    background-color: white;
    border: 1px solid green;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .complete-button:hover {
    background-color: green;
    color: white;
  }
  
  /* Animation styles */
  .moving-animation {
    overflow: hidden;
    height: 30px;
    margin-top: 10px;
  }
  
  .move-text {
    white-space: nowrap;
    font-family: inter;
    font-size: 14px;
    color: gray;
    animation: moveText 10s linear infinite;
  }
  
  @keyframes moveText {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  @keyframes moveText {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  </style>
  