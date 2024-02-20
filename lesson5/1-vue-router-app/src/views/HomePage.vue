<template>
  <div class="mx-auto my-4 w-75 d-flex flex-column">
    <div>
      <h3 class="text-center my-3">
        Bookmark app
        <small class="text-muted">by vue</small>
      </h3>
    </div>
    <div class="text-end">
      <button
        type="button"
        class="btn btn-primary"
        @click="$router.push({ name: 'NewBookmark' })"
      >
        + New Bookmark
      </button>
    </div>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Headers</th>
            <th scope="col">URL</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(bookmark, index) in bookMarkList" :key="index">
            <th scope="row">{{ index }}</th>
            <td>{{ bookmark.title }}</td>
            <td>{{ bookmark.link }}</td>
            <td>
              <button type="button" class="btn btn-danger" @click="deleteMark(bookmark)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import appAxios from '@/utils/appAxios';
export default {
  data() {
    return {
      bookMarkList: [],
    };
  },
methods: {
  deleteMark(bookmark){
    appAxios.delete(`/bookmarks/${bookmark.id}`).then(response=>console.log(response))
    this.bookMarkList = this.bookMarkList.filter(item=>item.id!==bookmark.id)
  }
},
  created() {
    appAxios.get('/bookmarks').then((response) => {
      this.bookMarkList = response.data || [];
      console.log(response);
    });
  },
};
</script>
