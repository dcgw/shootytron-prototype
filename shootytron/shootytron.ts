var supportedBrowser;

try {
    supportedBrowser = !!document.createElement &&
            !!Object.hasOwnProperty &&
            !!Object.hasOwnProperty.call(document.body, "firstChild") &&
            !!document.body.addEventListener &&
            !!document.body.appendChild &&
            !!document.body.removeChild;

    var canvas: HTMLCanvasElement;
    var context: Object;

    if (supportedBrowser) {
        canvas = document.createElement("canvas");
        supportedBrowser = !!canvas.getContext;
    }

    if (supportedBrowser) {
        context = canvas.getContext("webgl") ||
                canvas.getContext("experimental-webgl");
        supportedBrowser = !!context;
    }

    while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild);
    }
} catch (ignored) {
    supportedBrowser = false;
}

if (supportedBrowser) {
    document.body.appendChild(canvas);
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
} else {
    var h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode("Unsupported Browser"));
    document.body.appendChild(h1);

    var p = document.createElement("p");
    p.appendChild(document.createTextNode("Sorry."));
    document.body.appendChild(p);

    p = document.createElement("p");
    p.appendChild(document.createTextNode("Try Google Chrome or Mozilla Firefox instead."));
    document.body.appendChild(p);
}
