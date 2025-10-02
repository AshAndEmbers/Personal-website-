
const svgns = "http://www.w3.org/2000/svg";

// Create the SVG element
const svg = document.createElementNS(svgns, "svg");
svg.setAttribute("width", "600");
svg.setAttribute("height", "400");
svg.style.border = "1px solid black";

// Function to make shapes easily
function makeSVG(tag, attrs) {
  const elem = document.createElementNS(svgns, tag);
  for (let attr in attrs) {
    elem.setAttribute(attr, attrs[attr]);
  }
  return elem;
}


svg.appendChild(makeSVG("circle", { cx: 200, cy: 100, r: 40, fill: "#f5cc99", stroke: "black" }));

// Hair
svg.appendChild(makeSVG("path", { d: "M150 100 A50 50 0 0 1 250 100 L200 60 Z", fill: "brown" }));

// Eyes
svg.appendChild(makeSVG("circle", { cx: 185, cy: 95, r: 5, fill: "black" }));
svg.appendChild(makeSVG("circle", { cx: 215, cy: 95, r: 5, fill: "black" }));

// Smile
svg.appendChild(makeSVG("path", { d: "M185 110 Q200 125 215 110", stroke: "black", fill: "transparent" }));

// Dress
svg.appendChild(makeSVG("polygon", { points: "200,140 160,240 240,240", fill: "pink", stroke: "black" }));

// Arms
svg.appendChild(makeSVG("line", { x1: 200, y1: 150, x2: 130, y2: 200, stroke: "black" }));
svg.appendChild(makeSVG("line", { x1: 200, y1: 150, x2: 270, y2: 200, stroke: "black" }));

// Legs
svg.appendChild(makeSVG("line", { x1: 180, y1: 240, x2: 170, y2: 320, stroke: "black" }));
svg.appendChild(makeSVG("line", { x1: 220, y1: 240, x2: 230, y2: 320, stroke: "black" }));

// Add SVG to page


/* -------------------------
   1) Chart SVG
------------------------- */
function drawChart() {
  const svg = document.createElementNS(svgns, "svg");
  svg.setAttribute("width", "600");
  svg.setAttribute("height", "400");
  svg.style.border = "1px solid gray";
  svg.style.margin = "10px";

 svg.appendChild(makeSVG("text", {
    x: 190, y: 30,
    "text-anchor": "middle",
    "font-size": "16",
    "font-family": "Arial",
    fill: "black"
  })).textContent = "Celebraties and their Billboards";

  svg.appendChild(makeSVG("text", {
    x: 65, y: 75,
    "font-size": "10",
    "font-family": "Arial",
    fill: "black"
  })).textContent = "Michael Jackson";

    svg.appendChild(makeSVG("rect", {
      x: 145,
      y: 50,
      width: 120,
      height: 50,
      fill: ["red"]
    }));

   svg.appendChild(makeSVG("text", {
    x: 65, y: 125,
    "font-size": "10",
    "font-family": "Arial",
    fill: "black"
  })).textContent = "Rihanna";

   svg.appendChild(makeSVG("rect", {
      x: 145,
      y: 105,
      width: 100,
      height: 50,
      fill: ["blue"]
    }));

   svg.appendChild(makeSVG("text", {
    x: 65, y: 185,
    "font-size": "10",
    "font-family": "Arial",
    fill: "black"
  })).textContent = "Madonna";

   svg.appendChild(makeSVG("rect", {
      x: 145,
      y: 160,
      width: 120,
      height: 50,
      fill: ["orange"]
    }));

   svg.appendChild(makeSVG("text", {
    x: 65, y: 245,
    "font-size": "10",
    "font-family": "Arial",
    fill: "black"
  })).textContent = "The Beatles";

   svg.appendChild(makeSVG("rect", {
      x: 145,
      y: 215,
      width: 250,
      height: 50,
      fill: ["green"]
    }));
   
   svg.appendChild(makeSVG("text", {
    x: 65, y: 295,
    "font-size": "10",
    "font-family": "Arial",
    fill: "black"
  })).textContent = "Mariah carry";

   svg.appendChild(makeSVG("rect", {
      x: 145,
      y: 270,
      width: 200,
      height: 50,
      fill: ["purple"]
    }));
  return svg;
}

/* -------------------------
   2) Girl SVG
------------------------- */
function drawGirl() {
  const svg = document.createElementNS(svgns, "svg");
  svg.setAttribute("width", "400");
  svg.setAttribute("height", "300");
  svg.style.border = "1px solid gray";
  svg.style.margin = "10px";
  svg.appendChild(makeSVG("circle", { cx: 200, cy: 100, r: 40, fill: "#f5cc99", stroke: "black" }));

// Hair
svg.appendChild(makeSVG("path", { d: "M150 100 A50 50 0 0 1 250 100 L200 60 Z", fill: "brown" }));

// Eyes
svg.appendChild(makeSVG("circle", { cx: 185, cy: 95, r: 5, fill: "black" }));
svg.appendChild(makeSVG("circle", { cx: 215, cy: 95, r: 5, fill: "black" }));

// Smile
svg.appendChild(makeSVG("path", { d: "M185 110 Q200 125 215 110", stroke: "black", fill: "transparent" }));

// Dress
svg.appendChild(makeSVG("polygon", { points: "200,140 160,240 240,240", fill: "pink", stroke: "black" }));

// Arms
svg.appendChild(makeSVG("line", { x1: 200, y1: 150, x2: 130, y2: 200, stroke: "black" }));
svg.appendChild(makeSVG("line", { x1: 200, y1: 150, x2: 270, y2: 200, stroke: "black" }));

// Legs
svg.appendChild(makeSVG("line", { x1: 180, y1: 240, x2: 170, y2: 320, stroke: "black" }));
svg.appendChild(makeSVG("line", { x1: 220, y1: 240, x2: 230, y2: 320, stroke: "black" }));

return svg;
}

/* -------------------------
   Add all 3 to page
------------------------- */
const container = document.getElementById("drawing");
container.appendChild(drawChart()); // Chart
container.appendChild(drawGirl());  // Girl
