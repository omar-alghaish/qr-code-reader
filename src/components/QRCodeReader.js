// src/components/QRCodeReader.js

import React, { useEffect, useRef, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const QRCodeReader = () => {
  const [result, setResult] = useState('No result');
  const scannerRef = useRef(null);

  useEffect(() => {
    if (scannerRef.current) {
      const scanner = new Html5QrcodeScanner(
        "reader",
        { fps: 10, qrbox: 250 },
        false
      );

      scanner.render(
        (decodedText) => {
          setResult(decodedText);
        },
        (error) => {
          console.warn(error);
        }
      );

      return () => {
        scanner.clear().catch(error => console.error('Failed to clear scanner', error));
      };
    }
  }, []);

  return (
    <div>
      <h2>QR Code Reader</h2>
      <div id="reader" ref={scannerRef} style={{ width: '100%' }} />
      <p>{result}</p>
    </div>
  );
};

export default QRCodeReader;
