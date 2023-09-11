<template>
  <div class=""  style="background: green;">
    <link
      href="https://fonts.googleapis.com/css?family=Inter:500,700"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css"
    />
  
    <section  style="background-color: blue;">
      <header class="top">
        <div class="img" style="width:40%; margin-left:5%;">
          <img
            alt=""
            class="payhouse-logo-1"  
            src="../../assets/images/payhouse.png"
          />
        </div>
        <nav
          style="
            margin-right: 90px;
            white-space: nowrap;
            color: white;
            margin-top: 15px;
          "
        >
          <ul>
            <li>
              <a
                href="/stockdashboard"
                style="font-size: 16px; font-family: inter; font-weight: medium"
                >Home</a
              >
            </li>
            <li class="dropDown-menu fixed-top">
              <a
                href=""
                style="font-size: 16px; font-family: inter; font-weight: medium"
                >Stock Users</a
              >
              <ul>
                <li class="dropDown-menu fixed-top">
                  <a
                    href=""
                    style="
                      font-size: 16px;
                      font-family: inter;
                      font-weight: medium;
                    "
                    >Recipient</a
                  >
                  <ul>
                    <li>
                      <a
                        href="/customer"
                        style="
                          font-size: 16px;
                          font-family: inter;
                          font-weight: medium;
                        "
                        >Manage Recipient</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="dropDown-menu fixed-top">
                  <a
                    href=""
                    style="
                      font-size: 16px;
                      font-family: inter;
                      font-weight: medium;
                    "
                    >Suppliers</a
                  >
                  <ul>
                    <li>
                      <a
                        href="/supplier"
                        style="
                          font-size: 16px;
                          font-family: inter;
                          font-weight: medium;
                        "
                        >Manage Suppliers</a
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li class="dropDown-menu fixed-top">
              <a
                href=""
                style="font-size: 15px; font-family: inter; font-weight: medium"
                >Inventory</a
              >
              <ul>
                <li>
                  <a
                    href="/brand"
                    style="
                      font-size: 16px;
                      font-family: inter;
                      font-weight: medium;
                    "
                    >Manage ProductBrand</a
                  >
                </li>
                <li>
                  <a
                    href="/addItem"
                    style="
                      font-size: 16px;
                      font-family: inter;
                      font-weight: medium;
                    "
                    >Manage Item</a
                  >
                </li>
                <li>
                  <a
                    href="/category"
                    style="
                      font-size: 16px;
                      font-family: inter;
                      font-weight: medium;
                    "
                    >Manage Category</a
                  >
                </li>
  
                <li>
                  <a
                    href="/device"
                    style="
                      font-size: 16px;
                      font-family: inter;
                      font-weight: medium;
                    "
                    >Manage Devices</a
                  >
                </li>
  
                <li>
                  <a
                    href="/addStock"
                    style="
                      font-size: 16px;
                      font-family: inter;
                      font-weight: medium;
                    "
                    >Manage Stock</a
                  >
                </li>
              </ul>
            </li>
  
            <li style="">
              <a
                style="
                  display: flex;
                  margin-left: 100px;
                  font-size: 16px;
                  font-family: inter;
                  font-weight: medium;
                "
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="white"
                  class="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fill-rule=""
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
                <p style="margin-left: 7px">
                  {{ userbody.firstName }} {{ userbody.lastName }}
                </p></a
              >
            </li>
          </ul>
        </nav>
      </header>
    </section>

    </div>
    <div class="" style="width: 95%; margin-left: 25px; margin-top: 60px">
      <div class="row">
        <div class="col">
          <nav
            aria-label="breadcrumb "
            class="bg-light p-3 mb-4"
            style="border-radius: 12px"
          >
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
                <a href="/issueitems" style="color: gray"
                  >Manage Issue Items</a
                >
              </li>
  
              <li
                class="breadcrumb-item active"
                aria-current="page"
                style="font-family: inter; font-size: 16px; color: #ff8c22"
              >
               Issue Serial Numbers
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
        height: 50px;
        box-shadow: 3px 2px 3px rgba(0, 0, 0, 0.2);
        border-radius: 12px;
        height: 71px;
      "
    >
    <div class="row justify-content-between align-items-center">
        <div class="col-sm-6">
          <h2
            style="
              font-size: 1.5rem;
              color: var(--grey, #1e1e1e);
              text-align: center;
              font-size: 16px;
              font-style: normal;
              font-weight: 700;
              margin-top: 10px;
              line-height: normal;
              height: 1.81rem;
              border-width: 0.06rem;
              padding: 0.88rem 1.19rem;
              gap: 59.19rem;
              font-family: inter;
              white-space: nowrap;
              width: fit-content;
            "
          >
            ISSUED SERIAL NUMBER LIST
          </h2>
        </div>

        <div class="col-lg-6 col-md-6 col-sm-8 col-xs-12 d-flex justify-content-end align-items-center">

            <h2
              style="
                font-size: 24px;
                color: blue;
                margin: 0;
                font-family: inter;
                margin-right:200px;
                display: flex;
                
                
              "
              id="blinking-text"
            >
               Quantity: <span style="font-size: 24px;" >{{ this.requisitionbody.quantity }}</span>
            </h2>
          <button
            @click="showModal = true"
            type="button"
            name="addPurchase"
            id="addPurchase"
            class="btn btn- btn-sm rounded-0"
            style="
              width: 200px;
              margin-right: 10px;
              border-radius: 4px;
              font-family: inter;
              background: #ff8c22;
              color: white;
              text-align: center;
              height: 34px;
            "
          >
            <h2
              style="
                font-size: 14px;
                color: white;
                margin: 0;
                font-family: inter;
              "
            >
              Issue Serial Numbers
            </h2>
          </button>
          
        
        </div>
        

        <transition name="modal">
    <div
      id="purchaseModal"
      class="modal-mask fixed-top"
      v-if="showModal"
      style="position: fixed; width: 100%; margin-top: 0px; align-items: center;"
    >
      <div class="modal-wrapper" style="vertical-align: middle; display: table-cell;">
        <div
          class="modal-dialog modal-dialog-centered"
          style="align-content: center; margin-top: 10px; margin-left: 300px;"
        >
          <div
            class="modal-content"
            style="width: 70%; margin-left: 50px; margin-top: 5px; background: #f5f5f5; border-radius: 18px; height: 70%;"
          >
            <div class="modal-header">
              <h4 class="modal-title" style="margin-left: 40px; margin-top: 20px; font-family: inter; font-size: 22px;">
                Issued Serial Numbers
              </h4>
              <button @click="showModal = false" type="button" class="btn-close" data-bs-dismiss="modal" style="margin-right: 30px;"></button>
            </div>
            <div class="modal-body" style="width: 70%; margin-left: 50px; vertical-align: middle; align-content: center;">

              <h2 style="font-size: 28px; color: blue; margin: 10px 0; font-family: inter;" id="blinking-text">
                Quantity:
                <span style="font-size: 24px;" >
                  {{ this.requisitionbody.quantity }}
                </span>
              </h2>

              <div class="form-group" v-if="datearea">
  <label style="font-family: inter; font-size: 16px;">Select Serial Numbers</label>
  <div v-for="brands in allinvoiceitems" :key="brands.batchID">
    <label>
      <input
        type="checkbox"
        :value="brands.serialNumber"
        v-model="selectedSerialNumbers"
        style="background-color: #f5f5f5; font-family: inter; font-size: 13px; color: gray;"
      />
      {{ brands.serialNumber }}
    </label>
  </div>
</div>


              <div class="form-group" style="margin-top: 10px">
                <input @click.prevent="IssuingProcusee()" type="submit" class="btn btn-success btn-sm" value="Issue" form="purchaseForm" style="margin-bottom: 30px; margin-left: 70px; width: 60%; font-family: inter; font-size: 13px;" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
            <div
              class="form-control"
              style="
                margin-top: 30px;
                margin-left: 10px;
  
                background: #fff;
                box-shadow: 0px 8px 27px 0px rgba(136, 133, 133, 0.25);
                border: 0;
                border-radius: 10px;
              "
            >
              <div class="row mx-5 ">
                <div class="col-sm-6 d-flex mt-2">
                  <div
                    class="search"
                    style="margin-left: 450px; margin-top: 5px; display: flex"
                  >
                    <span class="form-control-feedback"
                      ><svg
                        style="
                          position: absolute;
                          margin-top: 12px;
                          margin-left: 20px;
                        "
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                        /></svg
                    ></span>
          <input
                      type="search"
                      id="gsearch"
                      name="gsearch"
                      placeholder="   Search"
                      style="width: 280px; text-align: center; height: 40px"
                      v-model="searchword"
                    />
                    <img
                      src="../../assets/images/filter.svg"
                      style="
                        width: 24px;
                        height: 24px;
                        position: absolute;
                        margin-left: 250px;
                        margin-top: 6px;
                      "
                    />
                  </div>
                </div>
              </div>
 <div class="table-wrapper  ">
                <div class="table-title">
                  <div class="">
                    <div class="col-sm table-responsive">
  <table class="table table-bordered" >
    <thead>
      <tr>
          <th style="width: 50px">ID</th>
          <th style="width: 120px">Serial Number</th>
          <th style="width: 120px">Serial Number Status</th>
      </tr>
      <tr v-for="(invoice_data , index) in data_formBody" v-bind:key="invoice_data.issueID ">
        <td>{{ index + 1 }}</td>
      <td  >{{ invoice_data.serialNumber }}</td>
      <td  >{{ invoice_data.serialStatus }}</td>
      </tr>
    </thead>
  
   </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container w-100 " id="downloadagreement" style="height: 1300px;">
    <div class="frame-24" style="display: flex; justify-content: center; align-items: center; margin-top: 5px;">
        <img alt="Payhouse Logo" class="payhouse-logo-1" src="../../assets/images/payhouse.png" style="max-height: 100%; max-width: 100%;">
    </div>
    <h1 style="font-size: 12px;margin-top: 5px;font-weight: bold;">DELIVERY NOTE</h1>
    <div class="" style="margin-left: auto; margin-right: 25px; margin-top: 30px; text-align: right;">
        <p>DATE: {{ getFormattedDate(requisitionbody.issuedByDate) }}</p>
    </div>
    

    <table style="margin-top: 10px;">
        <tr>
            <td style="display: flex; text-align: right;">Item Description:</td>
            <td style="text-align: left;">{{ requisitionbody.brandName }} {{ requisitionbody.itemName }}</td>
        </tr>
        <!-- Other Information -->
        <tr>
            <td style="text-align: right;">Quantity:</td>
            <td style="text-align: left;">{{ requisitionbody.quantity }} Pieces</td>
        </tr>
        <tr>
            <td style="text-align: right;">Serial Numbers:</td>
            <td style="text-align: left;">As Attached</td>
        </tr>
        <tr>
            <td style="text-align: right;">Manufacturer:</td>
            <td style="text-align: left;">Feitian Technologies Limited</td>
        </tr>
        <tr>
            <td style="text-align: right;">Supplier:</td>
            <td style="text-align: left;">Payhouse Limited</td>
        </tr>
        <tr>
            <td style="text-align: right;">Client Name:</td>
            <td style="text-align: left;">{{ requisitionbody.clientName }}</td>
        </tr>
    </table>
    <div style="margin-top: 20px;">
        <div style="text-align: left;">
            <h4>Delivered By:</h4>
            <p>Name: __________________________________</p>
            <p>Signature & Stamp: _________________________</p>
            <p>Date: _____________________________________</p>
        </div>
        <div style="text-align: left;">
            <h4>Received By:</h4>
            <p>Name: ____________________________________</p>
            <p>Signature & Stamp: _________________________</p>
            <p>Date: ____________________________________</p>
        </div>
    </div>
   
    <div class="footer" style="text-align: left; margin-top: 15px;">
    <h2 style="margin:0;color: rgb(189, 16, 16); font-family: inter; font-size: 6px;">Payhouse Limited Mukima Drive</h2>
    <p style="margin: 0;font-size: 6px;">P.O BOX 3343-00621 Nairobi, Kenya</p>
    <p style="margin: 0;font-size: 6px;">T: +254 720 494 210, +254 704 633 455</p>
    <p style="margin: 0;font-size: 6px;">Email: sales@payhouse.co.ke Website: payhouse.co.ke</p>
</div>

<div class="table-wrapper w-100 " v-if="requisitionbody.categoryName !== 'Accessory'">
  <h1 style="margin-top: 40px;font-size:15px;font-weight: bolder;">{{ requisitionbody.clientName }}</h1>
                <div class="table-title">
                  <div class="">
                    <div class="col-sm table-responsive table-bordered">
                      <table class=" table table-hover table-bordered" style="width: 100%; margin-left: 0px;">
  <thead style="background-color:  rgb(247, 210, 89);font-family: inter;font-weight: bold;font-size: 16px;white-space: nowrap;">
        

      <tr>
          <th style="width: 50px">ID</th>
          <th style="width: 120px">Serial Number</th>
          <th style="width: 120px">IMEI 1</th>
          <th style="width: 120px">IMEI 2</th>
      </tr>
    </thead>
  
      <tr v-for="(invoice_data , index) in data_formBody" v-bind:key="invoice_data.issueID " style="font-family: inter;font-size: 16px;font-weight: medium;color: gray;  ">
        <td>{{ index + 1 }}</td>
      <td  >{{ invoice_data.serialNumber }}</td>
      <td  >{{ invoice_data.imeiI1 }}</td>
      <td  >{{ invoice_data.imeI2 }}</td>
      </tr>
    
   </table>
                    </div>
                  </div>
                </div>
                </div>
             
           
          
</div>

<div style="margin-top: 20px; display: flex; justify-content: center;">
    <button @click.prevent="generatePdf()" class="btn btn-primary">
        Download DNote
    </button>
</div>

</div>

</div>

</div>


    </div>
   
  
  
   
  </template>

  <script>
  import html2pdf from "html2pdf.js";
  import swal from "sweetalert2";
  import AppMixins from "../../Mixins/shared";
  import moment from "moment";
  export default {
    name: "IssuingSerial",
    mixins: [AppMixins],
    data() {
      return {
        showModal: false,
        allinvoice: [],
        invoiceBody: [],
        userbody: {},
        invoiceNumber: "",
        searchword: "",
        showallstock: true,
        showallstocksearch: false,
        allstockitems: {},
        alldepartment: {},
        allusers: {},
        allcustomers: {},
        data_formBody: [],
        allbrands: {},
        id: "",
        requisitionbody:[],
        selectedSerialNumbers: [], 
        allinvoiceitems:{},
        datearea: false,
        formdata: {
            selectedSerialNumber: "",
        },
      };
    },
    methods: {
      generatePdf() {
      const val = Math.floor(10000 + Math.random() * 90000);
      var number =
        Math.floor(1000 + Math.random() * 9000) +
        Math.floor(10000 + Math.random() * 90000);
      number = number + 1;
      let pdfName = "DeliveryNote";

      const element = document.getElementById("downloadagreement");
      const opt = {
        margin: 0.5,
        filename: pdfName + val + number + ".pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };

      html2pdf().set(opt).from(element).save();

      this.spinner = false;
    },
      async GetAllInvoice() {
        const response = await this.GettingRequisiotin();
        this.allinvoice = response.body;
  
        console.log("invoice response: ", response);
  
        console.log("allinvoice: ", this.allinvoice);
        return response;
      },
  
      async GetLoggedInUser() {
        var response = await this.Gettingloggedinuser();
        this.userbody = response.body;
        console.log("Logged in user __________ email:", this.userbody);
      },
      formatDate(dateString) {
        const date = new Date(dateString);
  
        return date.toLocaleDateString() + " " + date.toLocaleTimeString();
      },
      formatDateAssigned(value) {
        let formattedDate = new Date(value);
        formattedDate = `${formattedDate.toDateString()} at ${formattedDate.toLocaleTimeString()}`;
        return formattedDate;
      },
      getFormattedDate(date) {
  const formattedDate = moment(date).format("Do MMMM YYYY");
  return formattedDate;
},

      async editInvoice(invoiceNumber) {
        console.log("Invoice Number is:", invoiceNumber);
        this.$router.push({
          path: `/invoiceItems/${invoiceNumber}`,
          replace: true,
        });
      },
      async IssuingProcusee() {
    

        const expectedQuantity = this.requisitionbody.quantity;
        console.log("expected quantitiy ix]s:::::",expectedQuantity);

     
  const promises = this.selectedSerialNumbers.map(async (serialNumber) => {
    const body = {
      serialNumber,
      issueID: this.id,
    };

    const response = await this.selectSerialNumber(body);

    return { serialNumber, response };
  });

  const results = await Promise.all(promises);

  results.forEach((result) => {
    if (result.response.isTrue === true) {
      swal.fire({
        heightAuto: false,
        html: `<h5 class="text-success" style="font-family: inter; margin-top: 22px">${result.response.message}</h5>`,
      });
      this.$router.push({
        path: `/issuingSerial/${this.id}`, 
          replace: true,
        });


        setTimeout(()=>{
          location.reload();

        },700)
    } else {
      swal.fire({
        heightAuto: false,
        html: `<h5 class="text-danger" style="font-family: inter; margin-top: 22px">${result.response.message}</h5>`,
      });
    }
  });

  this.selectedSerialNumbers = []; // Clear selected serial numbers
  this.gettingformbyid();
},

     
  
      async gettingformbyid() {
        const response = await this.gettingselectedserial(this.id);
        this.data_formBody = response.body;
  
        console.log(
          "_________________________form body is    ____+_______________________: ",
          response.body
        );
  
        console.log("form body with id >>>>>>>>>>>>>>>>: ", this.data_formBody);
        return response;
      },
      async gettingrequisitonbyid() {
        const response = await this.getFormbyId(this.id);
        this.requisitionbody = response.body;
  
        console.log(
          "_________________________requisitiion body  is    ____+_______________________: ",
          response.body
        );
  
        console.log("quantiy with id >>>>>>>>>>>>>>>>: ", this.requisitionbody.quantity);
        return response;
      },
      async GetAllSerialNumbers(){

const response= await this.StatusNotIssued();
this.allinvoiceitems=response.body;
console.log("allinvoiceitems: ", this.allinvoiceitems);
return response;

},
    },
  
    created() {
      this.id = this.$route.params.id;
      console.log("Id>>>>>>>>>>>>>>> :", this.id);
      this.GetAllInvoice();
     this.GetLoggedInUser();
      this.gettingformbyid();
      this.gettingrequisitonbyid();
      this.GetAllSerialNumbers();
      this.gettingselectedserial(this.id).then(response => {
    // Do something with the response, such as updating the data or performing other actions
    this.data_formBody = response.body;
  });

    },
    watch: {
  'requisitionbody.categoryName': function(newValue) {
    if (newValue === "Accesory") {
      this.datearea = false;
    } else {
      this.datearea = true;
    }
  },
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
@keyframes blink {
  0%, 100% {
    color: rgb(30, 235, 23);
  }
  50% {
    color: rgb(229, 231, 80);
  }
}

@keyframes blink {
  0%, 100% {
    color: rgb(30, 235, 23);
  }
  50% {
    color: rgb(55, 172, 226);
  }
}

@keyframes blink {
  0%, 100% {color:rgb(30, 235, 23);}
  50% {color: rgb(68, 15, 192);}
}
#blinking-text {
  animation: blink 1s linear infinite;

}
  </style>
  