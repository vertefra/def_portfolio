console.log('scripts loaded');

const renderBars = () => {
	const bars = document.querySelectorAll('.bar');
	let barWidth = getComputedStyle(bars[0]).width;
	barWidth = parseInt(barWidth.split('px')[0]);

	for (let bar of bars) {
		const percentage = parseInt(bar.textContent);
		const newLength = percentage * barWidth * 0.01;
		bar.style.width = `${percentage * barWidth * 0.01}px`;
	}
};

renderBars();
