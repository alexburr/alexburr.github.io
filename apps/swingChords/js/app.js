define("Models/ImprovType", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
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
define("Models/ImprovShape", ["require", "exports", "Models/Chord"], function (require, exports, Chord_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ImprovShape extends Chord_1.default {
    }
    exports.default = ImprovShape;
});
define("Data/allImprovShapes", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.allImprovShapes = [
        {
            name: "Shape 1: Major Triad",
            root: { string: 4, fret: 4 },
            notes: [
                { string: 4, fret: 2, interval: "-7", improvType: 1 /* AddedChordTone */ },
                { string: 4, fret: 3, interval: "7", improvType: 2 /* Ornament */ },
                { string: 3, fret: 2, interval: "-3", improvType: 2 /* Ornament */ },
                { string: 3, fret: 3, interval: "3" },
                { string: 3, fret: 4, interval: "4", improvType: 2 /* Ornament */ },
                { string: 2, fret: 2, interval: "5" },
                { string: 2, fret: 3, interval: "-6", improvType: 2 /* Ornament */ },
                { string: 2, fret: 4, interval: "6", improvType: 1 /* AddedChordTone */ },
                { string: 2, fret: 5, interval: "-7", improvType: 1 /* AddedChordTone */ },
                { string: 1, fret: 2, interval: "R", improvType: 0 /* AddedRoot */ },
                { string: 1, fret: 3, interval: "-2", improvType: 2 /* Ornament */ },
                { string: 1, fret: 4, interval: "2", improvType: 1 /* AddedChordTone */ },
                { string: 1, fret: 5, interval: "-3", improvType: 2 /* Ornament */ }
            ]
        },
        {
            name: "Shape 2 Major Triad",
            root: { string: 3, fret: 4 },
            notes: [
                { string: 4, fret: 3, interval: "-5", improvType: 2 /* Ornament */ },
                { string: 4, fret: 4, interval: "5" },
                { string: 3, fret: 2, interval: "-7", improvType: 1 /* AddedChordTone */ },
                { string: 3, fret: 3, interval: "7", improvType: 2 /* Ornament */ },
                { string: 2, fret: 2, interval: "2", improvType: 1 /* AddedChordTone */ },
                { string: 2, fret: 3, interval: "-3", improvType: 2 /* Ornament */ },
                { string: 2, fret: 4, interval: "3" },
                { string: 2, fret: 5, interval: "4", improvType: 2 /* Ornament */ },
                { string: 1, fret: 2, interval: "5" },
                { string: 1, fret: 3, interval: "-6", improvType: 2 /* Ornament */ },
                { string: 1, fret: 4, interval: "6", improvType: 1 /* AddedChordTone */ },
                { string: 1, fret: 5, interval: "-7", improvType: 1 /* AddedChordTone */ }
            ]
        },
        {
            name: "Shape 3 Major Triad",
            root: { string: 2, fret: 3 },
            notes: [
                { string: 4, fret: 2, interval: "2", improvType: 1 /* AddedChordTone */ },
                { string: 4, fret: 3, interval: "-3", improvType: 2 /* Ornament */ },
                { string: 4, fret: 4, interval: "3" },
                { string: 3, fret: 4, interval: "6", improvType: 1 /* AddedChordTone */ },
                { string: 3, fret: 2, interval: "5" },
                { string: 2, fret: 2, interval: "7", improvType: 2 /* Ornament */ },
                { string: 2, fret: 5, interval: "2", improvType: 1 /* AddedChordTone */ },
                { string: 1, fret: 1, interval: "-3", improvType: 2 /* Ornament */ },
                { string: 1, fret: 2, interval: "3" },
                { string: 1, fret: 3, interval: "4", improvType: 2 /* Ornament */ },
                { string: 1, fret: 4, interval: "-5", improvType: 2 /* Ornament */ },
                { string: 1, fret: 5, interval: "5" }
            ]
        },
        {
            name: "Shape 4 Dominant",
            root: { string: 4, fret: 2 },
            notes: [
                { string: 4, fret: 3, interval: "-2", improvType: 2 /* Ornament */ },
                { string: 4, fret: 4, interval: "2", improvType: 1 /* AddedChordTone */ },
                { string: 3, fret: 1, interval: "3" },
                { string: 3, fret: 2, interval: "4", improvType: 2 /* Ornament */ },
                { string: 3, fret: 3, interval: "-5", improvType: 2 /* Ornament */ },
                { string: 3, fret: 4, interval: "5" },
                { string: 2, fret: 2, interval: "6", improvType: 1 /* AddedChordTone */ },
                { string: 2, fret: 3, interval: "-7" },
                { string: 1, fret: 2, interval: "2", improvType: 1 /* AddedChordTone */ },
                { string: 1, fret: 3, interval: "-3", improvType: 2 /* Ornament */ },
                { string: 1, fret: 4, interval: "3" },
            ]
        },
        {
            name: "Shape 5 Minor Triad",
            root: { string: 3, fret: 4 },
            notes: [
                { string: 4, fret: 4, interval: "5" },
                { string: 3, fret: 1, interval: "6", improvType: 1 /* AddedChordTone */ },
                { string: 3, fret: 2, interval: "-7", improvType: 1 /* AddedChordTone */ },
                { string: 2, fret: 2, interval: "2", improvType: 2 /* Ornament */ },
                { string: 2, fret: 3, interval: "-3" },
                { string: 2, fret: 5, interval: "4", improvType: 2 /* Ornament */ },
                { string: 1, fret: 2, interval: "5" },
                { string: 1, fret: 3, interval: "-6", improvType: 2 /* Ornament */ },
                { string: 1, fret: 4, interval: "6", improvType: 1 /* AddedChordTone */ },
                { string: 1, fret: 5, interval: "-7", improvType: 1 /* AddedChordTone */ }
            ]
        },
        {
            name: "Major Pentatonic (5th String)",
            caption: "1 2 3 5 6",
            root: null,
            notes: [
                { string: 6, fret: 1, interval: "3", improvType: 1 /* AddedChordTone */ },
                { string: 6, fret: 4, interval: "5", improvType: 1 /* AddedChordTone */ },
                { string: 5, fret: 1, interval: "6", improvType: 1 /* AddedChordTone */ },
                { string: 5, fret: 4, interval: "R" },
                { string: 4, fret: 1, interval: "2", improvType: 1 /* AddedChordTone */ },
                { string: 4, fret: 2, interval: "-3", improvType: 2 /* Ornament */ },
                { string: 4, fret: 3, interval: "3", improvType: 1 /* AddedChordTone */ },
                { string: 4, fret: 4, interval: "4", improvType: 2 /* Ornament */ },
                { string: 3, fret: 1, interval: "5", improvType: 1 /* AddedChordTone */ },
                { string: 3, fret: 2, interval: "-6", improvType: 2 /* Ornament */ },
                { string: 3, fret: 3, interval: "6", improvType: 1 /* AddedChordTone */ },
                { string: 3, fret: 4, interval: "-7", improvType: 2 /* Ornament */ },
                { string: 2, fret: 2, interval: "R" },
                { string: 2, fret: 4, interval: "2", improvType: 1 /* AddedChordTone */ },
                { string: 1, fret: 1, interval: "3", improvType: 1 /* AddedChordTone */ },
                { string: 1, fret: 2, interval: "4", improvType: 2 /* Ornament */ },
                { string: 1, fret: 4, interval: "5", improvType: 1 /* AddedChordTone */ }
            ]
        },
        {
            name: "Major Pentatonic (6th String)",
            caption: "1 2 3 5 6",
            root: null,
            notes: [
                { string: 6, fret: 1, interval: "6", improvType: 1 /* AddedChordTone */ },
                { string: 6, fret: 4, interval: "R" },
                { string: 5, fret: 1, interval: "2", improvType: 1 /* AddedChordTone */ },
                { string: 5, fret: 2, interval: "-3", improvType: 2 /* Ornament */ },
                { string: 5, fret: 3, interval: "3", improvType: 1 /* AddedChordTone */ },
                { string: 5, fret: 4, interval: "4", improvType: 2 /* Ornament */ },
                { string: 4, fret: 1, interval: "5", improvType: 1 /* AddedChordTone */ },
                { string: 4, fret: 2, interval: "-6", improvType: 2 /* Ornament */ },
                { string: 4, fret: 3, interval: "6", improvType: 1 /* AddedChordTone */ },
                { string: 4, fret: 4, interval: "-7", improvType: 2 /* Ornament */ },
                { string: 3, fret: 1, interval: "R" },
                { string: 3, fret: 3, interval: "2", improvType: 1 /* AddedChordTone */ },
                { string: 2, fret: 4, interval: "5", improvType: 1 /* AddedChordTone */ },
                { string: 2, fret: 1, interval: "3", improvType: 1 /* AddedChordTone */ },
                { string: 2, fret: 2, interval: "4", improvType: 2 /* Ornament */ },
                { string: 1, fret: 1, interval: "3", improvType: 1 /* AddedChordTone */ },
                { string: 1, fret: 1, interval: "6", improvType: 1 /* AddedChordTone */ },
                { string: 1, fret: 4, interval: "R" }
            ]
        },
        {
            name: "Minor Pentatonic (5th String)",
            caption: "1 ♭3 4 5 ♭7",
            root: null,
            notes: [
                { string: 6, fret: 2, interval: "4", improvType: 1 /* AddedChordTone */ },
                { string: 6, fret: 4, interval: "5", improvType: 1 /* AddedChordTone */ },
                { string: 6, fret: 5, interval: "-6", improvType: 2 /* Ornament */ },
                { string: 5, fret: 1, interval: "6", improvType: 2 /* Ornament */ },
                { string: 5, fret: 2, interval: "-7", improvType: 1 /* AddedChordTone */ },
                { string: 5, fret: 4, interval: "R" },
                { string: 4, fret: 1, interval: "2", improvType: 2 /* Ornament */ },
                { string: 4, fret: 2, interval: "-3", improvType: 1 /* AddedChordTone */ },
                { string: 4, fret: 4, interval: "4", improvType: 1 /* AddedChordTone */ },
                { string: 3, fret: 1, interval: "5", improvType: 1 /* AddedChordTone */ },
                { string: 3, fret: 2, interval: "-6", improvType: 2 /* Ornament */ },
                { string: 3, fret: 3, interval: "6", improvType: 2 /* Ornament */ },
                { string: 3, fret: 4, interval: "-7", improvType: 1 /* AddedChordTone */ },
                { string: 2, fret: 2, interval: "R" },
                { string: 2, fret: 4, interval: "2", improvType: 2 /* Ornament */ },
                { string: 2, fret: 5, interval: "-3", improvType: 1 /* AddedChordTone */ },
                { string: 1, fret: 2, interval: "4", improvType: 1 /* AddedChordTone */ },
                { string: 1, fret: 4, interval: "5", improvType: 1 /* AddedChordTone */ },
                { string: 1, fret: 5, interval: "-6", improvType: 2 /* Ornament */ }
            ]
        },
        {
            name: "Blues (5th String)",
            caption: "1 ♭3 4 ♭5 5 ♭7",
            root: null,
            notes: [
                { string: 6, fret: 2, interval: "4", improvType: 1 /* AddedChordTone */ },
                { string: 6, fret: 3, interval: "-5", improvType: 1 /* AddedChordTone */ },
                { string: 6, fret: 4, interval: "5", improvType: 1 /* AddedChordTone */ },
                { string: 5, fret: 2, interval: "-7", improvType: 1 /* AddedChordTone */ },
                { string: 5, fret: 4, interval: "R" },
                { string: 4, fret: 2, interval: "-3", improvType: 1 /* AddedChordTone */ },
                { string: 4, fret: 4, interval: "4", improvType: 1 /* AddedChordTone */ },
                { string: 4, fret: 5, interval: "-5", improvType: 1 /* AddedChordTone */ },
                { string: 3, fret: 1, interval: "5", improvType: 1 /* AddedChordTone */ },
                { string: 3, fret: 4, interval: "-7", improvType: 1 /* AddedChordTone */ },
                { string: 2, fret: 2, interval: "R" },
                { string: 2, fret: 5, interval: "-3", improvType: 1 /* AddedChordTone */ },
                { string: 1, fret: 2, interval: "4", improvType: 1 /* AddedChordTone */ },
                { string: 1, fret: 3, interval: "-5", improvType: 1 /* AddedChordTone */ },
                { string: 1, fret: 4, interval: "5", improvType: 1 /* AddedChordTone */ },
            ]
        },
        {
            name: "Blues (6th String)",
            caption: "1 ♭3 4 ♭5 5 ♭7",
            root: null,
            notes: [
                { string: 6, fret: 2, interval: "-7", improvType: 1 /* AddedChordTone */ },
                { string: 6, fret: 4, interval: "R" },
                { string: 5, fret: 2, interval: "-3", improvType: 1 /* AddedChordTone */ },
                { string: 5, fret: 4, interval: "4", improvType: 1 /* AddedChordTone */ },
                { string: 5, fret: 5, interval: "-5", improvType: 1 /* AddedChordTone */ },
                { string: 4, fret: 1, interval: "5", improvType: 1 /* AddedChordTone */ },
                { string: 4, fret: 4, interval: "-7", improvType: 1 /* AddedChordTone */ },
                { string: 3, fret: 1, interval: "R" },
                { string: 3, fret: 4, interval: "-3", improvType: 1 /* AddedChordTone */ },
                { string: 2, fret: 2, interval: "4", improvType: 1 /* AddedChordTone */ },
                { string: 2, fret: 3, interval: "-5", improvType: 1 /* AddedChordTone */ },
                { string: 2, fret: 4, interval: "5", improvType: 1 /* AddedChordTone */ },
                { string: 1, fret: 2, interval: "-7", improvType: 1 /* AddedChordTone */ },
                { string: 1, fret: 4, interval: "R" }
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
        //private parentApp: ISwingChordsApp;
        // Construction ------------------------------------------------
        constructor(parentApp) {
            this.svgns = "http://www.w3.org/2000/svg";
            //this.parentApp = parentApp;
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
            const isAccidental = !isRoot ? noteObject.interval.includes("-") || noteObject.interval.includes("+") : false;
            const isAddedRoot = (noteObject.improvType != null && noteObject.improvType == 0 /* AddedRoot */);
            const isAddedChordTone = (noteObject.improvType != null && noteObject.improvType == 1 /* AddedChordTone */);
            const isOrnament = (noteObject.improvType != null && noteObject.improvType == 2 /* Ornament */);
            const dotBoxClass = "dotBox string" + noteObject.string + " fret" + noteObject.fret;
            const dotBox = this.createSvgWithAttributes("svg", [
                { "class": isRoot || isAddedRoot ? dotBoxClass + " root" : dotBoxClass }
            ]);
            const dotBaseClass = (isAddedChordTone || isOrnament) ? "smallDot" : "dot";
            const note = this.createSvgWithAttributes("circle", [
                { "class": isOrnament ? dotBaseClass + " empty" : dotBaseClass },
                { "cx": "50%" },
                { "cy": "50%" },
                { "r": "50%" }
            ]);
            const dotTextBaseClass = (isAddedChordTone || isOrnament) ? "smallText" : " ";
            let dotTextClass = isAccidental ? dotTextBaseClass + " accidental" : dotTextBaseClass;
            if (isOrnament) {
                dotTextClass += " inverse";
            }
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
define("Implementations/SwingChordsApp", ["require", "exports", "Implementations/SvgGenerator", "Data/allChords", "Data/allImprovShapes"], function (require, exports, SvgGenerator_1, allChords_1, allImprovShapes_1) {
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
            this.improvShapes = allImprovShapes_1.allImprovShapes;
            this.drawChordGroups();
            this.drawImprovShapes();
            window["SwingChordsApp"] = this;
        }
        // Public methods ----------------------------------------------
        drawChordGroups() {
            this.chordGroups.forEach((chordGroup) => {
                this.drawChordGroup(chordGroup);
            });
        }
        drawImprovShapes() {
            this.drawHeader("Improv Shapes & Scales", "improvShapes");
            const container = document.createElement("div");
            container.classList.add("contentWrap");
            this.improvShapes.forEach((improvShape) => {
                this.drawImprovShape(improvShape, container);
            });
            this.body.appendChild(container);
        }
        // Private methods ---------------------------------------------
        drawHeader(text, id) {
            const header = document.createElement("h2");
            const headerText = document.createTextNode(text);
            header.appendChild(headerText);
            if (id != null) {
                header.id = id;
            }
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
        drawImprovShape(improvShape, container) {
            const gridBox = this.svgGenerator.gridBox();
            const item = document.importNode(this.itemTemplate.content, true);
            const gridWrap = item.querySelector(".gridWrap");
            item.querySelector("h4").innerHTML = improvShape.name;
            item.querySelector("h5").innerHTML = (improvShape.caption != null) ? improvShape.caption : "&nbsp;";
            gridWrap.appendChild(gridBox);
            if (improvShape.root !== null) {
                const root = this.svgGenerator.note(improvShape.root, true);
                gridWrap.appendChild(root);
            }
            improvShape.notes.forEach((note) => {
                const noteSvg = this.svgGenerator.note(note, false);
                gridWrap.appendChild(noteSvg);
            });
            container.appendChild(item);
        }
    }
    exports.SwingChordsApp = SwingChordsApp;
});
