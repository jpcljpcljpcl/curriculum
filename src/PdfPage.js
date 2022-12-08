import React, { useState } from 'react';
import { Document } from 'react-pdf';

export default function PdfPage() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file="CVJPCL.pdf" onLoadSuccess={onDocumentLoadSuccess}>
      </Document>
    </div>
  );
}