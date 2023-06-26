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
      <nav style="margin-right: 90px;white-space: nowrap;">
        <ul>
          <li>
            <a href="/stockdashboard" style="font-size: 16px;font-family:inter;font-weight:medium">Home</a>
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
                        <h2 style="font-size: 1.50rem; color: white; width: 5.19rem; height: 1.81rem; border-width: 0.06rem; left: 1.19rem; top: 1.25rem; padding-top: 0.88rem; padding-bottom: 0.88rem; padding-left: 1.19rem; padding-right: 1.19rem; gap: 59.19rem;font-family:inter;font-weight:bolder;">
                          ITEMS
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
                                    </svg>Add Item
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
                        style=" width: 50%;
                                  margin-left: 120px;
                                  margin-top: 60px;
                                  background: #f5f5f5;
                                  border-radius: 18px;
                                  height:100%;"
                      >
                        <div class="modal-header">
                          <h4 class="modal-title" style="margin-left: 40px;margin-top: 20px; font-family: inter;font-size: 22px;">
                           
                            Add Item
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
                          <form method="post" id="purchaseForm" ref="myForm">
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
                                              this.formdata.BrandNameSelected
                                            "
                                             style="background-color: #f5f5f5;font-family: inter;font-size: 13px;color: gray;"
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
                                      <div class="col-md-6">
                                        <div class="form-group">
                                          <label id="name-label" for="name"
                                          style="font-family: inter;font-size: 16px;">Device Name</label
                                          >
                                          <select
                                            name="product"
                                            id="product"
                                            class="form-select rounded-0"
                                            required
                                            v-model="
                                              this.formdata.itemName
                                            "
                                             style="background-color: #f5f5f5;font-family: inter;font-size: 13px;color: gray;"
                                          >
                                            <option value="" selected disabled >
                                              Device Name
                                            </option>
                                            <option
                                              v-for="device in this.alldevices"
                                              v-bind:value="device.partName"
                                              :key="device.partID"
                                            >
                                              {{ device.partName }}
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group" style="margin-top: 10px;">
                                          <label id="name-label" for="name"
                                          style="font-family: inter;font-size: 16px;">Category Type</label
                                          >
                                          <select
                                            name="product"
                                            id="product"
                                            class="form-select rounded-0"
                                            required
                                            v-model="
                                              this.formdata.categoryName
                                            "
                                             style="background-color: #f5f5f5;font-family: inter;font-size: 13px;color: gray;height:47px"
                                          >
                                            <option value="" selected disabled >
                                              Product Type
                                            </option>
                                            <option
                                              v-for="category in this.allcategory"
                                              v-bind:value="category.categoryName"
                                              :key="category.categoryID"
                                            >
                                              {{ category.categoryName }}
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                      <div class="col-md-6">
                                      <div class="form-group" style="margin-top: 10px;">
                                      <label style="font-family: inter;font-size: 16px;">Re-Order Level</label>
                                      <div class="input-group">
                                        <input
                                          type="text"
                                          name="quantity"
                                          id="quantity"
                                          class="form-control rounded-0"
                                          required
                                          v-model="this.formdata.reOrderLevel"
                                          style="background-color: #f5f5f5;font-family: inter;font-size: 13px;"
                                        />
                                      </div>
                                      </div>
                                      </div>
                                    </div>
                                      <div class="row">
                                      <div class="">
                                        <div class="form-group">
                                          <label id="name-label" for="name"
                                          style="font-family: inter;font-size: 16px;">Indicative Price</label
                                          >
                                          <div
                                            class="form-inline form-group"
                                            style="display: flex"
                                          >
                                            <select
                                              class="form-control input-sm w-5"
                                              style="width: 60px;background-color:#f5f5f5;font-family: inter;font-size: 13px;color: gray;"
                                              v-model="this.formdata.currency"
                                            >
                                            <option value="" selected disabled hidden style="margin-top:30px">
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
                                              v-model="
                                                this.formdata.buyingPrice
                                              "
                                               style="background-color: #f5f5f5;"
                                            />
                                          </div>
                                        </div>

                                      </div>
                                    
                                    </div>
                                    <div class="form-group" style="margin-top: 10px;">
                                      <label style="font-family: inter;font-size: 16px;">Item Description</label>
                                      <div class="input-group">
                                        <textarea
                                          type="text"
                                          name="quantity"
                                          id="quantity"
                                          class="form-control rounded-0"
                                          placeholder="Please describe the item here....."
                                          required
                                          v-model="this.formdata.itemDescription"
                                          style="background-color: #f5f5f5;font-family: inter;font-size: 13px;"
                                        ></textarea>
                                      </div>
                                      </div>

                            <div class="form-group" style="margin-top:10px">
                              <input
                                type="submit"
                                name="action"
                                id="action"
                                class="btn btn-success btn-sm"
                                value="Save"
                                form="purchaseForm"
                                @click.prevent="CreateItem()"

                                style="margin-bottom: 30px;margin-left: 70px;width: 60%;font-family: inter;font-size: 13px;"
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
    style="margin-left: 900px; margin-top: 5px; display: flex"
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
                      
                    <table 
                      id="purchaseList"
                      class="table  table-hover table-bordered"
                    >
                      <thead  style="background-color: rgb(214, 211, 211);font-family: inter;font-weight: bold;font-size: 16px;">
                        <tr>
                          <th>Item ID</th>
                          <th style="">Item Name</th>
                          <th style="">Category Name</th>
                          <th style="">ReOrder Level</th>
                          <th>Indicative Price</th>
                          <th>Item Description</th>

                          <th style="width: 120px;margin-left: 10px;">Action</th>
                        </tr>
                      </thead>
                      <tbody v-for="items in this.allitems" v-bind:key="items.id">
                        <tr style="font-family: inter;font-size: 16px;font-weight: medium;color: gray;">
                          <th scope="row">{{ items.itemID }}</th>
                          <td >{{items.brandName}}  {{items.itemName}} </td>
                          <td >{{items.category}}  </td>
                          <td >{{items.reOrderLevel}}  </td>
                          <td style="width:150px">{{items.currency}}  {{formatPrice(items.indicativePrice) }}</td>
                          <td>{{ items.itemDescription }}</td>


                          <td>
                          
                            <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="green"
                                  class="bi bi-pencil-square"
                                  viewBox="0 0 16 16"
                                  @click="editItem(items.itemID)"
                                  style="margin-left:10px"
                               
                                
                                >
                                  <path
                                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                  />
                                </svg>

                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="red"
                                  class="bi bi-trash3 mx-2"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
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
import AppMixins from "../../Mixins/shared"
export default {
  name: "AddItem",
  mixins: [AppMixins],
  data() {
    return {
      showModal: false,
      allitems:[],
      allbrands:[],
      allcategory:[],
      alldevices:[],
      formdata: {
        itemName:"",
        BrandNameSelected:"",
        categoryName:"",
        reOrderLevel:"",
        currency:"",
        buyingPrice:"",
        itemDescription:"",

        

    
      },
    };
  },
  methods:{
    async GetAllItems(){

const response= await this.gettingAllItems();
this.allitems=response.body;





console.log("allitems: ", this.allitems);
return response;

},
formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
async GetAllCategory(){

const response= await this.gettingCategory();
this.allcategory=response.body;

console.log("category response: ", response);



console.log("allbrands: ", this.allcategory);
return response;

},
async GetAllBrands() {
      const response = await this.gettingAllBrands();
      this.allbrands = response.body;

      console.log("Brands response: ", response);

      console.log("allbrands: ", this.allbrands);
      return response;
    },
    async GetAllDevices(){

const response= await this.getitngDevices();
this.alldevices=response.body;

console.log("Brands response: ", response);



console.log("allbrands: ", this.alldevices);
return response;

},
    async CreateItem() {
  
  var body={
    itemName:this.formdata.itemName,
    brandName:this.formdata.BrandNameSelected,
    category:this.formdata.categoryName,
    reOrderLevel:this.formdata.reOrderLevel,
    currency:this.formdata.currency,
    indicativePrice:this.formdata.buyingPrice,
    itemDescription:this.formdata.itemDescription,


  }

  

 console.log("Item new: ", body);
var response = await this.creatingItem(body);
if (response.isTrue==true) {
  swal.fire({
    html: `<h5 class="text-success">${response.message}</h5>`,
  });
  this.$refs.myForm.reset();
} else {
  swal.fire({
    html: `<h5 class="text-danger">${response.message}</h5>`,
  });
  this.$refs.myForm.reset();

      }
      this.GetAllItems();
    },
    async editItem(itemID) {
      console.log("item id is:", itemID);
      this.$router.push({
        path: `/edititem/${itemID}`,
        replace: true,
      });
    },
  },
  created(){
    this.GetAllItems();
    this.GetAllBrands();
    this.GetAllDevices();
    this.GetAllCategory();
  }
}


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
