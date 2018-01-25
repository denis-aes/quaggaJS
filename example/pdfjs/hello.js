'use strict';

PDFJS.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.290/pdf.worker.js';

// Fetch the PDF document from the URL using promises.
PDFJS.getDocument('barcode.pdf').then(function (pdf) {
  // Fetch the page.
  pdf.getPage(1).then(function (page) {
    var scale = 1.5;
    var viewport = page.getViewport(scale);

    // Prepare canvas using PDF page dimensions.
    var canvas = document.getElementById('the-canvas');
    var context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // Render PDF page into canvas context.
    var renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    page.render(renderContext);


  });
});
