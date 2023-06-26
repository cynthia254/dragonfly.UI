<template>
     <link href='https://fonts.googleapis.com/css?family=Inter:500,700' rel='stylesheet'>
     <section>
            <header class="top">
      <div class="frame-24" style="width: 40px">
      <img
        alt=""
        class="payhouse-logo-1"
        src="https://static.overlay-tech.com/assets/fef105cb-ec3b-4485-a2d5-9b3c5fb2d9f2.png"
      />
    </div>
      <nav style="margin-right: 90px">
        <ul>
          <li>
            <a href="/addStock" style="font-size: 16px;font-family:inter;font-weight:medium">Home</a>
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

              <li><a href="/addStock" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Stock</a></li>
            </ul>
          </li>
          <li class="dropDown-menu fixed-top">
            <a href="" style="font-size: 15px;font-family:inter;font-weight:medium">Reports</a>
            <ul>
              <li>
                <a href="/sales" style="font-size: 16px;font-family:inter;font-weight:medium">Sales Reports</a>
              </li>
              <li><a href="/purchase" style="font-size: 16px;font-family:inter;font-weight:medium">Purchase Reports</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
    </section>
<div class="" style="width: 95%; margin-left: 64px; margin-top: 60px">
    <div class="table-wrapper">
                  <div
                    class="table-title"
                    style="background: rgb(231, 23, 23); height: 50px"
                  >
                    <div class="row">
                      <div class="col-sm-6">
                        <h2 style="font-size: 1.50rem; color: white;  height: 1.81rem; border-width: 0.06rem; left: 1.19rem; top: 1.25rem; padding-top: 0.88rem; padding-bottom: 0.88rem; padding-left: 1.19rem; padding-right: 1.19rem; gap: 59.19rem;font-family:inter;font-weight:500;white-space: nowrap;width: fit-content;">
                         STOCK-OUT LIST 
                        </h2>
                      </div>
                        
             
                      <div class="col-sm-6">
                        <button
                          @click="showModal = true"
                          type="button"
                          name="addPurchase"
                          id="addPurchase"
                          class="btn btn-success rounded-0"
                          style="
                            width: 130px;
                            margin-left: 70%;
                            margin-top: 10px;
                            border-radius: 4px;
                            font-family: inter;
                           
                            display: flex;
                      
                            align-items: center;
                            
                          "
                        >
                        <svg style="margin-left:2px;color: white;font-weight: bold;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
</svg>
                         Stock Out
                        </button>
                        
                      </div>
<transition name="modal" >
<div id="purchaseModal" class="modal-mask fixed-top" v-if="showModal" style="position:fixed;width: 100%;margin-left:0px;margin-top: 0px;align-content: center;align-items: center;">
<div class="modal-wrapper" style="vertical-align:middle;display: table-cell;">
        <div class="modal-dialog modal-dialog-centered" style="align-content:center;margin-top:40px;margin-left:300px" >
                <div class="modal-content" style="  width: 50%;
                                  margin-left: 120px;
                                  margin-top: 85px;
                                  background: #f5f5f5;
                                  border-radius: 18px;
                                  height:100%;"  >
                    <div class="modal-header" >
                        <h4 class="modal-title" style="margin-left: 40px;margin-top: 20px; font-family: inter;font-size: 22px;"> Stock Out</h4>
                        <button @click="showModal=false"  type="button" class="btn-close" data-bs-dismiss="modal" style="margin-right:30px"></button>
                    </div>
                    <div class="modal-body" style="width:60%;margin-left:50px;vertical-align:middle;align-content:center" >                           
                        <form method="post" id="purchaseForm">
                        <input type="hidden" name="purchase_id" id="purchase_id"  />
                        <input type="hidden" name="btn_action" id="btn_action" />
                        <div class="row">
                                      <div class="col-md-6">
                                        <div class="form-group" style="background:#f5f5f5">
                                          <label style="font-family: inter;font-size: 16px;">Brand Name</label>
                                          <select
                                            name="product"
                                            id="product"
                                            class="form-select rounded-0"
                                            required
                                            v-model="
                                              this.formdata.selectedBrand
                                            "
                                             style="background-color: #f5f5f5;font-family: inter;font-size: 13px;color: gray;"
                                          >
                                            <option value="">
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
                                      <div class="col-md-6">
                                        <div class="form-group">
                                          <label id="name-label" for="name"
                                          style="font-family: inter;font-size: 16px;">Item Name</label
                                          >
                                          <select
                                            name="product"
                                            id="product"
                                            class="form-select rounded-0"
                                            required
                                            v-model="
                                              this.formdata.selectedItem
                                            "
                                             style="background-color: #f5f5f5;font-family: inter;font-size: 13px;color: gray;"
                                          >
                                            <option value="">
                                              Select Item
                                            </option>
                                            <option
                                              v-for="items in this.allitems"
                                              v-bind:value="items.itemName"
                                              :key="items.itemID"
                                            >
                                              {{ items.itemName }}
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                                    
                            <div class="form-group" style="margin-top: 10px;">
                                <label style="font-family: inter;font-size: 16px;">Product Quantity</label>
                                <div class="input-group">
                                    <input v-model="this.formdata.quantity" type="number" name="quantity" id="quantity" class="form-control rounded-0" required  style="background-color: #f5f5f5;font-family: inter;font-size: 13px;"/>        
                                </div>
                            </div> 
                            <div class="row">
                              <div class="col-md-6"> 
                            <div class="form-group">
                                <label style="font-family: inter;font-size: 16px;">Issued To</label>
                                <select name="supplierid" id="supplierid" class="form-select rounded-0" required
                                v-model="this.formdata.selectedCustomer"  style="background-color: #f5f5f5;font-family: inter;font-size: 13px;color: gray;">
                                    <option value="">Recipient</option>
                                    <option v-for="customers in this.allcustomers"
                                              v-bind:value="customers.customerName"
                                              :key="customers.customerId">
                                              {{ customers.customerName }}</option>
                          
                                   
                                </select>
                            </div>
                          </div>
                                      <div class="col-md-6">                              
                            <div class="form-group">
                                <label style="font-family: inter;font-size: 16px;">Department</label>
                                <select name="product" id="product" class="form-select rounded-0" required v-model="this.formdata.selectedDepartment"  style="background-color: #f5f5f5;font-family: inter;font-size: 13px;color: gray;">
                                  <option value="">Department</option>
                                  <option      v-for="department in this.alldepartment"
                          v-bind:value="department.departmentName"
                          :key="department.departnmentid"
                        >
                          {{ department.departmentName }}</option>
                                   
                                </select>
                            </div>  
                            </div>
                            </div>
                            <div class="form-group" style="margin-top: 10px;">
                                <label style="font-family: inter;font-size: 16px;">Comments</label>
                                <div class="input-group">
                                    <textarea v-model="this.formdata.comments" type="text" name="quantity" id="quantity" class="form-control rounded-0" required  style="background-color: #f5f5f5;font-family: inter;font-size: 13px;" placeholder="Type reason for stock out here..."> </textarea>       
                                </div>
                            </div> 
                       <div class="form-group" style="margin-top: 10px;"  >
                        <input @click.prevent="AdditionSales();" type="submit" name="action" id="action" class="btn btn-success btn-sm " value="Update" form="purchaseForm"    style="margin-bottom: 30px;margin-left: 80px;width: 60%;font-family: inter;font-size: 13px;"/>
                       
                      </div>
                        </form>
                    </div>
                   
                </div>
        </div>
    </div> 
</div> 
</transition> 
<div class="row mx-5 mt-1">
                  <div class="col-sm-6 d-flex mt-2">
                    <div
    class="search"
    style="margin-left: 500px; margin-top: 5px; display: flex"
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
<div class="table-wrapper" v-if="showallstockin">
                  <div class="table-title">
                    <div class="">
                      <div class="col-sm table-responsive">
                        <table id="purchaseList" class="table table-hover table-bordered ">

                                <thead style="background-color: rgb(214, 211, 211);font-family: inter;font-weight: bold;font-size: 16px;"><tr>
                                    <th>StockOut ID</th> 									
                                    <th>Product</th>	
                                    <th>Quantity</th>	
                                    <th>Recipient</th>  
                                    <th>Department</th> 
                                    <th>Date Stocked Out</th>  
                                    <th>Remarks</th>
                                    <th style="width: 120px;">Action</th>
                                </tr></thead>
                                <tbody v-for="sales in this.allsales" v-bind:key="sales.id">
<tr style="font-family: inter;font-size: 16px;font-weight: medium;color: gray;">
  <th scope="row">{{sales.salesId}}</th>
  <td>{{sales.brandName}} {{ sales.itemName }}</td>
  <td>{{sales.quantity}}</td>
  <td>{{sales.customerName}}</td>
  <td>{{sales.department}}</td>
  <td>{{ formatDateAssigned(sales.dateAdded) }}</td>
  <td>{{sales.comments}}</td>

  <td>    
                            <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="green"
                                  class="bi bi-pencil-square"
                                  viewBox="0 0 16 16"
                                  @click="editSales(sales.salesId)"
                                  style="margin-left:20px"
                               
                                
                                >
                                  <path
                                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                  />
                                
                                </svg>

                           
        
     </td>
</tr>

</tbody>
                            </table>
                        </div></div>
                    </div>
                    </div>
                    <div class="table-wrapper" v-if="showallstocksearchin">
                  <div class="table-title">
                    <div class="">
                      <div class="col-sm table-responsive">
                        <table id="purchaseList" class="table table-hover table-bordered ">

                                <thead style="background-color: rgb(214, 211, 211);font-family: inter;font-weight: bold;font-size: 16px;"><tr>
                                    <th>StockOut ID</th> 									
                                    <th>Product</th>	
                                    <th>Quantity</th>	
                                    <th>Recipient</th>  
                                    <th>Department</th> 
                                    <th>Date Stocked Out</th>  
                                    <th>Remarks</th>
                                    <th style="width: 120px;">Action</th>
                                </tr></thead>
                                <tbody v-for="sales in this.allsales" v-bind:key="sales.id">
<tr style="font-family: inter;font-size: 16px;font-weight: medium;color: gray;">
  <th scope="row">{{sales.salesId}}</th>
  <td>{{sales.brandName}} {{ sales.itemName }}</td>
  <td>{{sales.quantity}}</td>
  <td>{{sales.customerName}}</td>
  <td>{{sales.department}}</td>
  <td>{{ formatDateAssigned(sales.dateAdded) }}</td>
  <td>{{sales.comments}}</td>

  <td>    
                            <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="green"
                                  class="bi bi-pencil-square"
                                  viewBox="0 0 16 16"
                                  @click="editSales(sales.salesId)"
                                  style="margin-left:20px"
                               
                                
                                >
                                  <path
                                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                  />
                                
                                </svg>

        
     </td>
</tr>

</tbody>
                            </table>
                        </div></div>
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
export default{
name:'salesPage',
mixins: [AppMixins],
data() {
    return {
        showModal: false,
        showallstockin:true,
            showallstocksearchin:false,
        formdata:{
            selectedItem:"",
            selectedBrand:"",
            selectedCustomer:"",
            amountPaid:"",
            currency:"",
            quantity:"",
            comments:"",
            selectedDepartment:"",

        },
        itemBody: {},
      itemID: "",
      allitems: {},
      brandBody: {},
      allbrands: {},
      brandId: "",
      customerId:"",
      customerBody:{},
      allsales:{},
      alldepartment:{},
      searchword:"",
    }
},
methods:{
    async GetAllSales(){

const response= await this.gettingAllSales();
this.allsales=response.body;





console.log("allsales: ", this.allsales);
return response;

},
    async AdditionSales() {
      console.log("Item Body:", this.itemBody);
      console.log("Item Id", this.itemID);
      console.log("Brand Body", this.brandBody);
      console.log("Brand Id", this.brandId);
      console.log("customer Body", this.customerBody);
      console.log("customer Id", this.customerId);
      var body = {
        brandName: this.formdata.selectedBrand,
        itemName: this.formdata.selectedItem,
        quantity: this.formdata.quantity,
        amountPaid: this.formdata.amountPaid,
        currency:this.formdata.currency,
        customerName:this.formdata.selectedCustomer,
        comments:this.formdata.comments,
        department:this.formdata.selectedDepartment,
      };

      console.log("Sales new: ", body);
      var response = await this.addingSales(body);
      if (response.isTrue == true) {
        swal.fire({
          html: `<h5 class="text-success">${response.message}</h5>`,
        });
      } else {
        swal.fire({
          html: `<h5 class="text-danger">${response.message}</h5>`,
        });
      }
      this.GetAllSales();
    },
    async searchstocksin() {
      this.showallstockin = false;
      this.showallstocksearchin = true;
      var resp = await this.SearchingStockOut(this.searchword);
      this.allsales = resp.body;
      console.log("search  return body: ", resp.body);
    },
    async getAllDepartment() {
      const response = await this.GettingAllDepartment();
      this.alldepartment = response.body;

      console.log("alldepartment: ", this.alldepartment);
      return response;
    },
    async GetAllItems() {
      const response = await this.gettingAllItems();
      this.allitems = response.body;

      console.log("allitems: ", this.allitems);
      return response;
    },
    async GetAllBrands() {
      const response = await this.gettingAllBrands();
      this.allbrands = response.body;

      console.log("Brands response: ", response);

      console.log("allbrands: ", this.allbrands);
      return response;
    },
    async GetAllCustomers(){

const response= await this.gettingAllCustomers();
this.allcustomers=response.body;





console.log("allcustomers: ", this.allcustomers);
return response;

},
formatDateAssigned(value) {
      let formattedDate = new Date(value);
      formattedDate = `${formattedDate.toDateString()} at ${formattedDate.toLocaleTimeString()}`;
      return formattedDate;
    },
async editSales(salesId) {
      console.log("purchase id is:", salesId);
      this.$router.push({
        path: `/editsales/${salesId}`,
        replace: true,
      });
    },


},
watch: {
    searchword(passedvalue) {
      if (passedvalue != "") {
        this.searchstocksin();
      } else {
        this.GetAllSales();
      }
    },
  },
 created() {
    this.GetAllItems();
    this.GetAllBrands();
    this.GetAllCustomers();
    this.GetAllSales();
    this.getAllDepartment();
   
  },
}

</script>
<style>
.modal-mask {

background-color: rgba(0, 0, 0, .5);
display: table;
transition: opacity .3s ease;
width:100%;
height:100%;
}

.modal-wrapper {
display: table-cell;
vertical-align: middle;
}
</style>