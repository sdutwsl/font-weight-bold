(function () {
    //Is apple enviroment?
    function isApple() {
        const u = navigator.userAgent.toLowerCase();
        //mac
        return /macintosh|mac os x/i.test(u) || !!u.match(/\(i[^;]+;( u;)? cpu.+mac os x/);
    };
    //Add font weight when document loaded.
    window.addEventListener("load", () => {
        const body = window.document.body;
        const origin_style = body.getAttribute("style");
        body.setAttribute("style", `--font-weight-bold:${isApple() ? 500 : 700};${origin_style || ""}`);
    });
})();