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
                          SUPPLIER LIST
                        </h2>
                      </div>
  
                <div class="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-end">
                  <button
                    @click="showModal = true"
                    type="button"
                    name="addPurchase"
                    id="addPurchase"
                    class="btn btn-success btn-sm rounded-0"
                    style="width: 110px;margin-top: 10px;margin-left: 460px;"
                  >
                
                <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="15"
                                      height="16"
                                      fill="currentColor"
                                      class="bi bi-plus-lg"
                                      viewBox="0 0 16 16"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                                      />
                                    </svg>Add Supplier
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
                          style="width: 50%;
                                  margin-left: 100px;
                                  margin-top: 100px;
                                  background: #f5f5f5;
                                  border-radius: 18px;
                                  height:100%;"
                        >
                          <div class="modal-header">
                            <h4 class="modal-title" style="margin-top:20px;margin-left:40px">
                            
                              Add Supplier
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
                            <form method="post" id="purchaseForm">
                              <input
                                type="hidden"
                                name="purchase_id"
                                id="purchase_id"
                              />
                              <input
                                type="hidden"
                                name="btn_action"
                                id="btn_action"
                              />
  
                              <div class="form-group">
                                <label>Supplier Name</label>
                                <div class="input-group">
                                  <input
                                    type="text"
                                    name="quantity"
                                    id="quantity"
                                    class="form-control rounded-0"
                                    required
                                   
                                    v-model="this.formdata.supplierName"
                                    style="background-color: #f5f5f5;"
                                  />
                                </div>
                              </div>
                              <div class="form-group">
                                <label>Company</label>
                                <div class="input-group">
                                  <input
                                    type="text"
                                    name="quantity"
                                    id="quantity"
                                    class="form-control rounded-0"
                                    required
                                    v-model="this.formdata.companyName"
                                    style="background-color: #f5f5f5;"
                                  />
                                </div>
                              </div>
                              <div class="form-group">
                                <label>Email Adress</label>
                                <div class="input-group">
                                  <input
                                    type="email"
                                    name="quantity"
                                    id="quantity"
                                    class="form-control rounded-0"
                                    required
                                    v-model="this.formdata.email"
                                    style="background-color: #f5f5f5;"
                                  />
                                </div>
                              </div>
                              <div class="form-group">
                                <label>Phone Number</label>
                                <div class="input-group">
                                  <input
                                    type="text"
                                    name="quantity"
                                    id="quantity"
                                    class="form-control rounded-0"
                                    required
                                    v-model="this.formdata.phoneNumber"
                                    style="background-color: #f5f5f5;"
                                  />
                                </div>
                              </div>
  
                              <div class="form-group">
                                <input
                                @click.prevent="AddingSupplier();"
                                  type="submit"
                                  name="action"
                                  id="action"
                                  class="btn btn-success btn-sm"
                                  value="Add"
                                  form="purchaseForm"
                                  style="margin-bottom: 10px;margin-left: 60px;width: 60%;"
                                />
                               
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </transition>
  
            
                      <div class="row mx-5">
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
                        <table id="purchaseList" class="table table-hover ">
                        <thead style="background-color: rgb(214, 211, 211);font-family: inter;font-weight: bold;font-size: 16px;">
                          <tr>
                            <th>ID</th>
                            <th>Supplier Name</th>
                            <th>Company</th>
                            <th>Email Adress</th>
                            <th>Phone Number</th>
                            <th style="width: 120px">Action</th>
                          </tr>
                        </thead>
                        <tbody v-for="supplier in this.allsuppliers" v-bind:key="supplier.id">
                          <tr style="font-family: inter;font-size: 16px;font-weight: medium;color: gray;">
                            <th scope="row">{{supplier.supplierId}}</th>
                            <td>{{supplier.supplierName}}</td>
                            <td>{{supplier.companyName}}</td>
                            <td>{{supplier.email}}</td>
                            <td>{{supplier.phoneNumber}}</td>
  
                            <td>
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="green"
                                  class="bi bi-pencil-square"
                                  viewBox="0 0 16 16"
                                  
                                  @click="editSupplier(supplier.supplierId)"
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
                   </div>
                   </div>
                   </div>
                   </div>
                   
                <div class="table-wrapper" v-if="showallstocksearchin">
                  <div class="table-title">
                    <div class="">
                      <div class="col-sm table-responsive">
                        <table id="purchaseList" class="table table-hover ">
                        <thead style="background-color: rgb(214, 211, 211);font-family: inter;font-weight: bold;font-size: 16px;">
                          <tr>
                            <th>ID</th>
                            <th>Supplier Name</th>
                            <th>Company</th>
                            <th>Email Adress</th>
                            <th>Phone Number</th>
                            <th style="width: 120px">Action</th>
                          </tr>
                        </thead>
                        <tbody v-for="supplier in this.allsuppliers" v-bind:key="supplier.id">
                          <tr style="font-family: inter;font-size: 16px;font-weight: medium;color: gray;">
                            <th scope="row">{{supplier.supplierId}}</th>
                            <td>{{supplier.supplierName}}</td>
                            <td>{{supplier.companyName}}</td>
                            <td>{{supplier.email}}</td>
                            <td>{{supplier.phoneNumber}}</td>
  
                            <td>
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="green"
                                  class="bi bi-pencil-square"
                                  viewBox="0 0 16 16"
                                  
                                  @click="editSupplier(supplier.supplierId)"
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
  export default {
    name: 'supplierPage',
    mixins: [AppMixins],
    data() {
      return {
        showModal: false,
        showallstockin:true,
       showallstocksearchin:false,
        formdata:{
          supplierName:"",
          companyName:"",
          email:"",
          phoneNumber:"",
        },
        allsuppliers:{},
        searchword:"",
        allsupplier:{},

      };
    },
    methods:{
      async AddingSupplier() {
  
  var body={
    supplierName:this.formdata.supplierName,
    companyName:this.formdata.companyName,
    email:this.formdata.email,
    phoneNumber:this.formdata.phoneNumber,
  }

  

 console.log("supplier new: ", body);
var response = await this.addingSupplier(body);
if (response.isTrue==true) {
  swal.fire({
    html: `<h5 class="text-success">${response.message}</h5>`,
  });
} else {
  swal.fire({
    html: `<h5 class="text-danger">${response.message}</h5>`,
  });

      }
     this.GetAllSuppliers();
    },
    async GetAllSuppliers(){

const response= await this.gettingAllSuppliers();
this.allsuppliers=response.body;





console.log("allsuppliers: ", this.allsuppliers);
return response;

},
async searchstocksin() {
      this.showallstockin = false;
      this.showallstocksearchin = true;
      var resp = await this.SearchingSuppliers(this.searchword);
      this.allsuppliers = resp.body;
      console.log("search  return body: ", resp.body);
    },
    async editSupplier(supplierId) {
      console.log("supplier id is:", supplierId);
      this.$router.push({
        path: `/editsupplier/${supplierId}`,
        replace: true,
      });
    },
    },
    watch: {
    searchword(passedvalue) {
      if (passedvalue != "") {
        this.searchstocksin();
      } else {
        this.GetAllSuppliers();
      }
    },
  },
    created(){
    this.GetAllSuppliers();
  }
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
  </style>
  