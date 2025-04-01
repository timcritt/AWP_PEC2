<script>
import arrowIcon from "@/assets/arrow-right.svg";

export default {
	name: "CardForm",

	data() {
		return {
			arrowIcon,
		};
	},
};
</script>

<template>
	<section class="section-add">
		<button class="section-add__close" type="button">
			<img :src="arrowIcon" alt="hide menu" />
		</button>

		<form>
			<fieldset>
				<legend>Add a new show</legend>
				<div class="form-group">
					<label for="title">Title:</label>
					<input type="text" id="title" name="title" required />
				</div>
				<div class="form-group">
					<label for="description">Description:</label>
					<textarea
						id="description"
						name="description"
						rows="3"
						required
					></textarea>
				</div>
				<div class="form-group">
					<label for="image">Image URL:</label>
					<input type="url" id="image" name="image" required />
				</div>
				<div class="form-group">
					<label for="rating">Rating:</label>
					<input
						type="number"
						id="rating"
						name="rating"
						min="0"
						max="5"
						required
					/>
				</div>
				<div class="form-group">
					<label for="tags">Tags:</label>
					<input type="text" id="tags" name="tags" required />
				</div>
				<div class="form-group">
					<label for="notes">Notes:</label>
					<textarea id="notes" name="notes" rows="3" required></textarea>
				</div>
				<div class="form-group">
					<label for="color">Color:</label>
					<input type="color" id="color" name="color" required />
				</div>
				<div class="form-group">
					<button type="submit" class="btn btn--cta">Add show</button>
				</div>
			</fieldset>
		</form>
	</section>
</template>

<style scoped>
/* Parent */
.section-add {
	width: calc(100% - 40px);
	min-width: 300px;
	margin: 0 auto;
	padding: 20px;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	background-color: #393a41;
	color: white;
	position: relative;
}

.section-add__close {
	position: absolute;
	top: 10px;
	right: 10px;
	background-color: white;
	border-radius: 50%;
	border: none;
	cursor: pointer;
	width: 20px;
	height: 20px;
}

/* Every item is wrapped in a form-group */
form {
	display: grid;
	gap: 10px;
}

legend {
	font-size: 1.3em;
}

form fieldset {
	border: none;
	padding: 0;
}

.form-group label {
	display: block;
	margin-bottom: 5px;
	font-weight: bold;
}

.form-group input,
.form-group textarea {
	width: 100%;
	box-sizing: border-box;
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
	margin-bottom: 10px; /*Added to be more similar to the PEC 2 image*/
}

.form-group input[type="color"] {
	padding: 0;
	height: 40px;
}

.form-group textarea {
	resize: vertical;
}

.btn[type="submit"] {
	width: 100%;
}
</style>
