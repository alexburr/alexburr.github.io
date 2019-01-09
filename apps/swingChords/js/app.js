define("Models/Note", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Note {
    }
    exports.default = Note;
});
define("Models/Chord", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Chord {
    }
    exports.default = Chord;
});
define("Models/ChordGroup", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ChordGroup {
    }
    exports.default = ChordGroup;
});
define("Data/allChords", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.allChords = [
        {
            name: "Lowest Note On the Fifth String",
            chords: [
                {
                    name: "maj6",
                    root: { string: 5, fret: 3 },
                    notes: [
                        { string: 4, fret: 2, interval: "3" },
                        { string: 3, fret: 2, interval: "6" }
                    ]
                },
                {
                    name: "aug",
                    root: { string: 5, fret: 4 },
                    notes: [
                        { string: 4, fret: 3, interval: "3" },
                        { string: 3, fret: 2, interval: "+5" }
                    ]
                },
                {
                    name: "min6",
                    root: { string: 5, fret: 4 },
                    notes: [
                        { string: 4, fret: 2, interval: "-3" },
                        { string: 3, fret: 3, interval: "6" }
                    ]
                },
                {
                    name: "dim7",
                    root: { string: 5, fret: 4 },
                    notes: [
                        { string: 4, fret: 2, interval: "-3" },
                        { string: 3, fret: 3, interval: "--7" }
                    ]
                },
                {
                    name: "min7(&flat;5)",
                    root: { string: 5, fret: 3 },
                    notes: [
                        { string: 4, fret: 4, interval: "-5" },
                        { string: 3, fret: 3, interval: "-7" }
                    ]
                },
                {
                    name: "min7(&flat;5)",
                    root: { string: 5, fret: 4 },
                    notes: [
                        { string: 4, fret: 2, interval: "-3" },
                        { string: 3, fret: 4, interval: "-7" }
                    ]
                },
                {
                    name: "min7",
                    root: { string: 5, fret: 4 },
                    notes: [
                        { string: 4, fret: 2, interval: "-3" },
                        { string: 3, fret: 4, interval: "-7" }
                    ]
                },
                {
                    name: "7",
                    root: { string: 5, fret: 3 },
                    notes: [
                        { string: 4, fret: 2, interval: "3" },
                        { string: 3, fret: 3, interval: "-7" }
                    ]
                },
                {
                    name: "maj7",
                    root: { string: 5, fret: 3 },
                    notes: [
                        { string: 4, fret: 2, interval: "3" },
                        { string: 3, fret: 4, interval: "7" }
                    ]
                }
            ]
        },
        {
            name: "Lowest Note On the Sixth String",
            chords: [
                {
                    name: "min/5",
                    root: { string: 4, fret: 4 },
                    notes: [
                        { string: 6, fret: 2, interval: "5" },
                        { string: 3, fret: 2, interval: "-3" }
                    ]
                },
                {
                    name: "min/3",
                    root: { string: 4, fret: 2 },
                    notes: [
                        { string: 6, fret: 3, interval: "-3" },
                        { string: 3, fret: 4, interval: "5" }
                    ]
                },
                {
                    name: "maj",
                    root: { string: 6, fret: 2 },
                    notes: [
                        { string: 4, fret: 4, interval: "R" },
                        { string: 3, fret: 3, interval: "3" }
                    ]
                },
                {
                    name: "maj/3",
                    root: { string: 4, fret: 2 },
                    notes: [
                        { string: 6, fret: 4, interval: "3" },
                        { string: 3, fret: 4, interval: "5" }
                    ]
                }, {
                    name: "maj/5",
                    root: { string: 3, fret: 5 },
                    notes: [
                        { string: 6, fret: 3, interval: "5" },
                        { string: 4, fret: 2, interval: "3" },
                    ]
                },
                {
                    name: "aug",
                    root: { string: 6, fret: 4 },
                    notes: [
                        { string: 5, fret: 3, interval: "3" },
                        { string: 4, fret: 2, interval: "+5" }
                    ]
                },
                {
                    name: "maj6",
                    root: { string: 6, fret: 3 },
                    notes: [
                        { string: 4, fret: 2, interval: "6" },
                        { string: 3, fret: 4, interval: "3" }
                    ]
                },
                {
                    name: "maj6/5",
                    root: null,
                    notes: [
                        { string: 6, fret: 3, interval: "5" },
                        { string: 4, fret: 2, interval: "3" },
                        { string: 3, fret: 2, interval: "6" }
                    ]
                },
                {
                    name: "min6",
                    root: { string: 6, fret: 3 },
                    notes: [
                        { string: 4, fret: 2, interval: "6" },
                        { string: 3, fret: 3, interval: "-3" }
                    ]
                },
                {
                    name: "dim7",
                    root: { string: 6, fret: 3 },
                    notes: [
                        { string: 4, fret: 2, interval: "--7" },
                        { string: 3, fret: 3, interval: "-3" }
                    ]
                },
                {
                    name: "min7(&flat;5)",
                    root: { string: 6, fret: 2 },
                    notes: [
                        { string: 5, fret: 3, interval: "-5" },
                        { string: 4, fret: 2, interval: "-7" }
                    ]
                },
                {
                    name: "min7(&flat;5)",
                    root: { string: 6, fret: 3 },
                    notes: [
                        { string: 4, fret: 3, interval: "-7" },
                        { string: 3, fret: 3, interval: "-3" }
                    ]
                },
                {
                    name: "min7",
                    root: { string: 6, fret: 3 },
                    notes: [
                        { string: 4, fret: 3, interval: "-7" },
                        { string: 3, fret: 3, interval: "-3" }
                    ]
                },
                {
                    name: "7",
                    root: { string: 6, fret: 3 },
                    notes: [
                        { string: 4, fret: 3, interval: "-7" },
                        { string: 3, fret: 4, interval: "3" }
                    ]
                },
                {
                    name: "7/5",
                    root: null,
                    notes: [
                        { string: 6, fret: 3, interval: "5" },
                        { string: 4, fret: 2, interval: "3" },
                        { string: 3, fret: 3, interval: "-7" }
                    ]
                },
                {
                    name: "maj7",
                    root: { string: 6, fret: 3 },
                    notes: [
                        { string: 4, fret: 4, interval: "7" },
                        { string: 3, fret: 4, interval: "3" }
                    ]
                },
                {
                    name: "maj7/5",
                    root: null,
                    notes: [
                        { string: 6, fret: 3, interval: "5" },
                        { string: 4, fret: 2, interval: "3" },
                        { string: 3, fret: 4, interval: "7" }
                    ]
                }
            ]
        }
    ];
});
define("Interfaces/ISvgGenerator", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("Interfaces/ISwingChordsApp", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("Implementations/SvgGenerator", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SvgGenerator {
        // Construction ------------------------------------------------
        constructor(parentApp) {
            this.svgns = "http://www.w3.org/2000/svg";
            this.parentApp = parentApp;
        }
        // Public methods ----------------------------------------------
        gridBox() {
            return this.drawGridBox();
        }
        note(noteObject, isRoot) {
            return this.drawNote(noteObject, isRoot);
        }
        // Private methods ---------------------------------------------
        createSvgWithAttributes(elementType, attributes = null) {
            const svgElement = document.createElementNS(this.svgns, elementType);
            if (attributes !== null) {
                attributes.forEach((attribute) => {
                    var attributeName = Object.keys(attribute)[0];
                    var attributeValue = attribute[attributeName];
                    svgElement.setAttributeNS(null, attributeName, attributeValue);
                });
            }
            return svgElement;
        }
        drawNote(noteObject, isRoot) {
            const dotBoxClass = "dotBox string" + noteObject.string + " fret" + noteObject.fret;
            const dotBox = this.createSvgWithAttributes("svg", [
                { "class": (isRoot) ? dotBoxClass + " root" : dotBoxClass }
            ]);
            const note = this.createSvgWithAttributes("circle", [
                { "class": "dot" },
                { "cx": "50%" },
                { "cy": "50%" },
                { "r": "50%" }
            ]);
            const isAccidental = !isRoot ? noteObject.interval.includes("-") || noteObject.interval.includes("+") : false;
            const dotTextClass = isAccidental ? "accidental" : "";
            const dotText = this.createSvgWithAttributes("text", [
                { "class": dotTextClass },
                { "x": "50%" },
                { "y": "53%" },
                { "text-anchor": "middle" },
                { "dy": ".3em" }
            ]);
            if (isAccidental) {
                noteObject.interval = noteObject.interval.replace(/-/gi, "&flat;");
                noteObject.interval = noteObject.interval.replace(/\+/gi, "&sharp;");
            }
            dotText.innerHTML = isRoot ? "R" : noteObject.interval;
            dotBox.appendChild(note);
            dotBox.appendChild(dotText);
            return dotBox;
        }
        drawGridBox() {
            const gridBox = this.createSvgWithAttributes("svg", [
                { "class": "gridBox" },
                { "width": "100%" },
                { "height": "100%" }
            ]);
            const gridOutline = this.createSvgWithAttributes("rect", [
                { "class": "gridOutline" },
                { "x": "0%" },
                { "y": "0%" }
            ]);
            gridBox.appendChild(gridOutline);
            for (var x = 0; x < 100; x = x + 20) {
                this.drawGridLines(gridBox, x);
            }
            return gridBox;
        }
        drawGridLines(gridBox, counter) {
            const xValue = counter.toString() + "%";
            for (var y = 0; y < 100; y = y + 20) {
                const yValue = y.toString() + "%";
                const gridLine = this.createSvgWithAttributes("rect", [
                    { "class": "gridLine" },
                    { "x": xValue },
                    { "y": yValue }
                ]);
                gridBox.appendChild(gridLine);
            }
        }
    }
    exports.default = SvgGenerator;
});
define("Implementations/SwingChordsApp", ["require", "exports", "Implementations/SvgGenerator", "Data/allChords"], function (require, exports, SvgGenerator_1, allChords_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // NOTE: This cannot be 'export default' while we are using requirejs
    class SwingChordsApp {
        // Construction ------------------------------------------------
        constructor() {
            this.body = document.querySelector("body");
            this.itemTemplate = document.querySelector("#itemTemplate");
            this.svgGenerator = new SvgGenerator_1.default(this);
            this.chordGroups = allChords_1.allChords;
            this.drawChordGroups();
            window["SwingChordsApp"] = this;
        }
        // Public methods ----------------------------------------------
        drawChordGroups() {
            this.chordGroups.forEach((chordGroup) => {
                this.drawChordGroup(chordGroup);
            });
        }
        // Private methods ---------------------------------------------
        drawHeader(text) {
            const header = document.createElement("h2");
            const headerText = document.createTextNode(text);
            header.appendChild(headerText);
            this.body.appendChild(header);
        }
        drawChord(chord, container) {
            const gridBox = this.svgGenerator.gridBox();
            const item = document.importNode(this.itemTemplate.content, true);
            const gridWrap = item.querySelector(".gridWrap");
            item.querySelector("h3").innerHTML = chord.name;
            gridWrap.appendChild(gridBox);
            if (chord.root !== null) {
                const root = this.svgGenerator.note(chord.root, true);
                gridWrap.appendChild(root);
            }
            chord.notes.forEach((note) => {
                const noteSvg = this.svgGenerator.note(note, false);
                gridWrap.appendChild(noteSvg);
            });
            container.appendChild(item);
        }
        drawChords(chordsArray, container) {
            chordsArray.forEach((chord) => {
                this.drawChord(chord, container);
            });
        }
        drawChordGroup(chordGroup) {
            const container = document.createElement("div");
            container.classList.add("contentWrap");
            this.drawHeader(chordGroup.name);
            this.body.appendChild(container);
            this.drawChords(chordGroup.chords, container);
        }
    }
    exports.SwingChordsApp = SwingChordsApp;
});
