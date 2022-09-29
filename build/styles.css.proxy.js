// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans&display=swap\");\n\nbody {\n\tdisplay: block;\n\tmargin: 8px;\n\tfont-family: \"Open Sans\", sans-serif;\n\tfont-size: 16px;\n\tbackground-image: url(\"background.png\");\n\tcolor: #4e4e4e;\n}\n\nmain {\n\tpadding: 1em;\n\theight: fit-content;\n\tmax-width: 50em;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tbackground-color: rgba(255, 255, 204, 0.9);\n}\n\nform {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n}\nform > td {\n\twidth: 50%;\n}\n.resultsContainer {\n\tdisplay: flow-root;\n\tmax-width: 50em;\n}\n\ntable.results {\n\tborder: 6px solid;\n\tborder-collapse: collapse;\n}\n\ntr.results > th {\n\tborder: 4px solid;\n\tpadding: 0em 1em;\n}\n\ntr.results > td {\n\tborder: 2px solid;\n\tmargin: 0.5em;\n\tpadding: 0.5em;\n\ttext-align: center;\n}\n\nh1 {\n\ttext-align: center;\n\tfont-size: 2.5em;\n}\n\nh2 {\n\ttext-align: center;\n\tfont-size: 1.75em;\n\tmargin: 0.5em;\n\tpadding: 0.5em;\n}\n\nh3 {\n\ttext-align: center;\n\tfont-size: 1.25em;\n\tmargin-top: 1em;\n\tmargin-bottom: 0;\n}\n\ninput {\n\tmax-width: 50%;\n\tmargin-left: 25%;\n\tfont-size: 1em;\n\tpadding: 0 0.5em 0 0.5em;\n}\n\nbutton {\n\tmargin: 1em 1em 0em 1em;\n\tpadding: 0.5em;\n}\n\np {\n\ttext-align: center;\n}\n\nul {\n\tlist-style-type: none;\n\tpadding-right: 1.5em;\n\ttext-align: center;\n}\n\n/* Mobile specific rules */\n@media (max-width: 868px) {\n\t.resultsContainer {\n\t\toverflow-x: scroll;\n\t}\n\n\ttable.results {\n\t\tposition: sticky;\n\t\ttop: 0;\n\t\twidth: inherit;\n\t\toverflow-x: scroll;\n\t}\n}\n\n/* To handle centering the table between 692 and 869px. Without, the table is left justified after 692 until the 869 breakpoint */\n@media (min-width: 692px) {\n\t.resultsContainer {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t}\n}\n\n/* Desktop rules */\n@media (min-width: 869px) {\n\tbody {\n\t\tfont-size: 20px;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t}\n\n\t.resultsContainer {\n\t\toverflow-x: hidden;\n\t}\n\n\ttable.results {\n\t\toverflow: auto;\n\t}\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}