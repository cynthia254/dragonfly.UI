<template>
     <a href="#" class="" style="font-size: 17px; padding-top: 80px">
      <i class="bx bx-grid-alt"></i>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="18"
        fill="red"
        class="bi bi-box-arrow-left"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
        />
        <path
          fill-rule="evenodd"
          d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
        />
      </svg>
      <span class="links_name" style="margin-right: 1000px; text-decoration: none"
        ><router-link to="/home" class="text-dark"
          >Back To Project</router-link
        ></span
      >
    </a>
 
      <a href="#" class="" style="font-size: 17px;padding-top:80px">
          <i class='bx bx-grid-alt' ></i>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" fill="red"  class="bi bi-box-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
</svg>
          <span class="links_name" style="margin-right: 1000px;text-decoration: none;"><router-link to="/home" class="text-dark">Back To Project</router-link></span>
        </a>
    <img src="../../assets/images/pay.jpg" alt="avatar" style="height: 50px;width: 200px;margin-right: 400px;margin-top: 20px;"> 
    <div style="width: 40%;">
 <div class="text-center">
   <button @click="showModal=true" class="btn btn-default pull-right add-row" style="background-color: blue;margin-left: 900px;color: white;"><router-link to="" class="text-light" style="text-decoration: none;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
 <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
</svg>&nbsp;&nbsp; Add Responsibility</router-link></button>
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
                          margin-top: 140px;
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
                              Add Responsibility
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
                                <label>Responsibility Name</label>
                                <div class="input-group">
                                  <input v-model="this.formdata.roleclaimname" 
                                    type="text"
  
                                    class="form-control rounded-0"
                                    placeholder="Enter Feature Name"
                                    required
                                   
                                  />
                                </div>
                                </div>
                            
  
                              <div class="form-group">
                                <input  @click.prevent="AddRoleClaim()"
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
  <div class="mx-5 pt-4" >
   <table class="table table-bordered">
     <thead class="thead-dark">
       <tr>
         <th scope="col">Responsibility Id</th>
         <th scope="col">Responsibility Name</th>
         <th scope="col">Action</th>
         


       </tr>
     </thead>
     <tbody v-for="responsibility in this.allresponsibility" v-bind:key="responsibility.id">
       <tr class="mt-4">
         <th scope="row">{{ responsibility.rolesClaimsTableId}}</th>
         <td>{{ responsibility.claimName }}</td>
         <td>
            <button  type="button" class="btn btn-danger mx-1" data-toggle="tooltip" data-placement="top" title="Delete"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16" @click.prevent="deletingresponse(responsibility.rolesClaimsTableId)">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg></button>
</td>
        
       </tr>
    </tbody>
 
</table>
</div>
</template>
<script>
   import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared.js"
export default{
   name:'responsibilityTable',
   mixins:[AppMixins],

   data(){
       return {
           allresponsibility: [],
           showModal:false,
       
           formdata: {
        roleclaimname:"",

    
      },
       };

   },
   methods:{

async GetAllRolecLaims(){
 const response= await this.GettingAllResponsibility();
  this.allresponsibility=response.body;

  
  console.log("alldesignation: ", this.allresponsibility);
 return response;

},
async AddRoleClaim() {
  
  var roleclaimname =this.formdata.roleclaimname;

  

 console.log("Roles new: ", roleclaimname);
var response = await this.addRoleClaim(roleclaimname);
if (response.code == "200") {
  this.showusers=true;
  swal.fire({
    html: `<h5 class="text-success">${response.message}</h5>`,
  });
} else {
  swal.fire({
    html: `<h5 class="text-danger">${response.message}</h5>`,
  });
}
this.GetAllRolecLaims();
},
async deletingresponse(rolesClaimsTableId){
    var response=await this.deletingResponsibility(rolesClaimsTableId);
    console.log("deleting designation:",response.message);
    await this.GetAllRolecLaims();
 
    let promise = new Promise((resolve, reject) => {
        if (response.code == "200") {
          this.showspiner=false;
          swal.fire({
            html: `<h5 class="text-success">${response.message}<h5>`,
          });

          
          return resolve(response.message);
        } else {

          this.showspiner=false;
          swal.fire({
            html: `<h5 class="text-danger">${response.message}<h5>`,
          });
          return reject(response.message);
        }
      });

      return promise;
    },



   },
   created(){
this.GetAllRolecLaims();
}

}
</script>
<style>

</style>