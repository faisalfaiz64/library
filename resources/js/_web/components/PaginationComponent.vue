<template>
    <nav class="pagination pagination-lg justify-content-center" style="text-align: center;display: flex;align-items: center;"  role="navigation" aria-label="pagination">
        <button class="btn my-4 btn-default text-white btn-sm" @click.prevent="changePage(1)" :disabled="pagination.current_page <= 1">First page</button>
        <button class="btn my-4 btn-default text-white btn-sm" @click.prevent="changePage(pagination.current_page - 1)" :disabled="pagination.current_page <= 1">Previous</button>
        <ul class="pagination-list" style="display: flex;flex-flow: row;margin: 0;flex: auto;justify-content: center;">
            <li v-for="page in pages">
                <a class="btn my-4 btn-default text-white btn-sm" :class="isCurrentPage(page) ? 'is-current' : ''" @click.prevent="changePage(page)">{{ page }}</a>
            </li>
        </ul>
		<button class="btn my-4 btn-default text-white btn-sm" @click.prevent="changePage(pagination.current_page + 1)" :disabled="pagination.current_page >= pagination.last_page">Next page</button>
        <button class="btn my-4 btn-default text-white btn-sm" @click.prevent="changePage(pagination.last_page)" :disabled="pagination.current_page >= pagination.last_page">Last page</button>
    </nav>
</template>

<script>
    export default {
        props: ['pagination', 'offset'],
        methods: {
            isCurrentPage(page) {
                return this.pagination.current_page === page;
            },
            changePage(page) {
                if (page > this.pagination.last_page) {
                    page = this.pagination.last_page;
                }
                this.pagination.current_page = page;
                this.$emit('paginate');
            }
        },
        computed: {
            pages() {
                let pages = [];
                let from = this.pagination.current_page - Math.floor(this.offset / 2);
                if (from < 1) {
                    from = 1;
                }
                let to = from + this.offset - 1;
                if (to > this.pagination.last_page) {
                    to = this.pagination.last_page;
                }
                while (from <= to) {
                    pages.push(from);
                    from++;
                }
                return pages;
            }
        }
    }
</script>

<style lang="scss" scoped>
	.btn{
		padding: 10px 20px;
		text-align: center;
	}
    .pagination {
        margin-top: 40px;
    }
    li{
		margin: 0 10px;
		list-style: none;
		a{
			width: 55px;
			text-align: center;
			display: block;
		    padding: 10px!important;
		}
    }
</style>
