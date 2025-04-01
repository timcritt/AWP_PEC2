<script>
export default {
	name: "FilterBar",

	data() {
		return {
			addNewShow: true, // Set to true by default for testing during PEC 2.
		};
	},
};
</script>

<template>
	<search class="filter-bar">
		<div class="filter-bar__first">
			<input
				type="text"
				placeholder="Search..."
				class="filter-bar__input"
			/><button class="btn">clear</button>
			<button v-if="addNewShow" class="btn btn--cta">Add new show</button>
		</div>
		<form class="filter-bar__second">
			<div class="input-group">
				<label for="tag">Tag</label>
				<select id="tag" name="tag">
					<option value="all">All</option>
					<option value="action">Action</option>
					<option value="drama">Drama</option>
					<option value="horror">Horror</option>
					<option value="sci-fi">Sci-fi</option>
					<option value="thriller">Thriller</option>
				</select>
			</div>
			<div class="input-group">
				<label for="rating">Min rating</label>
				<input
					id="rating"
					name="rating"
					type="range"
					min="0"
					max="5"
					step="1"
					value="0"
				/>
			</div>
			<div class="input-group">
				<label for="sort">Sort by</label>
				<select id="sort" name="sort">
					<option value="name">Name</option>
					<option value="release-date">Release Date</option>
					<option value="rating">Rating</option>
				</select>
			</div>
			<div class="input-group">
				<label for="order">Order</label>
				<select id="order" name="order">
					<option value="ascending">Ascending</option>
					<option value="descending">Descending</option>
				</select>
			</div>
		</form>
	</search>
</template>

<style scoped>
/* Parent */
.filter-bar {
	display: grid;
	grid-template-rows: 1fr 1fr;
	height: 100px;
	gap: 20px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	background-color: #393a41;
	border-radius: 10px;
	padding: 10px;
	width: calc(100% - 20px);
	color: white;
	margin-bottom: 20px;
}

/* First column */
.filter-bar__first {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	gap: 10px;
	height: 100%;
}

/* Second column */
.filter-bar__second {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	gap: 20px;
}

/* Input with label */
.input-group {
	display: flex;
	flex-direction: row;
	gap: 10px;
	align-items: center;
}
</style>
