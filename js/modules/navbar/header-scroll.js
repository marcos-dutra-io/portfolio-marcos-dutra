export default function () {

    const header =
        document.querySelector(
            '.main-header'
        );

    if (!header) return;

    window.addEventListener(
        'scroll',
        () => {

            if (
                window.scrollY > 50
            ) {
                header.classList.add(
                    'scrolled'
                );
            } else {
                header.classList.remove(
                    'scrolled'
                );
            }

        },
        {passive: true}
    );
}