#!/bin/bash
sed -i '' 's|</head><body>|<script>(function (h, o, t, j, a, r){ if(h.hj) h.hj = h.hj; else { h.hj = function () { if(h.hj.q) (h.hj.q = h.hj.q).push(arguments); else (h.hj.q = []).push(arguments);} } h._hjSettings = { hjid: 2951863, hjsv: 6 }; a = o.getElementsByTagName("head")[0]; r = o.createElement("script"); r.async = 1; r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv; a.appendChild(r); })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");</script></head><body style="background-color: #131219">|g' ./biddz-index.html
