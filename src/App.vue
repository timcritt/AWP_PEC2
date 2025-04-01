<script>
import card_test_data from "@/assets/card_test_data.json";
import CardBoard from "@/components/CardBoard.vue";
import FilterBar from "@/components/FilterBar.vue";
import CardForm from "@/components/CardForm.vue";

export default {
	name: "App",
	components: {
		CardBoard,
		FilterBar,
		CardForm,
	},
	data() {
		return {
			card_test_data, // Only used for testing during PEC 2
			ShowForm: true, //Set to true by default for testing during PEC 2
		};
	},
};
</script>

<template>
	<header class="main-header">
		<div class="logo">
			<img src="./assets/logo.png" alt="UOC Logo" />
		</div>
		<h1>TV Show Manager: Timothy Crittenden</h1>
	</header>
	<FilterBar />
	<main class="main">
		<div class="shows-container">
			<div class="shows-container__board">
				<CardBoard :showList="card_test_data" />
			</div>
			<!-- Conditionally render the form container -->
			<div v-if="ShowForm" class="shows-container__form"><CardForm /></div>
		</div>
	</main>
</template>

<style scoped>
/* Header */
.main-header {
	height: 75px;
	display: grid;
	grid-template-columns: 70px 1fr;
	align-items: center;
	gap: 10px;
}

.logo img {
	height: 100%;
	width: 100%;
	object-fit: contain;
}

/* Wrapper below header */
.main {
	min-height: calc(100vh - 100px);
}

/* Container for CardBoard and CardForm */
.shows-container {
	display: flex;
	flex-direction: row;
	gap: 20px;
}

.shows-container__board {
	flex: 70% 1 0;
}
</style>
