<script>
import ShowCard from "@/components/ShowCard.vue";

export default {
	name: "CardBoard",
	props: {
		showList: {
			type: Array,
			required: true,
		},
	},
	components: {
		ShowCard,
	},
};
</script>

<template>
	<section class="board">
		<ShowCard v-for="(show, index) in showList" :key="index" :show="show" />
	</section>
</template>

<style scoped>
.board {
	border-radius: 10px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
	grid-auto-rows: min-content;
	gap: 20px;
}
</style>
