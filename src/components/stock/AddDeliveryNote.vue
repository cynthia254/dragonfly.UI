<template>
    <link href='https://fonts.googleapis.com/css?family=Inter:500,700' rel='stylesheet'>
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
            <a href="" style="font-size: 15px;font-family:inter;font-weight:medium">Batch Review</a>
            <ul>
              <li>
                <a href="/batchreview" style="font-size: 16px;font-family:inter;font-weight:medium">Approval Batch Review</a>
              </li>
            </ul>
          </li>
       
     
          
        </ul>
      </nav>
   </header>
  </section>
  <div class="" style="width: 95%; margin-left: 25px; margin-top: 60px">
  <div class="row">
       <div class="col">
         <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
           <ol class="breadcrumb mb-0">
             <li class="breadcrumb-item" style="font-family:inter;font-size:16px"><a href="/stockdashboard" style="color:gray">Home</a></li>
             <li class="breadcrumb-item " aria-current="page" style="font-family:inter;font-size:16px;color:gray"><a href="/pocomplete" style="color:gray">Manage Purchase Orders</a></li>
            
             <li class="breadcrumb-item" style="font-family:inter;font-size:16px"><a @click.prevent="pushPO()" href="" style="color:gray">Manage Purchase Ordered Items</a></li>
             
             <li class="breadcrumb-item active" aria-current="page" style="font-family:inter;font-size:16px;color:#FF8C22">Manage Batch Delivered Items</li>
           </ol>
         </nav>
       </div>
     </div>
       <div class="table-wrapper">
                   <div
                     class="table-title"
                     style="background:white; height: 71px;box-shadow: 3px 2px 3px rgba(0, 0, 0, .2);border-radius: 12px;"
                   >
                     <div class="row" >
                       <div class="col-sm-6">
                         <h2 style="font-size: 1.50rem; color: var(--grey, #1E1E1E);
 text-align: center;
 
 /* H3 */
 font-size: 16px;
 font-style: normal;
 font-weight: 700;
 line-height: normal; height: 1.81rem; border-width: 0.06rem; margin-left: 34px; top: 1.25rem;margin-top: 10px; padding-top: 0.88rem; padding-bottom: 0.88rem; padding-left: 1.19rem; padding-right: 1.19rem; gap: 59.19rem;font-family:inter;white-space: nowrap;width: fit-content;">
                           PRODUCT DETAILS LIST
                         </h2>
 
                       </div>
                       </div>
                   
      
                       <form class="row g-3" @submit.prevent="CreateItem" ref="myForm" style="margin-top: 10px;">
     <div class="row">
    
  <div>
    <div class="" >
      <div class="d-flex flex-column flex-lg-row justify-content-lg-center panel" style="margin-top: 33px;">
        <!-- Delivery Number Input -->
        <div style="width: 25%; margin-left: 10px; font-family: inter;">
          <label for="serialNumber" class="form-label">Delivery Note Number:</label>
          <input ref="serialNumberInput" v-model="formdata.deliveryNumber" @keydown.enter="moveToIMEI1" type="text" class="form-control" required placeholder="Delivery Note Number" style="border-style: none;">
        </div>
        <!-- Delivery Date Input -->
        <div v-if="formdata.deliveryNumber" style="width: 25%; margin-left: 10px; font-family: inter;">
          <label for="imei1" class="form-label">Delivery Date:</label>
          <input ref="imei1Input" v-model="formdata.deliveryDate" @keydown.enter="moveToIMEI2" type="date" class="form-control" required placeholder="Delivery Date" style="border-style: none;">
        </div>
        <!-- Batch Quantity Input -->
        <div v-if="formdata.deliveryDate" style="width: 25%; margin-left: 10px; font-family: inter;">
          <label for="imei2" class="form-label">Batch Quantity:</label>
          <input ref="imei2Input" v-model="formdata.quantity" @keydown.enter="moveToMeansOfDelivery" type="text" class="form-control" required placeholder="Quantity" style="border-style: none;">
        </div>
        <!-- Means of Delivery Input -->
        <div v-if="formdata.quantity" style="width: 25%; margin-left: 10px; font-family: inter;">
          <label for="means" class="form-label">Means of delivery:</label>
          <input ref="meansInput" v-model="formdata.means" @keydown.enter="moveToAirwayBill" type="text" class="form-control" required placeholder="Means of Delivery" style="border-style: none;">
        </div>
        <!-- Airway Bill Input -->
        <div v-if="formdata.means" style="width: 25%; margin-left: 10px; font-family: inter;">
          <label for="airway" class="form-label">Airway Bill No:</label>
          <input ref="airwayBillInput" v-model="formdata.airwaybill" @keydown.enter="CreateItem" type="text" class="form-control" required placeholder="Airway Bill No" style="border-style: none;">
        </div>
      </div>
    </div>
</div>
</div>
</form>
    <div class="form-control" style="margin-top: 5px; border: 0; border-radius: 10px; box-shadow: 0px 8px 27px 0px rgba(136, 133, 133, 0.25);">
      <div class="table-wrapper">
        <div class="table-title">
          <div class="">
            <div class="col-sm table-responsive">
              <table class="table table-hover table-bordered" style="margin-left: 40px">
                <thead style="background-color: #F3E6DA; font-family: inter; font-weight: bold; font-size: 16px;">
                  <tr>
                    <th scope="col">Batch Number</th>
                    <th scope="col">Delivery Number</th>
                    <th style="width:160px" >Delivery Date</th>
                    <th >Batch Quantity</th>
                    <th>Damaged Quantity</th>
                    <th >Category Name</th>
                    <th>Means Of Delivery</th>
                    <th>AirWay BillNumber</th>
                    <th>Status</th>
                    <th>Date Added</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr   v-for="(invoiceitem) in batchbody" :key="invoiceitem.itemID" style="font-family: inter; font-size: 16px; font-weight: medium; color: gray;">
                    <th scope="row" @click.prevent="editinvoiceitem(invoiceitem)" style="text-align: center;vertical-align: middle;" >{{invoiceitem.batchNumber}}</th>
                    <td style="text-transform: uppercase;" @click.prevent="editinvoiceitem(invoiceitem)"  >{{ invoiceitem.deliveryNumber }}</td>
                    <td @click.prevent="editinvoiceitem(invoiceitem)" >{{ getFormattedDate(invoiceitem.deliveryDate) }}</td>
                    <td @click.prevent="editinvoiceitem(invoiceitem)" >{{ invoiceitem.batchQuantity }}</td>
                    <td @click.prevent="adjustStock(invoiceitem)" >{{ invoiceitem.quantityDamaged }}</td>
                    <td @click.prevent="editinvoiceitem(invoiceitem)" >{{ invoiceitem.categoryName }}</td>
                    <td @click.prevent="editinvoiceitem(invoiceitem)" >{{ invoiceitem.meansOfDelivery }}</td>
                    <td @click.prevent="editinvoiceitem(invoiceitem)"  >{{ invoiceitem.airWayBillNumber }}</td>
                    <td :style="getStatusStyle(invoiceitem)" @click.prevent="editinvoiceitem(invoiceitem)" >{{ invoiceitem.productStatus }}</td>
                    <td @click.prevent="editinvoiceitem(invoiceitem)" >{{ formatDate(invoiceitem.dateCreated) }}</td>
                    <td>  <div class="dropdown" style="width: 100%">
              <a class="" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="16"
                  fill="gray"
                  class="bi bi-three-dots"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                  />
                </svg>
              </a>
              <div class="dropdown-content" style=" width: 50%;color:red;">
                <a @click.prevent="adjustStock(invoiceitem)">Stock Adjustment</a></div></div></td>
                   
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
</template>

<script>
 import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared";
import moment from "moment";

export default {
  name: "AddDeliveryNumber",
  mixins: [AppMixins],
  data() {
    return {
      formdata: {
        deliveryNumber: "",
        deliveryDate: "",
        quantity: "",
        means: "",
        airwaybill: "",
      },
      batchbody: [], 
      poBody:[],// Initialize this with appropriate data
    };
  },
  methods: {
    // Your methods here

    moveToIMEI1() {
      this.$refs.imei1Input.focus();
    },
    moveToIMEI2() {
      this.$refs.imei2Input.focus();
    },
    moveToMeansOfDelivery() {
      this.$refs.meansInput.focus();
    },
    moveToAirwayBill() {
      this.$refs.airwayBillInput.focus();
    },

    async CreateItem() {
var body={
    deliveryNumber:this.formdata.deliveryNumber,
    deliveryDate:this.formdata.deliveryDate,
    batchQuantity:this.formdata.quantity,
    meansOfDelivery:this.formdata.means,
    airWayBillNumber:this.formdata.airwaybill,
    itemID:this.id,




}
console.log("Body in adding items______________///______*****_____", body);




console.log("Item new: ", body);
var response = await this.AddDeliveryNote(body);
if (response.isTrue==true) {

swal.fire({
heightAuto: false,
html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,

});
await this.gettingproductdetailsbyid();
this.$router.push({
path: `/adddelivery/${this.id}`,
replace: true,
});


setTimeout(()=>{
location.reload();

},700)
await this.$refs.myForm.reset();
// Clear form data
this.formdata.serialNumber = "";
this.formdata.imei1 = "";
this.formdata.imei2 = "";




} else {
swal.fire({
heightAuto: false,
html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
});


}

},
async pushPO() {
      console.log("PO Number is:", this.batchbody.poNumber);
      this.$router.push({
        path: `/uploadedpoitems/${this.batchbody.poNumber}`,
        replace: true,
      });
    },
async adjustStock(invoiceitem) {
  if (invoiceitem.productStatus !== "Closed") {
    console.log("Navigating to edit page for:", invoiceitem);
    console.log(" ____________________________________________*****************is______________***********:", invoiceitem);
        this.$router.push({
          path: `/adjustedStock/${invoiceitem.batchNumber}`,
          replace: true,
        });
  } else {
    swal.fire({
      heightAuto:false,
      icon: "warning",
      title: "Cannot Edit",
      text: "The status is 'Closed'. Editing is not allowed.",
    });
  }
     
       
      //} //else {
        //return swal.fire({
         // heightAuto: false,
         // html: `<p class="text-danger" style="font-size:23px;font-family:inter;margin-top:22px">Oops! Nothing else to be added on accesory</p>`,
       // });
    //  }

    
  },
 async gettingitemsbypo() {
      var poNumber = this.batchbody.poNumber;
      console.log("PONUMBER IS;;;;;;;;;;;;;;;;;;;;;;",poNumber);
      var response = await this.gettingitemsinPO(poNumber);
      this.poBody = response.body;
      console.log("response on PO body: : ", this.poBody);
    },
getStatusStyle(invoiceitem){
  if(invoiceitem.productStatus==="Complete"){
    return{
      color:"green"
    };
  }else if(invoiceitem.productStatus==="Incomplete"){
    return{
      color:"red"
    };
  }
    else if(invoiceitem.productStatus==="Closed"){
    return{
      color:"blue"
    };
  }else{
    return "blue";
  }
},
formatDate(dateString) {
            const date = new Date(dateString);

            return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
        },
        getFormattedDate(date) {
  const formattedDate = moment(date).format("Do MMMM YYYY");
  return formattedDate;
},



async editinvoiceitem(invoiceitem) {
  if (invoiceitem.productStatus !== "Closed") {
    console.log("Navigating to edit page for:", invoiceitem);
    this.$router.push({
      path: `/invoice_item/${invoiceitem.batchNumber}`,
      replace: true,
    });
  } else {
    swal.fire({
      icon: "warning",
      title: "Cannot Edit",
      text: "The status is 'Closed'. Editing is not allowed.",
    });
  }
},

async gettingproductdetailsbyid() {
// Assuming batchID is defined and contains the correct value
   var response = await this.gettingbatchbyid(this.id);
   this.batchbody = response.body;
   console.log("response on batch  body:<<<<<<<<<<<<<<< : ", this.batchbody);
   console.log("batch number:", this.batchbody.batchNumber);

   //this.reference_number=this.invoiceItemBody.reference_Number;
},

   

    // Other methods here
  },
  created() {
      this. batchbody.batchNumber = this.$route.params.batchNumber;
        console.log("poNumber :", this.batchbody.batchNumber);
        this.id = this.$route.params.id;
        console.log("poNumber :", this.id);
        this.itemID = this.$route.params.itemID;
        console.log("batchid :", this.itemID);
    this.gettingproductdetailsbyid();
   
  },
  // Your created hook and other lifecycle hooks here
};
</script>

<style scoped>
/* Your scoped styles here */
</style>
