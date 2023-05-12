<template>
  <div class="" style="margin-top: 30px;">
    <select
      class="form-select"
      aria-label="Default select example"
      v-model="this.selectedroleid"
    >
      <option selected disabled >select role</option>
      <option
        v-for="roles in this.allroles"
        v-bind:value="roles.rolesID"
        :key="roles.rolesID"
      >
        {{ roles.roleName }}
      </option>
    </select>
    <div class="mt-5">
      <h5 class="text-success">Role Claims</h5>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">123 ..;</th>
          <th scope="col">Claims</th>
        </tr>
      </thead>
      <template
        v-for="(roleclaim, index) in this.rolecliamsfound"
        v-bind:key="roleclaim.rolesClaimsTableId"
      >
        <tbody>
          <tr>
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ roleclaim.claimName }}</td>
          </tr>
        </tbody>
      </template>
    </table>
  </div>
</template>
<script>
import AppMixins from "../../Mixins/shared";
export default {
  name: "roleClaims",
  mixins: [AppMixins],

  data() {
    return {
      allroles: {},
      selectedroleid: "",
      rolecliamsfound: {},
    };
  },
  methods: {
    async GetAllRoles() {
      const response = await this.GettingAllRoles();
      this.allroles = response.body;

      console.log("allroles: ", this.allroles);
      return response;
    },

    async getallroleClaims() {
      var roleided = this.selectedroleid;
      var response = await this.gettingallroleClaims(roleided);
      this.rolecliamsfound = response.claims;
      console.log("role cliams found : ", this.rolecliamsfound);
    },
  },
  created() {
    this.GetAllRoles();
  },
  watch: {
    selectedroleid(valuefound) {
      console.log("old value watch: ", valuefound);

      this.getallroleClaims();
    },
  },
};
</script>
<style></style>
