export function initTyped() {

    const typedElement = document.querySelector(".typed");

    if (!typedElement) {
        console.warn("Elemento .typed não encontrado");
        return;
    }

    const TypedLib = window.Typed;

    if (!TypedLib) {
        console.warn("Typed.js não carregado (window.Typed indefinido)");
        return;
    }

    let items = typedElement.getAttribute("data-typed-items");

    if (!items) return;

    items = items.split(",").map(item => item.trim());

    new TypedLib(".typed", {

        strings: items,
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: "▋"

    });

}