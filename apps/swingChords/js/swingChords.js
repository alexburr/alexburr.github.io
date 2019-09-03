var swingChords;
(function (swingChords) {
    var app = /** @class */ (function () {
        // Construction ------------------------------------------------
        function app() {
            this.body = document.querySelector("body");
            this.itemTemplate = document.querySelector("#itemTemplate");
            this.svgGenerator = new swingChords.svgGenerator();
            this.drawChordGroups(swingChords.allChords);
        }
        // Public methods ----------------------------------------------
        app.prototype.drawChordGroups = function (allChordGroups) {
            for (var i = 0; i < allChordGroups.length; i++) {
                this.drawChordGroup(allChordGroups[i]);
            }
        };
        // Private methods ---------------------------------------------
        app.prototype.drawHeader = function (text) {
            var header = document.createElement("h2");
            var headerText = document.createTextNode(text);
            header.appendChild(headerText);
            this.body.appendChild(header);
        };
        app.prototype.drawChord = function (chord, container) {
            var item;
            var gridWrap;
            var gridBox = this.svgGenerator.gridBox();
            item = document.importNode(this.itemTemplate.content, true);
            item.querySelector("h3").innerHTML = chord.name;
            gridWrap = item.querySelector(".gridWrap");
            gridWrap.appendChild(gridBox);
            for (var i = 0; i < chord.notes.length; i++) {
                var note = this.svgGenerator.note(chord.notes[i]);
                gridWrap.appendChild(note);
            }
            container.appendChild(item);
        };
        app.prototype.drawChords = function (chordsArray, container) {
            for (var i = 0; i < chordsArray.length; i++) {
                this.drawChord(chordsArray[i], container);
            }
        };
        app.prototype.drawChordGroup = function (chordGroup) {
            var container = document.createElement("div");
            this.drawHeader(chordGroup.name);
            container.classList.add("contentWrap");
            this.body.appendChild(container);
            this.drawChords(chordGroup.chords, container);
        };
        return app;
    }());
    swingChords.app = app;
})(swingChords || (swingChords = {}));
//# sourceMappingURL=swingChords.js.map