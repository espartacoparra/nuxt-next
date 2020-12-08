<template>
  <div>
    <div>
      <h3 class="text-center">Comments</h3>
      <b-list-group>
        <b-list-group-item
          v-for="(comment, index) in dataComments"
          :key="index"
          button
          @click="showModal(comment)"
        >
          {{ comment.name }}</b-list-group-item
        >
      </b-list-group>
    </div>
    <b-pagination
      class="mt-2"
      v-model="page"
      :total-rows="comments.total"
      :per-page="comments.per_page"
      aria-controls="my-table"
    ></b-pagination>

    <b-modal ref="my-modal" hide-footer :title="comment.name">
      <div class="d-block text-center">
        <h3>For: {{ comment.email }}</h3>
        <h3>{{ comment.body }}</h3>
      </div>
    </b-modal>
  </div>
</template>

<script>
import request from "../services/request";
export default {
  name: "CommentsComponent",
  created() {
    this.getComments();
  },
  watch: {
    page: function (val, oldVal) {
      console.log(val);
      this.updateComments(val);
      console.log(oldVal);
    },
  },
  data() {
    return {
      comment: {},
      page: 1,
      dataComments: [],
      comments: {},
    };
  },
  methods: {
    async getComments() {
      let data = await request.getComments();

      this.comments.total = data.length;
      let comments = [];
      while (data.length > 0) {
        comments.push(data.splice(0, 10));
      }
      this.page = 1;
      this.comments.comments = comments;
      this.comments.per_page = 10;
      this.dataComments = this.comments.comments[0];
      console.log(this.dataComments);
    },
    updateComments(id) {
      this.dataComments = this.comments.comments[id - 1];
    },
    showModal(comment) {
      this.comment = comment;
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>