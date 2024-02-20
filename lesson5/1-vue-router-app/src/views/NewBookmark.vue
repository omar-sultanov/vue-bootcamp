<template>
  <div class="d-flex flex-column align-items-center">
    <div>
      <h3 class="text-center my-4">New Bookmark</h3>
    </div>
    <div class="w-50">
      <form class="w-100">
        <div class="mb-3">
          <label for="text1" class="form-label"
            ><b><i>Header</i></b></label
          >
          <input
            v-model="userData.title"
            type="text"
            class="form-control"
            id="text1"
            placeholder="Header ..."
          />
        </div>
        <div class="mb-3">
          <label for="text2" class="form-label"
            ><b><i>Link</i></b></label
          >
          <input
            type="text"
            v-model="userData.link"
            class="form-control"
            id="text2"
            placeholder="https:// ..."
          />
        </div>

        <label for="text3" class="form-label"
          ><b><i>Description</i></b></label
        >
        <div class="form-floating mb-3">
          <textarea
            v-model="userData.description"
            class="form-control"
            placeholder="Leave a comment here"
            id="text3"
            style="height: 100px"
          ></textarea>
        </div>
        <div class="button-group d-flex justify-content-between">
          <button type="submit" class="btn btn-primary" @click="onSave">
            Submit
          </button>
          <button
            type="button"
            class="btn btn-warning"
            @click="$router.push({ name: 'HomePage' })"
          >
            ->Home
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import appAxios from '@/utils/appAxios';

export default {
  data() {
    return {
      userData: {
        title: null,
        link: null,
        description: null,
      },
    };
  },
  methods: {
    onSave() {
      appAxios.post("/bookmarks", this.userData).then(this.$router.push({ name: 'HomePage' }))
    },
  },
};
</script>
