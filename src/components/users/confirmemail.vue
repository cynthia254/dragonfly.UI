<template>
<form>
  <!-- Email input -->
 

  <!-- Password input -->
  <div class="form-outline mb-4" style="margin-top: 100px;width:700px;align-items: center;margin-left: 300px;">
    <input type="email" id="form1Example2" class="form-control" placeholder="ConfirmUserEmail" v-model="this.useremail" />
 
  </div>

 


  <!-- Submit button -->
  <button type="submit" class="btn btn-primary btn-block" style="width: 400px;margin-left:500px" @click.prevent="this.ConfirmUserAccount();">Confirm</button>
</form>
</template>
<script>
import AppMixins from "../../Mixins/shared.js"

import swal from "sweetalert2";
export default{
    name:'confirmEmail',
    mixins:[AppMixins],

    data(){
      return{
      
        useremail:"",
    
    };
 
  },
  methods:{
    async ConfirmUserAccount()
    {
     
      var useremails=this.useremail;

        
       console.log("useremails :   ", useremails);
      var response =await  this.confirmEmail(useremails);

      let promise = new Promise((resolve, reject) => {
        if (response.code == "200") {
          swal.fire({
            html: `<h5 class="text-success">${response.message}<h5>`,
          });
          return resolve(response.message);
        } else {
          swal.fire({
            html: `<h5 class="text-danger">${response.message}<h5>`,
          });
          return reject(response.message);
        }
      });

      return promise;
    },
  },
  }



</script>