<template>
    <div style="margin-top: 10px;">
    <div>
      <input type="file" @change="handleFileUpload" />
      <button @click="upload">Upload</button>
    </div>
</div>
  </template>
  
  <script>
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
  
      },

    },
  };
  </script>
  