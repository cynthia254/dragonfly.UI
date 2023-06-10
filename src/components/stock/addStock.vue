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
              <li><a href="/returnedStock" style="font-size: 16px;font-family:inter;font-weight:medium">Returned Stock</a></li>
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
  <!--<div class="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-end">
    <router-link to="/adjustment">
    <button
    
      type="button"
      name="addPurchase"
      id="addPurchase"
      class="btn btn-primary btn-sm rounded-pill"
      style="width: 110%; height: 30px; margin-left: 50px; margin-top: 40px"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="16"
        fill="currentColor"
        class="bi bi-plus-square"
        viewBox="0 0 16 16"
      >
        <path
          d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
        />
        <path
          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
        /></svg
      >Inventory Adjustment
    </button>
  </router-link>
  </div>
  <transition name="modal">
    <div
      id="purchaseModal"
      class="modal-mask fixed-top"
      v-if="showInventory"
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
          style="align-content: center; margin-top: 40px; margin-left: 300px"
        >
          <div
            class="modal-content"
            style="width: 60%; margin-left: 50px; margin-top: 70px"
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
                Add New Adjustment
          
              </h4>
           
              <button
               
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                style="margin-right: 10px"
              ></button>
            </div>
            <div
              class="modal-body"
              style="
                width: 80%;
                margin-left: 50px;
                vertical-align: middle;
                align-content: center;
              "
            >
              <form method="post" id="purchaseForm">
                <input type="hidden" name="purchase_id" id="purchase_id" />
                <input type="hidden" name="btn_action" id="btn_action" />
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group" style="">
                      <label>Brand Name</label>
                      <select
                        name="product"
                        id="product"
                        class="form-select rounded-0"
                        required
                      >
                        <option value="">Select Brand</option>
                        <option value="">Feitian</option>
                        <option value="">Feitian</option>
                        <option value="">Feitian</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label id="name-label" for="name">Item Name</label>
                      <select
                        name="product"
                        id="product"
                        class="form-select rounded-0"
                        required
                      >
                        <option value="">Select Product</option>
                        <option value="">F20</option>
                        <option value="">F300</option>
                        <option value="">F600</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                                <label>Quantity</label>
                                <div class="input-group">
                                    <input type="number" name="quantity" id="quantity" class="form-control rounded-0" required pattern="[+-]?([0-9]*[.])?[0-9]+" />        
                                </div>
                            </div>  

                <div class="form-group">
                                <label>Reason</label>
                                <div class="input-group">
                                    <input type="text" name="quantity" id="quantity" class="form-control rounded-0" required pattern="[+-]?([0-9]*[.])?[0-9]+" />        
                                </div>
                            </div>   

                <div class="form-group">
                  <input
                    type="submit"
                    name="action"
                    id="action"
                    class="btn btn-primary btn-sm"
                    value="Add"
                    form="purchaseForm"
                    style="margin-top: 20px"
                  />
                  <button
                    @click="showInventory = false"
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
  </transition>-->

  <div class="" style="width: 95%; margin-left: 50px; margin-top: 60px">
    <div class="row">
      <div class="col-lg-12">
        <div class="">
          <div class="">
            <div class="row">
              <!-- <div class="col-lg-10 col-md-10 col-sm-8 col-xs-6">
                <h3 class="card-title">Inventory List</h3>
              </div>-->

              <!-- <div class="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-end">
                <button
                  @click="showModal = true"
                  type="button"
                  name="addPurchase"
                  id="addPurchase"
                  class="btn btn-primary btn-sm rounded-0"
                  style="width: 110px"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="16"
                    fill="currentColor"
                    class="bi bi-plus-square"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                    />
                    <path
                      d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                    /></svg
                  >Add Stock
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
                        style="width: 60%; margin-left: 50px; margin-top: 70px"
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
                            Add Stock
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
                            width: 80%;
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
                            <div class="row">
                              <div class="col-md-6">
                                <div class="form-group" style="">
                                  <label>Brand Name</label>
                                  <select
                                    name="product"
                                    id="product"
                                    class="form-select rounded-0"
                                    required
                                  >
                                    <option value="">Select Brand</option>
                                    <option value="">Feitian</option>
                                    <option value="">Feitian</option>
                                    <option value="">Feitian</option>
                                  </select>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label id="name-label" for="name"
                                    >Item Name</label
                                  >
                                  <select
                                    name="product"
                                    id="product"
                                    class="form-select rounded-0"
                                    required
                                  >
                                    <option value="">Select Product</option>
                                    <option value="">F20</option>
                                    <option value="">F300</option>
                                    <option value="">F600</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div class="form-group">
                                <label>Quantity</label>
                                <div class="input-group">
                                    <input type="number" value="Ksh." name="quantity" id="quantity" class="form-control rounded-0" required pattern="[+-]?([0-9]*[.])?[0-9]+" />        
                                </div>
                            </div> 
                            <div class="form-group">
                                <label>Re-Order Level</label>
                                <div class="input-group">
                                    <input type="text"  name="quantity" id="quantity" class="form-control rounded-0" required pattern="[+-]?([0-9]*[.])?[0-9]+" />        
                                </div>
                            </div> 
                            <div class="row">
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label id="name-label" for="name"
                                    >Buying Price</label
                                  >
                                  <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value="Ksh."
                                    class="form-control"
                                    required
                                  />
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label id="name-label" for="email"
                                    >Selling Price</label
                                  >
                                  <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    value="Ksh."
                                    class="form-control"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              class="custom-control custom-checkbox custom-control-inline"
                            >
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                name="yes"
                                value="yes"
                                id="yes"
                                style="width: 50px"
                              />
                              <label
                                class="custom-control-label"
                                for="yes"
                                style="margin-left: 2px"
                                >Notify When Re-order Level is Reached</label
                              >
                            </div>

                            <div class="form-group">
                              <input
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
              </transition>-->
              <div class="">
                <div class="table-wrapper">
                  <div
                    class="table-title"
                    style="background: rgb(231, 23, 23); height: 50px"
                  >
                    <div class="row">
                      <div class="col-sm-6">
                        <h2 style="font-size: 1.50rem; color: white; width: 5.19rem; height: 1.81rem; border-width: 0.06rem; left: 1.19rem; top: 1.25rem; padding-top: 0.88rem; padding-bottom: 0.88rem; padding-left: 1.19rem; padding-right: 1.19rem; gap: 59.19rem;font-family:inter;font-weight:500;">
                          STOCK
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
                          Add Product
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
                                  width: 60%;
                                  margin-left: 50px;
                                  margin-top: 70px;
                                "
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
                                    Add Product
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
                                    width: 80%;
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
                                    <div class="row">
                                      <div class="col-md-6">
                                        <div class="form-group" style="">
                                          <label>Brand Name</label>
                                          <select
                                            name="product"
                                            id="product"
                                            class="form-select rounded-0"
                                            required
                                            v-model="
                                              this.formdata.BrandNameSelected
                                            "
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
                                            >Item Name</label
                                          >
                                          <select
                                            name="product"
                                            id="product"
                                            class="form-select rounded-0"
                                            required
                                            v-model="
                                              this.formdata.ItemNameSelected
                                            "
                                          >
                                            <option value="">
                                              Select Product
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
                                
                                    <div class="form-group">
                                      <label>Re-Order Level</label>
                                      <div class="input-group">
                                        <input
                                          type="text"
                                          name="quantity"
                                          id="quantity"
                                          class="form-control rounded-0"
                                          required
                                          pattern="[+-]?([0-9]*[.])?[0-9]+"
                                          v-model="this.formdata.reOrderLevel"
                                        />
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-md-6">
                                        <div class="form-group">
                                          <label id="name-label" for="name"
                                            >Buying Price</label
                                          >
                                          <div
                                            class="form-inline form-group"
                                            style="display: flex"
                                          >
                                            <select
                                              class="form-control input-sm w-5"
                                              style="width: 60px"
                                              v-model="this.formdata.currency"
                                            >
                                              <option value="--" selected>
                                                --
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
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col-md-6">
                                        <div class="form-group">
                                          <label id="name-label" for="email"
                                            >Quantity</label
                                          >
                                       

                                            <input
                                              type="number"
                                              class="form-control"
                                              required
                                              v-model="
                                                this.formdata.quantity
                                              "
                                            />
                                         
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="custom-control custom-checkbox custom-control-inline"
                                    >
                                      <input
                                        type="checkbox"
                                        class="custom-control-input"
                                        name="yes"
                                        value="yes"
                                        id="yes"
                                        style="width: 50px"
                                      />
                                      <label
                                        class="custom-control-label"
                                        for="yes"
                                        style="margin-left: 2px"
                                        >Notify When Re-order Level is
                                        Reached</label
                                      >
                                    </div>

                                    <div class="form-group">
                                      <input
                                        @click.prevent="AdditionStock()"
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
                    </div>
                  </div>
                </div>

                <div class="row mx-5">
                  <div class="col-sm-6 d-flex mt-2">
                    <div
    class="search"
    style="margin-left: 940px; margin-top: 20px; display: flex"
  >
    <!-- <label style="display: flex">SEARCH </label> -->
    <span class="form-control-feedback"><svg style="position:absolute;margin-top:12px;margin-left: 20px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg ></span>
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
                      <div class="col-sm table-responsive">
                        <table id="purchaseList" class="table table-hover table-bordered">
                          <thead style="background-color: rgb(214, 211, 211);font-family: inter;font-weight: bold;font-size: 15px;">
                            <tr>
                              <th>Product ID</th>
                              <th>Product Name</th>
                              <th>Quantity</th>
                              <th>Buying Price</th>
                              <th>Opening Stock</th>
                              <th>Re-order Level</th>
                              <th>Available Stock</th>
                        
                              <th>Date Added</th>
                              <th>Status</th>
                              <th style="width: 80px">Action</th>
                            </tr>
                          </thead>
                          <tbody v-for="stock in this.allstock" v-bind:key="stock.id">
                            <tr style="font-family: inter;font-size: 16px;font-weight: medium;color: gray;">
                              <th scope="row">{{stock.stockId}}</th>
                              <td>{{stock.brandName}}  {{ stock.itemName }}</td>
                              <td>{{stock.quantity}}</td>
                              <td>{{stock.currency}}  {{ stock.buyingPrice }}</td>
                              <td>{{stock.openingStock}}</td>
                              <td>{{stock.reOrderLevel}}</td>
                              <td>{{stock.availableStock}}</td>
                           
                              <td>{{ formatDateAssigned(stock.dateAdded) }}</td>
                              <td>
                                <button
                               
                                  type="button"
                                  class="btn btn-sm"
                                  style="
                                    background-color: green;
                                    width: 60px;
                                    font-size: 15px;
                                    height: 30px;
                                    color: white;
                                    border-radius: 37px;
                                  "
                                >
                                {{ stock.status }}
                                </button>
                              </td>

                              <td >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="green"
                                  class="bi bi-pencil-square"
                                  viewBox="0 0 16 16"
                                  @click="editStock(stock.stockId);"
                                
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
              <div class="table-wrapper" v-if="showallstocksearch">
                  <div class="table-title">
                    <div class="">
                      <div class="col-sm table-responsive">
                        <table id="purchaseList" class="table table-hover table-bordered">
                          <thead style="background-color: rgb(214, 211, 211);font-family: inter;font-weight: bold;font-size: 15px;">
                            <tr>
                              <th>Product ID</th>
                              <th>Product Name</th>
                              <th>Quantity</th>
                              <th>Buying Price</th>
                              <th>Opening Stock</th>
                              <th>Re-order Level</th>
                              <th>Available Stock</th>
                        
                              <th>Date Added</th>
                              <th>Status</th>
                              <th style="width: 80px">Action</th>
                            </tr>
                          </thead>
                          <tbody v-for="stock in this.allstock" v-bind:key="stock.id">
                            <tr style="font-family: inter;font-size: 16px;font-weight: medium;color: gray;">
                              <th scope="row">{{stock.stockId}}</th>
                              <td>{{stock.brandName}}  {{ stock.itemName }}</td>
                              <td>{{stock.quantity}}</td>
                              <td>{{stock.currency}}  {{ stock.buyingPrice }}</td>
                              <td>{{stock.openingStock}}</td>
                              <td>{{stock.reOrderLevel}}</td>
                              <td>{{stock.availableStock}}</td>
                           
                              <td>{{ formatDateAssigned(stock.dateAdded) }}</td>
                              <td>
                                <button
                               
                                  type="button"
                                  class="btn btn-sm"
                                  style="
                                    background-color: green;
                                    width: 60px;
                                    font-size: 15px;
                                    height: 30px;
                                    color: white;
                                    border-radius: 37px;
                                  "
                                >
                                {{ stock.status }}
                                </button>
                              </td>

                              <td >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="green"
                                  class="bi bi-pencil-square"
                                  viewBox="0 0 16 16"
                                  @click="editStock(stock.stockId);"
                                
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
    </div>
  </div>
</template>
<script>
import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared";
export default {
  name: "AddStock",
  mixins: [AppMixins],
  data() {
    return {
      showModal: false,
      showInventory: false,
      showallstock:true,
      showallstocksearch:false,
      formdata: {
        
        buyingPrice: "",
        reOrderLevel: "",
        ItemNameSelected: "",
        BrandNameSelected: "",
        currency: "",
        salesCurrency:"",
        quantity:"",
        
      },
      searchword: "",
      itemBody: {},
      itemID: "",
      allitems: {},
      brandBody: {},
      allbrands: {},
      brandId: "",
      allstock:{},
      itemName:"",
      status:"",
    };
  },
  
  methods: {
    async GetAllStock(){

const response= await this.gettingAllStock();
this.allstock=response.body;





console.log("allstock: ", this.allstock);
return response;

},
formatDateAssigned(value) {
      let formattedDate = new Date(value);
      formattedDate = `${formattedDate.toDateString()} at ${formattedDate.toLocaleTimeString()}`;
      return formattedDate;
    },
    async AdditionStock() {
      console.log("Item Body:", this.itemBody);
      console.log("Item Id", this.itemID);
      console.log("Brand Body", this.brandBody);
      console.log("Brand Id", this.brandId);
      var body = {
        brandName: this.formdata.BrandNameSelected,
        itemName: this.formdata.ItemNameSelected,
        reOrderLevel: this.formdata.reOrderLevel,
        currency:this.formdata.currency,
        buyingPrice: this.formdata.buyingPrice, 
        quantity: this.formdata.quantity,
        salesCurrency:this.formdata.salesCurrency,
      };

      console.log("Stock new: ", body);
      var response = await this.addingStock(body);
      if (response.isTrue == true) {
        swal.fire({
          html: `<h5 class="text-success">${response.message}</h5>`,
        });
      } else {
        swal.fire({
          html: `<h5 class="text-danger">${response.message}</h5>`,
        });
      }

      this.GetAllStock();
      
    },

   
   
    async GetAllItems() {
      const response = await this.gettingAllItems();
      this.allitems = response.body;

      console.log("allitems: ", this.allitems);
      return response;
    },
    async searchstocks() {
      this.showallstock = false;
      this.showallstocksearch = true;
      var resp = await this.SearchingStock(this.searchword);
      this.allstock = resp.body;
      console.log("search  return body: ", resp.body);
    },
    async GetAllBrands() {
      const response = await this.gettingAllBrands();
      this.allbrands = response.body;

      console.log("Brands response: ", response);

      console.log("allbrands: ", this.allbrands);
      return response;
    },
    async editStock(stockId) {
      console.log("stockId is:", stockId);
      this.$router.push({
        path: `/updatestock/${stockId}`,
        replace: true,
      });
    },
  },
  watch: {
    searchword(passedvalue) {
      if (passedvalue != "") {
        this.searchstocks();
      } else {
        this.GetAllStock();
      }
    },
  },
  
  created() {
    this.GetAllItems();
    this.GetAllBrands();
    this.GetAllStock();
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
.has-search .form-control {
    padding-left: 2.375rem;
}

.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 1.0rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
}

</style>
