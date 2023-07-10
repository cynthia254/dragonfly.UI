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

             <li><a href="/addStock" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Stock</a></li>
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
              <a href="/invoicedetails" style="color: gray"
                >Manage Invoice</a
              >
            </li>
            <li
              class="breadcrumb-item active"
              aria-current="page"
              style="font-family: inter; font-size: 16px;color: #ff8c22;"
            >
              Manage Invoice Items
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
                          INVOICE ITEMS LIST
                        </h2>
          </div>

          <div class="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-end">
            <button
              @click="showModal = true"
              type="button"
              name="addPurchase"
              id="addPurchase"
              class="btn btn- btn-sm rounded-0"
              style="
                width: 200px;
                margin-left: 200%;
                margin-top: 20px;
                border-radius: 4px;
                font-family: inter;
                display: flex;
                align-items: center;
                background: #ff8c22;
                color: white;
                font-size: 15px;
                height: 34px;
              "
            >
             <h2 style="color: white;font-size: 14px;font-family: inter;margin-left: 30px;margin-top: 5px;">Add Invoice Lines</h2>
            </button>
          </div>
          <transition name="modal">
            <div
              id="purchaseModal"
              class="modal-mask fixed-top"
              v-if="showModal"
              style="
                position: fixed;
                width: 100%;
                margin-left: 0px;
                margin-top: 0px;
                align-content: center;
                align-items: center;
              "
            >
              <div
                class="modal-wrapper"
                style="vertical-align: middle; display: table-cell"
              >
                <div
                  class="modal-dialog modal-dialog-centered"
                  style="
                    align-content: center;
                    margin-top: 40px;
                    margin-left: 300px;
                  "
                >
                  <div
                    class="modal-content"
                    style="
                      width: 50%;
                      margin-left: 120px;
                      margin-top: 40px;
                      background: #f5f5f5;
                      border-radius: 18px;
                      height: 100%;
                    "
                  >
                    <div class="modal-header">
                      <h4
                        class="modal-title"
                        style="
                          margin-left: 40px;
                          margin-top: 20px;
                          font-family: inter;
                          font-size: 22px;
                        "
                      >
                        Add InvoiceLines
                      </h4>
                      <button
                        @click="showModal = false"
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        style="margin-right: 30px"
                      ></button>
                    </div>
                    <div
                      class="modal-body"
                      style="
                        width: 60%;
                        margin-left: 50px;
                        vertical-align: middle;
                        align-content: center;
                      "
                    >
                      <form id="purchaseForm" ref="myForm">
                        <div class="row">
                          <div class="">
                            <div class="form-group">
                              <label
                                style="
                                  font-family: inter;
                                  font-size: 16px;
                                  margin-top: 10px;
                                "
                                >Select Brand</label
                              >

                              <select
                                name="product"
                                id="product"
                                class="form-select rounded-0"
                                required
                                v-model="this.formdata.brandSelected"
                                style="
                                  background-color: #f5f5f5;
                                  font-family: inter;
                                  font-size: 16px;
                                  color: gray;
                                  height: 50px;
                                  width: 100%;
                                "
                              >
                              <option value=""  >
                                              Select Brand
                                            </option>
                                            <option
                                              v-for="brands in this.allbrands"
                                              v-bind:value="brands.brandName"
                                              :key="brands.brandId"
                                            >
                                              {{ brands.brandName }}
                                            </option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label
                                style="
                                  font-family: inter;
                                  font-size: 16px;
                                  margin-top: 10px;
                                "
                                >Select Item</label
                              >

                              <select
                                name="product"
                                id="product"
                                class="form-select rounded-0"
                                required
                                v-model="this.formdata.itemSelected"
                                style="
                                  background-color: #f5f5f5;
                                  font-family: inter;
                                  font-size: 16px;
                                  color: gray;
                                  height: 50px;
                                  width: 100%;
                                "
                              >
                                <option value="" >
                                  Select Item
                                </option>
                                <option
                                  v-for="invoice in this.itenbrandBody"
                                  v-bind:value="invoice.itemName"
                                  :key="invoice.brandId"
                                >
                                  {{ invoice.brandName }}--{{
                                    invoice.itemName
                                  }}
                                </option>
                              </select>
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="form-group">
                              <label
                                style="
                                  font-family: inter;
                                  font-size: 16px;
                                  margin-top: 10px;
                                "
                                >Quantity</label
                              >
                              <div class="input-group">
                                <input
                                  type="number"
                                  class="form-control rounded-0"
                                  required
                                  style="
                                    font-family: inter;
                                    font-size: 13px;
                                    color: gray;
                                    background: #f5f5f5;
                                  "
                                  v-model="this.formdata.Quantity"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label
                                style="
                                  font-family: inter;
                                  font-size: 16px;
                                  white-space: nowrap;
                                  margin-top: 10px;
                                "
                                >Warranty In Months</label
                              >
                              <div class="input-group">
                                <input
                                  type="number"
                                  class="form-control rounded-0"
                                  required
                                  style="
                                    font-family: inter;
                                    font-size: 13px;
                                    color: gray;
                                    background: #f5f5f5;
                                  "
                                  v-model="this.formdata.warranty"
                                />
                              </div>
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="form-group">
                              <label
                                style="
                                  font-family: inter;
                                  font-size: 16px;
                                  white-space: nowrap;
                                  margin-top: 10px;
                                "
                                >Warranty Start Date</label
                              >
                              <div class="input-group">
                                <input
                                  type="date"
                                  class="form-control rounded-0"
                                  required
                                  style="
                                    font-family: inter;
                                    font-size: 13px;
                                    color: gray;
                                    background: #f5f5f5;
                                  "
                                  v-model="this.formdata.warrantStartDate"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="">
                            <div class="form-group">
                              <label
                                id="name-label"
                                for="name"
                                style="font-family: inter; font-size: 16px"
                                >Unit Price</label
                              >
                              <div
                                class="form-inline form-group"
                                style="display: flex"
                              >
                                <select
                                  class="form-control input-sm w-5"
                                  style="
                                    width: 60px;
                                    background-color: #f5f5f5;
                                    font-family: inter;
                                    font-size: 13px;
                                    color: gray;
                                  "
                                  v-model="this.formdata.currency"
                                >
                                  <option
                                    value=""
                                    style="margin-top: 30px"
                                  >
                                    KES
                                  </option>
                                  <option value="USD">USD</option>
                                  <option value="KES">KES</option>
                                  <option value="UGX">UGX</option>
                                  <option value="TZ">TZ</option>
                                </select>
                                <input
                                  type="text"
                                  class="form-control"
                                  required
                                  v-model="this.formdata.unitPrice"
                                  style="
                                    background-color: #f5f5f5;
                                    width: 800px;
                                  "
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="form-group" style="margin-top: 20px">
                          <input
                            @click.prevent="AddingInvoiceLines()"
                            type="submit"
                            class="btn btn-success btn-sm"
                            value="Save"
                            form="purchaseForm"
                            style="
                              margin-bottom: 30px;
                              margin-left: 70px;
                              width: 60%;
                              font-family: inter;
                              font-size: 13px;
                            "
                          />
                        </div>
                      </form>
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
              border: 0;
              border-radius: 10px;
              margin: center;

              background: #fff;
              box-shadow: 0px 8px 27px 0px rgba(136, 133, 133, 0.25);
            "
          >
          <div class="row mx-5">
                  <div class="col-sm-6 d-flex mt-2">
                    <div
    class="search"
    style="margin-left: 450px; margin-top: 5px; display: flex"
  >
  <span class="form-control-feedback"><svg style="position:absolute;margin-top:12px;margin-left: 20px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></span>
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
            <div class="table-wrapper" v-if="showallstock">
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
                          <th style="width:130px">Warranty End Date</th>
                          <th>Updated By</th>
                          <th>Updated on</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          @click.prevent="
                            editinvoiceitem(
                              invoicelines.invoiceLineId,
                              invoicelines.categoryName
                            )
                          "
                          v-for="(invoicelines, index) in this.invoiceItemBody"
                          :key="invoicelines.invoiceLineId"
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
                            {{ invoicelines.status }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="table-wrapper" v-if="showallstocksearch">
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
                          <th style="width:130px">Warranty End Date</th>
                          <th>Updated By</th>
                          <th>Updated on</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          @click.prevent="
                            editinvoiceitem(
                              invoicelines.invoiceLineId,
                              invoicelines.categoryName
                            )
                          "
                          v-for="(invoicelines, index) in this.invoiceItemBody"
                          :key="invoicelines.invoiceLineId"
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
                            {{ invoicelines.status }}
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
  name: "InvoiceLinesByNumber",
  mixins: [AppMixins],
  data() {
    return {
      showModal: false,
      allinvoice: [],
      allitems: [],
      allcategory: [],
      allbatch: [],
      invoiceItemBody: [],
      userbody: {},
      allbrands:[],
      itenbrandBody:[],
      searchword:"",
      showallstock:true,
      showallstocksearch:false,
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
    async GetAllInvoice() {
      const response = await this.gettingInvoice();
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
    async AddingInvoiceLines() {
      var body = {
        brandName: this.formdata.brandSelected,
        quantity: this.formdata.Quantity,
        unitPrice: this.formdata.unitPrice,
        itemName: this.formdata.itemSelected,
        invoiceNumber: this.invoiceNumber,
        currency: this.formdata.currency,
        warranty: this.formdata.warranty,
        warrantyStartDate: this.formdata.warrantStartDate,
      };

      console.log("Invoice new: ", body);
      var response = await this.addingInvoiceLines(body);
      if (response.isTrue == true) {
        swal.fire({
          heightAuto: false,
          html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
        },
        function(){ 
       location.reload();
   }
        );
       

        await this.GetAllItems();
       

        await this.gettingitembyinvoice();
        this.$refs.myForm.reset();
      } else {
        swal.fire({
          heightAuto: false,
          html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
        });
      }
    },
    getStatusStyle(invoicelines) {
      if (invoicelines.status === "Complete") {
        return {
          color: "green",
        };
      } else if (invoicelines.status === "Incomplete") {
        return {
          color: "red",
        };
      } else {
        return "";
      }
    },

    async gettingitembyinvoice() {
      var invoiceNumber = this.invoiceNumber;
      var response = await this.gettinginvoicenumber(invoiceNumber);
      this.invoiceItemBody = response.body;
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
    this.invoiceNumber = this.$route.params.invoiceNumber;
    console.log("ItemId :", this.invoiceNumber);
    this.GetAllInvoice();
    this.GetAllSuppliers();
    this.getitnginvoicebyname();
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

</style>
