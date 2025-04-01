<script>
import ShowCard from "@/components/ShowCard.vue";

export default {
	name: "CardBoard",
	props: {
		showList: {
			type: Array,
			required: true,
			// validate the prop and its contents
			validator(shows) {
				return shows.every(
					(show) =>
						typeof show.id === "string" &&
						typeof show.title === "string" &&
						typeof show.description === "string" &&
						typeof show.image === "string" &&
						typeof show.rating === "number" &&
						Array.isArray(show.tags) &&
						show.tags.every((tag) => typeof tag === "string") &&
						typeof show.notes === "string" &&
						typeof show.color === "string" &&
						typeof show.releaseDate === "number"
				);
			},
		},
	},
	components: {
		ShowCard,
	},
};
</script>

<template>
	<section class="board">
		<!-- Use show.id rather than index as the key for each showCard element to prevent bugs when filtering functionality is added to the app and the showList array is dynamic  -->
		<ShowCard v-for="(show, index) in showList" :key="show.id" :show="show" />
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
