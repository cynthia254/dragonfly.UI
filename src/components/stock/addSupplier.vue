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
            <a href="/stock" style="font-size: 16px;font-family:inter;font-weight:medium">Home</a>
          </li>
          <li class="dropDown-menu fixed-top">
            <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Stock Users</a>
            <ul>
              <li class="dropDown-menu fixed-top">
                <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Customers</a>
                <ul>
                  <li><a href="/customer" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Customers</a></li>
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
            <a href="" style="font-size: 15px;font-family:inter;font-weight:medium">Orders</a>
            <ul>
              <li>
                <a href="/sales" style="font-size: 16px;font-family:inter;font-weight:medium">Sales Orders</a>
              </li>
              <li><a href="/purchase" style="font-size: 16px;font-family:inter;font-weight:medium">Purchase Orders</a></li>
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
                          style="width: 40%; margin-left: 50px; margin-top: 70px"
                        >
                          <div class="modal-header">
                            <h4 class="modal-title">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="16"
                                fill="currentColor"
                                class="bi bi-plus-lg"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                                />
                              </svg>
                              Add Supplier
                            </h4>
                            <button
                              @click="showModal = false"
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              style="margin-right: 10px"
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
                                    pattern="[+-]?([0-9]*[.])?[0-9]+"
                                    v-model="this.formdata.supplierName"
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
                                    pattern="[+-]?([0-9]*[.])?[0-9]+"
                                    v-model="this.formdata.companyName"
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
                                    pattern="[+-]?([0-9]*[.])?[0-9]+"
                                    v-model="this.formdata.email"
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
                                    pattern="[+-]?([0-9]*[.])?[0-9]+"
                                    v-model="this.formdata.phoneNumber"
                                  />
                                </div>
                              </div>
  
                              <div class="form-group">
                                <input
                                @click.prevent="AddingSupplier();"
                                  type="submit"
                                  name="action"
                                  id="action"
                                  class="btn btn-primary btn-sm"
                                  value="Add"
                                  form="purchaseForm"
                                  style="margin-top: 20px"
                                />
                                <button
                                  @click="showModal = false"
                                  type="button"
                                  class="btn btn-default border btn-sm"
                                  data-bs-dismiss="modal"
                                  style="margin-left: 75px"
                                >
                                  Close
                                </button>
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
     
    />
    <img src="../../assets/images/filter.svg" style="width: 24px;height:24px;position: absolute;margin-left: 250px;margin-top:6px"/>
  
  </div>
               </div>
                </div>

                <div class="table-wrapper">
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
                              <button
                                type="button"
                                class="btn btn-success mx-1"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Edit"
                                style="width: 40px"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-pencil-square"
                                  viewBox="0 0 16 16"
                                  @click.prevent="
                                    EditingDesignation(position.postionId)
                                  "
                                >
                                  <path
                                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                  />
                                </svg>
                              </button>
                              <button
                                type="button"
                                class="btn btn-danger mx-1"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Delete"
                                style="width: 40px"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-trash3"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                                  />
                                </svg>
                              </button>
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
        formdata:{
          supplierName:"",
          companyName:"",
          email:"",
          phoneNumber:"",
        },
        allsuppliers:{},
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
  