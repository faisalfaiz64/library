<template>
  <div id="content" class="app-content">
    <h1 class="page-header">Book <small>List</small></h1>
    <hr class="mb-4" />
    <b-container fluid class="p-3">
      <div>
        <b-form-row align-v="center">
          <b-col>
            <b-form-group
              label="Show"
              label-cols="5"
              label-align-sm="right"
              label-for="perPageSelect"
              class="mb-0"
            >
              <b-form-select id="perPageSelect" v-model.number="perPage">
                <option v-for="i in 5" :value="i * 5">{{ i * 5 }}</option>
                <option v-for="i in 12" :value="i * 25">{{ i * 25 }}</option>
              </b-form-select>
            </b-form-group>
          </b-col>
          <b-col cols="4">
            <b-form-group
              label="Filter"
              label-cols="2"
              label-align="left"
              label-for="filterInput"
            >
              <b-form-input
                type="search"
                id="filterInput"
                placeholder="Type to Search"
                v-model="filter"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="4" align-h="end">
            <b-form-group
              label-cols="2"
              label-align="right"
              label-for="filterInput"
            >
              <b-button variant="success" @click="showCreateBook"
                >+ Add Book</b-button
              >
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-table
          table-variant="light"
          :items="books"
          :fields="fields"
          :filter="filter"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :current-page="currentPage"
          :per-page="perPage"
          filter-debounce="200"
          sticky-header="calc(100vh - 10rem)"
          no-border-collapse
          @filtered="filtered"
        >
      <template v-slot:cell(Action)="row">
      <b-button pill v-if="row.item.status == 'CHECKEDOUT'" disabled variant="primary">
				CHECKEDOUT
			</b-button>
      <b-button pill v-else variant="primary" @click="checkout(row.item)">
				CHECKEDOUT
			</b-button>
      <b-button pill v-if="row.item.status == 'AVAILABLE' || row.item.bookDetail.user_id !== user.id" disabled variant="primary">
				CHECKEDIN
			</b-button>
      <b-button pill v-else variant="primary" @click="checkin(row.item)">
				CHECKEDIN
			</b-button>
      </template>
        </b-table>
        <b-col cols="8" class="mx-auto mt-4">
          <b-pagination
            v-model="currentPage"
            :total-rows="filteredLength"
            :per-page="perPage"
            limit="9"
            align="center"
            class="my-0"
          >
          </b-pagination>
        </b-col>
      </div>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    authenticated: 'auth/check',
    user: 'auth/user',
  }),
  data() {
    return {
      perPage: 10,
      filter: null,
      currentPage: 1,
      sortBy: "age",
      sortDesc: false,
      filteredLength: null,
      fields: [
        { key: "title", label: "Title", sortable: true },
        { key: "isbn", label: "Isbn", sortable: false },
        { key: "published_at", label: "Published At", sortable: false },
        { key: "status", label: "Status", sortable: false },
        { key: "Action" },
      ],
      
      books: [],
      selectedUser: "",
    };
  },
  
  methods: {
      async showCreateBook() {
      this.$router.push("/book/create");
    },
    async getList() {
      let _this = this;
     const res = await fetch("/apiadmin/v1/books/list");
      const  comments = await res.json();
        _this.books = comments.data;
        _this.filteredLength = comments.length;
    },
    filtered(arr, num) {
      console.log("array", arr);
      console.log("number", num);
      this.filteredLength = num;
    },

    async edit(user) {
      this.$router.push("/admin/announcement/edit", {id: user.id});
    },

    announcementdelete(item) {
      axios
        .post("/apiadmin/v1/announcement/delete", { id: item.id })
        .then((response) => {
          this.$router.go();
        });
    },
    checkout: function(item) {
		axios({
        url: '/apiadmin/v1/book/checkout',
        method: 'POST',
		data: {
			book_id: item.id,
		},
        }).then((response) => {
		console.log(response);
        this.$bvToast.toast("Book has been Checkout", {
          title: "Upload",
          variant: "success",
          noAutoHide: false,
          solid: true,
        });
        this.books = [];
        this.getList()
      });
    },
    checkin: function(item) {
		axios({
        url: '/apiadmin/v1/book/checkIn',
        method: 'POST',
		data: {
			book_id: item.id,
		},
        }).then((response) => {
		console.log(response);
        this.$bvToast.toast("Book has been CheckIn", {
          title: "Upload",
          variant: "success",
          noAutoHide: false,
          solid: true,
        });
        this.books = [];
        this.getList()
      });
    },
  },
  async created() {
    let _this = this;
    _this.getList();
  },
};
</script>
