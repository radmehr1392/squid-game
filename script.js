function copyIP() {

    const ip =
        "squid-game1234gb-gb.aternos.me:18726";

    navigator.clipboard.writeText(ip)
        .then(() => {

            const message =
                document.getElementById("copyMessage");

            message.textContent =
                "✓ آی‌پی با موفقیت کپی شد!";

            setTimeout(() => {
                message.textContent = "";
            }, 2500);

        })
        .catch(() => {

            const message =
                document.getElementById("copyMessage");

            message.textContent =
                "کپی انجام نشد؛ IP را دستی کپی کن.";

        });
}

document.querySelectorAll(".download-button").forEach(button => {

    button.addEventListener("click", function () {

        const alertBox = document.createElement("div");

        alertBox.className = "download-alert";

        alertBox.innerHTML = `
            <span>✓</span>
            مود دانلود شد!
        `;

        document.body.appendChild(alertBox);

        setTimeout(() => {
            alertBox.classList.add("show");
        }, 10);

        setTimeout(() => {
            alertBox.classList.remove("show");

            setTimeout(() => {
                alertBox.remove();
            }, 400);

        }, 2500);

    });

});
