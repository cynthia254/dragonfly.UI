<template>
     <link href='https://fonts.googleapis.com/css?family=Inter:500,700' rel='stylesheet'>
   <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>
   <div class="form-control" style="margin-top:5px;border:0;border-radius: 10px;box-shadow: 0px 8px 27px 0px rgba(136, 133, 133, 0.25);">
      
      <div class="table-wrapper">
                  <div class="table-title">
                    <div class="">
                      <div class="col-sm table-responsive">
    <table class=" table table-hover table-bordered" style="margin-left:40px">
  <thead style="background-color:   #F3E6DA;font-family: inter;font-weight: bold;font-size: 16px;white-space: nowrap;">
                        
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Serial Number</th>
      <th>IMEI 1</th>
      <th>IMEI 2</th>
      <th>Serial Status</th>
      <th> Condition</th>
      <th>Action</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="(invoiceitem,index) in this.invoiceItemBody" :key="invoiceitem.itemID" style="font-family: inter;font-size: 16px;font-weight: medium;color: gray;  ">
      <th scope="row">{{index +1}}</th>
     
      <td style="text-transform: uppercase;">{{invoiceitem.serialNumber}}</td>
      <td>{{ invoiceitem.imeI1 }}</td>
      <td>{{ invoiceitem.imeI2 }}</td>
      <td  :style="getStatusStyle(invoiceitem)">{{ invoiceitem.serialStatus }}</td>
      <td  :style="getStatusStyle(invoiceitem)">{{ invoiceitem.itemStatus }}</td>
      <td>
                            <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="green"
                                  class="bi bi-pencil-square"
                                  viewBox="0 0 16 16"
                                  @click="editSerialNumber(invoiceitem.batchID)"
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
<div class="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-end">
                <button
                  @click="showModal = true"
                  type="button"
                  name="addPurchase"
                  id="addPurchase"
                  class="btn btn- btn-sm "
                  style="width: 140px;
                            margin-top: 20px;
                            border-radius: 50px;
                            font-family: inter;
                            display: flex;
                            align-items: center;background:rgb(1, 1, 141);color: white;text-align: center;height: 34px;"
                >
                
             <h2 style="font-size: 14px;color: white;margin-top: 8px;margin-left: 15px;font-family:inter;">Upload Bulk</h2>
              
            </button>
              </div>
       

</div>
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
                                  margin-top: 50px;
                                  background: #f5f5f5;
                                  border-radius: 18px;
                                  height:100%;"
                      >
                        <div class="modal-header">
                          <h4 class="modal-title" style="margin-left: 40px;margin-top: 20px; font-family: inter;font-size: 22px;">
                           
                            Add Product Details
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
                          <form  id="purchaseForm" ref="myForm">
                    <div class="form-group">
                              <label style="font-family: inter;font-size: 16px;">Upload File</label>
                              <div class="input-group">
                                <input type="file" @change="handleFileUpload" style=""/>
                              </div>
                              
                            </div>

                            <div class="form-group" style="margin-top: 20px;">
                              <input @click.prevent="uploadPO()"
                                type="submit"
                               
                                class="btn btn-success btn-sm"
                                value="Save"
                                form="purchaseForm"
                                style="margin-bottom: 30px;margin-left: 70px;width: 60%;font-family: inter;font-size: 13px;background:green"
                             
                                />
                            
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
  </template>
  
  <script>
  import swal from "sweetalert2";
 import AppMixins from "../../Mixins/shared"
  export default {
    name:"UploadProduct",
    mixins:[AppMixins],
    data() {
      return {
        file: null,
        showModal:false,
        invoiceItemBody:[],
      };
    },
    methods: {
      handleFileUpload(event) {
        this.file = event.target.files[0];
      },
      async gettingproductdetailsbyid() {
// Assuming batchID is defined and contains the correct value
   var response = await this.gettingproductbyId(this.id);
   console.log("delivery id:",this.id);
   this.invoiceItemBody = response.body;
   console.log("response on invoice body: : ", this.invoiceItemBody);
   //this.reference_number=this.invoiceItemBody.reference_Number;
},
      async uploadPO() {
        const formData = new FormData();
        formData.append('file', this.file);
        var response= await this.uploadingFiles(formData,this.id);
        console.log("response of the uploaded file is______:",response)
        if (response.isTrue==true) {
 
 swal.fire({
   heightAuto: false,
   html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,

 });
 await this.gettingproductdetailsbyid();
  this.$router.push({
          path: `/invoice_item/${this.id}`,
          replace: true,
        });


        setTimeout(()=>{
          location.reload();

        },700)

   await this.gettingreferencenumbers();
        }else{
          swal.fire({
    heightAuto: false,
    html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
  });

        }
  
      },

    },
    created(){
      this.id = this.$route.params.id;
        console.log("poNumber :", this.id);
      this.gettingproductdetailsbyid();

    }
  };
  </script>
  