export const state = () => ({
	colors: ["ff6842", "ffb442", "ffff42", "b4ff42", "68ff42", "42ff68", "42ffb4", "42ffff", "42b4ff", "4268ff", "6842ff", "b442ff", "ff42ff", "ff42b4", "ff4268"],
});

export const mutations = {
	shuffleColors(state) {
		state.colors.sort(() => Math.random() - 0.5);
	},
};
