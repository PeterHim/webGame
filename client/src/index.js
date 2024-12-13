window.onload = function() { // enlever watermark
    var shadowRoot = document.querySelector('spline-viewer').shadowRoot;
    shadowRoot.querySelector('#logo').remove();
}

