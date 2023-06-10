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
                  <li><a href="/supplier">Manage Suppliers</a></li>
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
    <section>
        <div class="col-md-10" style="margin-left: 10%;margin-top:10px;width: 50%;">
    <span class="anchor" id="formContact"></span>
    <hr class="my-5" />
    <!-- form contact -->
    <div class="card card-outline-secondary">
      <div class="card-header">
        <h3 class="mb-0">Update Stock</h3>
      </div>
      <div class="card-body">
        <fieldset>
            <label class="mb-0">Brand Name</label>
          <div class="row mb-1">
            <div class="col-lg-12">
              <input class="form-control" type="text text-dark" v-model="stockBody.brandName" disabled  />
            </div>
            </div>
            <label class="mb-0">Item Name</label>
          <div class="row mb-1">
            <div class="col-lg-12">
              <input class="form-control text-dark" type="text" v-model="stockBody.itemName" disabled   />
            </div>
            </div>
            <label class="mb-0">Buying Price</label>
          <div class="row mb-1">
            <div class="col-lg-12">
              <input class="form-control" type="text" v-model="stockBody.buyingPrice"  disabled />
            </div>
            </div>
          <label class="mb-0">Quantity</label>
          <div class="row mb-1">
            <div class="col-lg-12">
              <input class="form-control" type="number" v-model="this.quantityadded"  />
            </div>
          </div>
        
           
          

          <!-- Table  -->
          <button
            class="btn btn-danger btn-lg float-center"
            style="margin-left: 20%; margin-top: 2%"
            type="submit"
          @click.prevent="editStock();"
          >
            UPDATE STOCK
          </button>
        </fieldset>
      </div>
    </div>
    <!-- /form contact -->
  </div>
    
  </section>
</template>
<script>
import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared";
export default{
    name:'UpdateStock',
    mixins: [AppMixins],
    data(){
        return{
            stockBody:{},
            allstock:{},
            itemName:"",
            stockId:""
          
          
         

        }
        
    },
    methods:{
    

        async editStock() {           
      
      var itemname=this.stockBody.itemName;
      var quantityadded=this.quantityadded;
      var brandname=this.stockBody.brandName;
   
      

      console.log(" the item and quantity :  _________", itemname,brandname,quantityadded);
      
      var response = await this.updatingstock(this.stockId, quantityadded) ;

      console.log(" whta is response _______", response)
      if (response.isTrue==true) {
        swal.fire({
          html: `<h5 class="text-success">${response.message}</h5>`,
        });
      } else {
        swal.fire({
          html: `<h5 class="text-danger">${response.message}</h5>`,
        });
      }
    },
    async GetAllStock(){

const response= await this.gettingAllStock();
this.allstock=response;

console.log("allstock: ", this.allstock);
return response;

},

async gettingStockByIds() {
      var stockid=this.stockId;
      var response = await this.gettingStockbyid(stockid);
      this.stockBody = response.body;
      console.log("response on returnned body: : ", this.stockBody);
      //console.log("body returned: ",this.stockBody);

},



    },
    created() {
        this.stockId = this.$route.params.stockId;
        console.log("ItemId :", this.stockId);
        console.log("stocke id: ")
        this.GetAllStock();
        this.gettingStockByIds(); 
       

   
  },
}
</script>