<template>
  <div class="container">
    <div></div>
    <div class="mt-4" v-if="Object.keys(user).length > 0">
      <b-card :img-src="user.avatar" img-alt="Card image" img-left class="mb-3">
        <b-card-text>
          <p>Name: {{ user.first_name + " " + user.last_name }}</p>
          <p>Name: {{ user.email }}</p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
          aperiam blanditiis natus, illum repudiandae earum consequuntur
          repellendus maiores consectetur veritatis, in possimus perferendis
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
import request from "../../services/request";

export default {
  name: "User_id",
  async fetch() {
    this.getUser(this.$route.params.id);
  },
  created() {
    this.getUser(this.$route.params.id);
  },
  data() {
    return {
      user: {},
    };
  },
  methods: {
    async getUser(id) {
      this.user = (await request.getUser(id)).data;
      console.log(this.user);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>