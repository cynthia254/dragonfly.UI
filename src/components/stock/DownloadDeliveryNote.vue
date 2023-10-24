<template>
   <div>
    <!-- Back button container -->
    <div class="back-button-container">
      <!-- Back button SVG -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        class="bi bi-arrow-left"
        viewBox="0 0 16 16"
        @click="goBack"
      >
        <path
          fill-rule="evenodd"
          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
        />
      </svg>
    </div>
  </div>
      <div class="container w-100 " id="downloadagreement" style="height: 1300px;box-shadow: none;">
    <div class="frame-24" style="display: flex; justify-content: center; align-items: center; margin-top: 5px;">
        <img alt="Payhouse Logo" class="payhouse-logo-1" src="../../assets/images/payhouse.png" style="max-height: 100%; max-width: 100%;">
    </div>
    <h1 style="font-size: 12px;margin-top: 5px;font-weight: bold;">DELIVERY NOTE</h1>
    <div class="" style="margin-left: 25px; margin-right: auto; margin-top: 5px; text-align: left;">
    <p style="font-weight: bold;">REF: {{ requisitionbody.orderNumber }}/{{requisitionbody.id}}</p>
</div>
<div class="" style="margin-left: auto; margin-right: 25px; margin-top: 10px; text-align: right;">
    <p style="font-weight: bold;">DATE: {{ getFormattedDate(requisitionbody.issuedByDate) }}</p>
</div>


    <table style="margin-top: 10px;">
        <tr>
            <td style="display: flex; text-align: right;">Item Description:</td>
            <td style="text-align: left;">{{ requisitionbody.brandName }} {{ requisitionbody.itemName }}</td>
        </tr>
        <!-- Other Information -->
        <tr>
            <td style="text-align: right;">Quantity:</td>
            <td style="text-align: left;">{{ requisitionbody.quantityDispatched }} Pieces</td>
        </tr>
        <tr v-if="shouldShowTable">
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
   
    <div class="footer" style="text-align: left; margin-top: 0px;">
    <h2 style="margin:0;color: rgb(189, 16, 16); font-family: inter; font-size: 6px;">Payhouse Limited Mukima Drive</h2>
    <p style="margin: 0;font-size: 6px;">P.O BOX 3343-00621 Nairobi, Kenya</p>
    <p style="margin: 0;font-size: 6px;">T: +254 720 494 210, +254 704 633 455</p>
    <p style="margin: 0;font-size: 6px;">Email: sales@payhouse.co.ke Website: payhouse.co.ke</p>
</div>

<div class="table-wrapper w-100" v-if="shouldShowTable">
      <h1 style="margin-top: 40px; font-size: 15px; font-weight: bolder;">{{ requisitionbody.clientName }}</h1>
      <div class="table-title">
        <div class="">
          <div class="col-sm table-responsive table-bordered">
            <table class="table table-hover table-bordered" style="width: 100%; margin-left: 0px;">
              <thead style="background-color: rgb(247, 210, 89); font-family: inter; font-weight: bold; font-size: 16px; white-space: nowrap;">
                <tr>
                  <th style="width: 50px">ID</th>
                  <th style="width: 160px">Serial Number</th>
                  <th style="width: 120px">IMEI 1</th>
                  <th style="width: 120px">IMEI 2</th>
                </tr>
              </thead>
              <tr v-for="(invoice_data, index) in data_formBody" :key="invoice_data.issueID" style="font-family: inter; font-size: 16px; font-weight: medium; color: gray;">
                <td>{{ index + 1 }}</td>
                <td>{{ invoice_data.serialNumber }}</td>
                <td>{{ invoice_data.imeiI1 }}</td>
                <td>{{ invoice_data.imeI2 }}</td>
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


</template>
<script>
  import html2pdf from "html2pdf.js";
  import swal from "sweetalert2";
  import AppMixins from "../../Mixins/shared";
  import moment from "moment";
  export default {
    name: "DownloadDnote",
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
        allinvoiceitems:{},
        datearea: false,
        formdata: {
          selectedSerialNumbers: [], 
            lpoDate:"",
            reason:"",
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
        this.formdata.selectedSerialNumbers = String(this.formdata.selectedSerialNumbers);
    const body = {
      serialNumber:this.formdata. selectedSerialNumbers,
      issueID: this.id,
      quantityDispatched:this.formdata.lpoDate,
      outStandingBalance:this.calculateOutstandingBalance,
      reason:this.formdata.reason,


    
    };

    const response = await this.selectSerialNumber(body);

    if (response.isTrue === true) {
      swal.fire({
        heightAuto: false,
        html: `<h5 class="text-success" style="font-family: inter; margin-top: 22px">${response.message}</h5>`,
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
        html: `<h5 class="text-danger" style="font-family: inter; margin-top: 22px">${response.message}</h5>`,
      });
    }
 

  this.selectedSerialNumbers = []; // Clear selected serial numbers
  this.gettingformbyid();
},

     
  
      async gettingformbyid() {
        const response = await this.GetSerialIssued(this.id);
        this.data_formBody = response.body;
  
        console.log(
          "_________________________form body is    ____+_______________________: ",
          response.body
        );
  
        console.log("form body with id >>>>>>>>>>>>>>>>: ", this.data_formBody);
        return response;
      },
      async goBack() {
        this.$router.push({
          path: `/issuingSerial/${this.requisitionbody.issueID}`,
          replace: true,
        });
   
 },
      async gettingrequisitonbyid() {
        const response = await this.GetIssuedItemByID(this.id);
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
    computed: {
    calculateOutstandingBalance() {
      const quantityOrdered = this.requisitionbody.quantity;
      const quantityToBeDispatched = this.formdata.lpoDate; // Assuming this is the input field for quantity to be dispatched
      return quantityOrdered - quantityToBeDispatched;
    },
    shouldShowTable() {
    const category = this.requisitionbody.categoryName;
    console.log("categry name isss",category);
    return category !== 'Accesory';
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
   /* Back button container */
   .back-button-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px; /* Adjust the padding to control the button size */
    cursor: pointer;
    background-color: rgb(214, 6, 6); /* Button background color */
    color: #fff; /* Rounded corners */
    transition: background-color 0.2s ease-in-out; /* Add a smooth background color transition on hover */
  }

  /* Style for the back button SVG */
  .bi-arrow-left {
    margin-right: 10px; /* Add space between the icon and text */
  }

  /* Hover effect for the button */
  .back-button-container:hover {
    background-color: #0056b3; /* Change background color on hover */
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
  