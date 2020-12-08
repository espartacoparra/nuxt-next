<template>
  <div class="Home">
    <h3 class="text-center">Users</h3>
    <div class="row">
      <div
        v-for="(item, index) in users.data"
        :key="index"
        class="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4"
      >
        <Nuxt-link :to="'user/' + item.id">
          <b-card
            :title="item.first_name + ' ' + item.last_name"
            :img-src="item.avatar"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2 ml-2"
          >
            <b-card-text>
              Email:{{ item.email }} <br />
              <br />
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>
          </b-card>
        </Nuxt-link>
      </div>
    </div>

    <b-pagination
      v-model="page"
      :total-rows="users.total"
      :per-page="users.per_page"
      aria-controls="my-table"
    ></b-pagination>
  </div>
</template>

<script>
import request from "../services/request";
export default {
  name: "HomeComponent",
  async fetch() {
    await this.getUsers(1);
  },
  async created() {},
  data() {
    return {
      page: 1,
      users: {},
    };
  },
  watch: {
    page: function (val, oldVal) {
      this.updatePage(val); // call it in the context of your component object
    },
  },
  methods: {
    async getUsers(page) {
      this.users = await request.getUsers(page);
      console.log(this.users);
      this.page = this.users.page;
    },
    updatePage(id) {
      this.getUsers(id);
    },
  },
};
</script>

<style  scoped>
a {
  color: black;
  text-decoration: none;
}
a:hover {
  color: rebeccapurple;
}
</style>
