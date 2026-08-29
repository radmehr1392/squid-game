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