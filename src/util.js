import Rx from 'rxjs';
function Show(x) {
	let elm = document.getElementById("app");

	elm.innerHTML = x;
}

function Fact(x) {
	return Rx.Observable
		.range(1, x)
		.reduce((acc, x) => {
			return acc * x
		})
}

export { Show, Fact };
