var swingChords;
(function (swingChords) {
    var svgGenerator = /** @class */ (function () {
        // Construction ------------------------------------------------
        function svgGenerator() {
            this.svgns = "http://www.w3.org/2000/svg";
        }
        // Public methods ----------------------------------------------
        svgGenerator.prototype.gridBox = function () {
            return this.drawGridBox();
        };
        svgGenerator.prototype.note = function (noteObject) {
            return this.drawNote(noteObject);
        };
        // Private methods ---------------------------------------------
        svgGenerator.prototype.drawNote = function (noteObject) {
            var note;
            var dotBox;
            var dotText;
            dotBox = document.createElementNS(this.svgns, "svg");
            dotBox.setAttributeNS(null, "class", "dotBox");
            dotBox.classList.add("string" + noteObject.string);
            dotBox.classList.add("fret" + noteObject.fret);
            note = document.createElementNS(this.svgns, "circle");
            note.setAttributeNS(null, "class", "dot");
            note.setAttributeNS(null, "cx", "50%");
            note.setAttributeNS(null, "cy", "50%");
            note.setAttributeNS(null, "r", "50%");
            dotText = document.createElementNS(this.svgns, "text");
            dotText.setAttributeNS(null, "x", "50%");
            dotText.setAttributeNS(null, "y", "52%");
            dotText.setAttributeNS(null, "text-anchor", "middle");
            dotText.setAttributeNS(null, "dy", ".3em");
            dotText.innerHTML = noteObject.interval;
            dotBox.appendChild(note);
            dotBox.appendChild(dotText);
            if (noteObject.interval == "R") {
                dotBox.classList.add("root");
            }
            return dotBox;
        };
        svgGenerator.prototype.drawGridBox = function () {
            var gridBox;
            var grid;
            gridBox = document.createElementNS(this.svgns, "svg");
            gridBox.setAttributeNS(null, "class", "gridBox");
            gridBox.setAttributeNS(null, "width", "100%");
            gridBox.setAttributeNS(null, "height", "100%");
            grid = document.createElementNS(this.svgns, "grid");
            grid.setAttributeNS(null, "x", "0");
            grid.setAttributeNS(null, "y", "0");
            gridBox.appendChild(grid);
            for (var x = 0; x < 100; x = x + 20) {
                this.drawGridLines(gridBox, x);
            }
            return gridBox;
        };
        svgGenerator.prototype.drawGridLine = function (classValue, xValue, yValue) {
            var gridLine;
            gridLine = document.createElementNS(this.svgns, "rect");
            gridLine.setAttributeNS(null, "class", classValue);
            gridLine.setAttributeNS(null, "x", xValue);
            gridLine.setAttributeNS(null, "y", yValue);
            return gridLine;
        };
        svgGenerator.prototype.drawGridLines = function (gridBox, counter) {
            var xValue = (counter > 0) ? counter.toString() + "%" : counter.toString();
            gridBox.appendChild(this.drawGridLine("grid", "0", "0"));
            for (var y = 0; y < 100; y = y + 20) {
                var yValue = (y > 0) ? y.toString() + "%" : y.toString();
                var gridLine = this.drawGridLine("gridLine", xValue, yValue);
                gridBox.appendChild(gridLine);
            }
        };
        return svgGenerator;
    }());
    swingChords.svgGenerator = svgGenerator;
})(swingChords || (swingChords = {}));
//# sourceMappingURL=svgGenerator.js.map