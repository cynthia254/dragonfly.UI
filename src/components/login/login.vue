<template>
  <div class="">
    <section class="vh-100 bg-danger" style="">
      <div class="w-75 mx-auto py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card" style="border-radius: 1rem">
              <div class="row g-0">
                <div class="col-md-6 col-lg-5 d-none d-md-block bg-danger" style="height:100%;">
                  <img
                    src="../../assets/images/pexels-monstera-9432428.jpg"
                    alt="login form"
                    class="img-fluid"
                    style="border-radius: 1rem 0 0 1rem"
                  />
                </div>
                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                  <div class="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div class="d-flex align-items-center mb-3 pb-1">
                        <span
                          class="h1 fw-bold mb-0 text-center text-danger mx-4.5"
                          >PAYHOUSE LOGIN</span
                        >
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          class="form-control form-control-lg"
                          v-model="this.formdata.useremail"
                          required
                        />
                        <label class="form-label" for="form2Example17"
                          >Email address</label
                        >
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          class="form-control form-control-lg"
                          v-model="this.formdata.userpassword"
                          required
                        />
                        <label class="form-label" for="form2Example27"
                          >Password</label
                        >
                      </div>

                      <div class="pt-1 mb-4" style="margin-left: 40%;">
                        <button
                          class="btn btn-dark btn-lg btn-block"
                          type="button"
                          @click="this.loginUser()"
                        >
                          Login
                        </button>
                      </div>
                      <div class="" v-if="this.spinner">
                      <div class="spinner-border text-primary" role="status">
                        <span class="sr-only"></span>
                      </div>

                    </div>

                      <a class="small text-muted" href="#!"><router-link  to="/forgotpassword" class="text-dark">Forgot password?</router-link></a>
                      <br>
                      <a href="#!" class="small text-muted">Terms of use.</a>
                      <a href="#!" class="small text-muted">Privacy policy</a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import AppMixins from "../../Mixins/shared";

export default {
  name: "loginPage",
  mixins: [AppMixins],

  data() {
    return {
      formdata: {
        userpassword: "",
        useremail: "",  
      },
      spinner:false
    };
  },
  methods: {  
    async loginUser() {
      this.spinner=true;
      console.log("formdata: ", this.formdata);
      this.setAuthHeader();
      const loginbody = {
        password: this.formdata.userpassword,
        userName: this.formdata.useremail,
      };
   
      const response = await axios.post("User/Authenticate", loginbody, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Response data:", response);

      if (response.data.code == "200") {
        this.spinner=false;
        console.log("loggin message: ", response.data.message);
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.token;
        localStorage.setItem("token", `Bearer ${response.data.token}`);

        this.$router.push({
          path: `/home`,
          replace: true,
        });

        swal.fire({
          title: "WELCOME BACK",
          text: `${response.data.firstname} ${response.data.lastName}`,
          icon: "success",
          button: "OK!",

        });
      } else {
        this.spinner=false;
        console.log("Error message: ", response.message);

        return swal.fire({
          html: `<h4 class="text-danger">${response.data.message}</h4>`,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
