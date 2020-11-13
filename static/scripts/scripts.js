console.log('scripts loaded');

const renderBars = () => {
	const bars = document.querySelectorAll('.bar');
	let barWidth = getComputedStyle(bars[0]).width;
	barWidth = parseInt(barWidth.split('px')[0]);

	for (let bar of bars) {
		const percentage = parseInt(bar.textContent);
		bar.textContent = `${percentage}%`;
		animateRender(bar, percentage * barWidth * 0.01);
	}
};

const animateRender = (bar, length, speed = 40) => {
	let l = 0;
	const value = setInterval(() => {
		bar.style.width = `${l}px`;
		l++;
		if (l >= length) {
			clearInterval(value);
		}
	}, speed);
};

window.addEventListener('fetch', (ev) => {});

renderBars();
