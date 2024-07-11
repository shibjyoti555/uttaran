document
	.getElementById("connect-form")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		document.getElementById("submit-message").innerText =
			"Your documents have been successfully submitted.";
		// Here you would typically send the form data to the server
		// For example, using fetch or XMLHttpRequest to send an email
		// Since this requires backend support, it cannot be implemented here directly
	});
const select = document.getElementById("sessionyear");
const currentYear = new Date().getFullYear();
const endYear = currentYear + 4;

for (let startYear = 1950; startYear <= endYear - 3; startYear++) {
	const endYear = startYear + 3;
	const option = document.createElement("option");
	option.value = `${startYear}-${endYear}`;
	option.textContent = `${startYear}-${endYear}`;
	select.appendChild(option);
}
