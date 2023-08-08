<template>
     <link href='https://fonts.googleapis.com/css?family=Inter:500,700' rel='stylesheet'>
   <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>

    <div style="margin-top: 10px;">
    <div>
      <input type="file" @change="handleFileUpload" />
      <button @click="upload">Upload</button>
    </div>
</div>
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
      };
    },
    methods: {
      handleFileUpload(event) {
        this.file = event.target.files[0];
      },
      async upload() {
        const formData = new FormData();
        formData.append('file', this.file);
        var response= await this.uploadingFiles(formData);
        console.log("response of the uploaded file is______:",response)
        if (response.isTrue==true) {
 
 swal.fire({
   heightAuto: false,
   html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,

 });
        }else{
          swal.fire({
    heightAuto: false,
    html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
  });

        }
  
      },

    },
  };
  </script>
  