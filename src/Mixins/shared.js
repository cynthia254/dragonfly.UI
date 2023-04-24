import axios from "axios";

export default {
  name: "AppMixins",
  methods: {
    setAuthHeader() {
      axios.defaults.baseURL = "http://localhost:5221/api";
      axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
      axios.defaults.headers.common["Authorization"] =
        localStorage.getItem("token");
    },

    async registereduser(body) {
      console.log("sent body of registered user: ", body);
      this.setAuthHeader();

      var response = await axios.post("User/Register_User", body);
      console.log("Response on register response:", response.data);
      return response.data;
    },
   
    async GettingAllUsers() {
      this.setAuthHeader();
      var response = await axios.get("User/GetAllUsers");

      return response.data;
    },
    async registeringTicket(body) {
      this.setAuthHeader();
      var response = await axios.post("Ticktes/RegisterTicket", body);
      return response.data;
    },
   


    async getAllTickets() {
      this.setAuthHeader();
      var response = await axios.get("Ticktes/GetAllTickets");
      console.log("All tickets out: ", response.data)
      return response.data;
    },

    async gettingticketbyid(ticketid){
      this.setAuthHeader();

      var response= await axios.post(`Ticktes/getticketbyid?ticketid=${ticketid}`)
      return response.data;
    },
    async gettinguserbyid(userId){
      this.setAuthHeader();

      var response= await axios.post(`User/getuserbyid?userId=${userId}`)
      return response.data;
    },
    async AssginingTicket(body){
      this.setAuthHeader();
      var resp= await axios.post('Ticktes/Assigntickettouser',body);

      return resp.data;
    },
    async confirmEmail(useremail){
      console.log("passed mail: ", useremail)
      this.setAuthHeader();
      var response=await axios.post(`User/ConfirmUserMail?useremail=${useremail}`)
      return response.data;
    },
    async editUser(useremail){
      console.log("passed mail: ", useremail)
      this.setAuthHeader();
      var response=await axios.post(`User/Edituseremail`)
      return response.data;
    },
    async gettinguserbyemail(useremail){

      this.setAuthHeader();

      var response= await axios.post(`User/GetuserByEmail?useremail=${useremail}`);
    console.log("logging body:", response.body);
      return response.data;
    },

    async ResolvingTickets(body){
      console.log("body:",body)

       this.setAuthHeader();
      var resp = await axios.post('Ticktes/resolveticket', body);
      return  resp.data;

    },
    async EscalatingTickets(body){
      console.log("body:",body)

       this.setAuthHeader();
      var resp = await axios.post('Ticktes/escalateticket', body);
      return  resp.data;

    },
    async ClosingTickets(body){
      console.log("body:",body)

       this.setAuthHeader();
      var resp = await axios.post('Ticktes/closeticket', body);
      return  resp.data;

    },
    async deletingUser(useremail){
      this.setAuthHeader();
      var resp=await axios.post(`User/DeleteUsers?usermail=${useremail}`);
      return resp.data;
    },
    async editinguser(useremail){
      this.setAuthHeader();
      var resp=await axios.post(`User/Edituseremail?newemail=${useremail}`);
      return resp.data;
    }
   

  
  },
};
