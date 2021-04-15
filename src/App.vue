<template>
  <div id="app">
    <detail v-if="modal">
      <button @click="closeModal">Close</button>
      <h3>{{ detail.title }}</h3>
      <img :src="detail.image" />
      <h4>SHOW TIME</h4>
      <h4>{{ detail.showTime }}</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
        maiores, aliquam rerum omnis placeat fugiat? Commodi vitae corrupti,
        eius, nisi consequuntur tempora nobis saepe quos quae totam officia
        animi vero.
      </p>
    </detail>
    <div class="movies flex flex-jc-c flex-ai-c flex-fd-c" :class="turn">
      <div>
        <input type="text" placeholder="Search here..." v-model="search" />
        <input type="date" v-model="date" />
      </div>
      <div class="movies__list flex flex-jc-c flex-ai-c">
        <div
          v-for="movie in movies"
          :key="movie.id"
          @click="getDetail(movie)"
          class="flex flex-jc-sb flex-ai-c flex-fd-c"
        >
          <h3>{{ movie.title }}</h3>
          <img :src="movie.image" />
          <h4>SHOW TIME</h4>
          <h4>{{ movie.showTime }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Detail from "./components/Detail.vue";

export default {
  components: {
    Detail,
  },
  data() {
    return {
      search: "",
      modal: false,
      detail: "",
      date: "",
      turn: "",
    };
  },
  created() {
    this.$store.dispatch("loadMovies");
  },
  methods: {
    getDetail(movie) {
      this.detail = movie;
      this.modal = true;
      this.turn = "turn";
    },
    closeModal() {
      this.modal = false;
      this.turn = "";
    },
  },
  computed: {
    ...mapGetters({
      getMovies: "getMovies",
    }),
    movies: function() {
      return this.getMovies.filter((movie) => {
        if (this.search) {
          return movie.title.match(this.search);
        } else {
          return movie.showTime.match(this.date);
        }
      });
    },
  },
};
</script>
