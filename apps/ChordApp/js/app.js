var Accidental;
(function (Accidental) {
    Accidental[Accidental["flat"] = -1] = "flat";
    Accidental[Accidental["natural"] = 0] = "natural";
    Accidental[Accidental["sharp"] = 1] = "sharp";
    Accidental[Accidental["test"] = 2] = "test";
})(Accidental || (Accidental = {}));
class Scale {
    // ---------------------------
    constructor(root, notes) {
        this.root = root;
        this.notes = notes;
    }
}
/// <reference path="accidental.ts" />
class ChordNote {
    // ---------------------------
    constructor(scaleDegree, accidental) {
        this.scaleDegree = scaleDegree;
        this.accidental = accidental;
    }
}
/// <reference path="chordNote.ts" />
class ChordType {
    // ---------------------------
    constructor(name, names, chordNotes, accidental) {
        this.name = name;
        this.names = names;
        this.chordNotes = chordNotes;
        this.accidental = accidental;
    }
}
/// <reference path="chordType.ts" />
class ChordTypes {
    // ---------------------------
    constructor(name, chordTypesArray) {
        this.groupName = name;
        this.chordTypes = chordTypesArray;
    }
    // ---------------------------
    findTypeByName(name) {
        var chordType = null;
        for (var i = 0; i < this.chordTypes.length; i++) {
            if (name.toLowerCase() == this.chordTypes[i].name.toLowerCase()) {
                chordType = this.chordTypes[i];
                break;
            }
        }
        return chordType;
    }
}
/// <reference path="chordType.ts" />
/// <reference path="chordTypes.ts" />
class ChordTypeGroup {
    // ---------------------------
    constructor(chordTypes) {
        this.chordTypes = chordTypes;
    }
    // ---------------------------
    findTypeByName(name) {
        var chordType = null;
        for (var i = 0; i < this.chordTypes.length; i++) {
            var chordTypeResult = this.chordTypes[i].findTypeByName(name);
            if (chordTypeResult !== null) {
                chordType = chordTypeResult;
                break;
            }
        }
        return chordType;
    }
}
const FLAT = "♭";
const SHARP = "♯";
const DOUBLESHARP = "𝄪";
const DOUBLEFLAT = "𝄫";
const DEFAULTROOT = "C";
const DEFAULTTYPE = "Major";
/// <reference path="chordType.ts" />
/// <reference path="chordTypeGroup.ts" />
/// <reference path="scale.ts" />
/// <reference path="chordNote.ts" />
/// <reference path="stringConstants.ts" />
class Chord {
    // ---------------------------
    constructor(name, chordTypeGroups, scales) {
        this.inputName = name;
        this.init(chordTypeGroups, scales);
    }
    // ---------------------------
    outputDisplay() {
        var output = "";
        output += "<tr><th>Chord</th><td><strong>" + this.name + "</strong></td></tr>";
        output += "<tr><th>Names</th><td>";
        for (var j = 0; j < this.chordType.names.length; j++) {
            if (j != 0) {
                output += ", ";
            }
            output += this.root + this.chordType.names[j];
        }
        output += "</td></tr>";
        output += "<tr><th>Notes</th><td>";
        for (var k = 0; k < this.noteNames.length; k++) {
            output += "<span>" + this.noteNames[k] + "</span>";
        }
        output += "</td></tr>";
        return output;
    }
    // ---------------------------
    init(chordTypeGroups, scales) {
        this.extractRoot();
        this.extractType(chordTypeGroups);
        this.name = this.root + " " + this.chordType.name;
        this.extractScale(scales);
        this.extractNoteNames();
    }
    // ---------------------------
    extractRoot() {
        var dividerIndex = this.inputName.indexOf(" ");
        if (dividerIndex != 0) {
            this.root = this.inputName.substring(0, dividerIndex);
        }
        else {
            this.root = DEFAULTROOT;
        }
    }
    // ---------------------------
    extractType(chordTypeGroups) {
        var nameLength = this.inputName.length;
        var dividerIndex = this.inputName.indexOf(" ");
        if (dividerIndex != 0) {
            var chordTypeSubstr = this.inputName.substring(dividerIndex + 1, nameLength);
            this.chordType = chordTypeGroups.findTypeByName(chordTypeSubstr);
        }
        else {
            this.chordType = chordTypeGroups.findTypeByName(DEFAULTTYPE);
        }
    }
    // ---------------------------
    extractScale(scales) {
        for (var i = 0; i < scales.length; i++) {
            if (this.root == scales[i].root) {
                this.scale = scales[i];
            }
        }
    }
    // ---------------------------
    extractNoteNames() {
        var noteDegrees = [];
        var noteNames = [];
        for (var i = 0; i < this.chordType.chordNotes.length; i++) {
            var chordNote = this.chordType.chordNotes[i];
            var chordNoteScaleIndex = chordNote.scaleDegree;
            var noteName = this.scale.notes[chordNoteScaleIndex - 1];
            if (chordNote.accidental == Accidental.flat) {
                noteNames.push(this.reconcileAccidentalNoteName(noteName, FLAT));
            }
            else if (chordNote.accidental == Accidental.sharp) {
                noteNames.push(this.reconcileAccidentalNoteName(noteName, SHARP));
            }
            else {
                noteNames.push(noteName);
            }
        }
        this.noteNames = noteNames;
    }
    // ---------------------------
    reconcileAccidentalNoteName(noteName, accidental) {
        var noteNameLength = noteName.length;
        var noteIsSharp = (noteName.indexOf(SHARP) != -1);
        var noteIsDoubleSharp = (noteName.indexOf(DOUBLESHARP) != -1);
        var noteIsFlat = (noteName.indexOf(FLAT) != -1);
        var noteIsDoubleFlat = (noteName.indexOf(DOUBLEFLAT) != -1);
        var baseNoteName = noteName.slice(0, 1);
        var returnString = `${noteName}${accidental}`;
        if (noteNameLength == 1) {
            // Original note had no accidental, so slap it on
            return returnString;
        }
        else {
            switch (accidental) {
                case FLAT:
                    if (noteIsSharp)
                        returnString = `${baseNoteName}`;
                    if (noteIsFlat)
                        returnString = `${baseNoteName}${DOUBLEFLAT}`;
                    if (noteIsDoubleSharp)
                        returnString = `${baseNoteName}${SHARP}`;
                    break;
                case SHARP:
                    if (noteIsFlat)
                        returnString = `${baseNoteName}`;
                    if (noteIsSharp)
                        returnString = `${baseNoteName}${DOUBLESHARP}`;
                    if (noteIsDoubleFlat)
                        returnString = `${baseNoteName}${FLAT}`;
                    break;
                case DOUBLEFLAT:
                    if (noteIsSharp)
                        returnString = `${baseNoteName}${FLAT}`;
                    if (noteIsDoubleSharp)
                        returnString = `${baseNoteName}`;
                    break;
                case DOUBLESHARP:
                    if (noteIsFlat)
                        returnString = `${baseNoteName}${SHARP}`;
                    if (noteIsDoubleFlat)
                        returnString = `${baseNoteName}`;
                    break;
            }
            return returnString;
        }
    }
}
/// <reference path="chord.ts" />
class Chords {
    // ---------------------------
    constructor(chords) {
        this.chords = chords;
    }
    // ---------------------------
    getChordsForDisplay() {
        var output = "<table class=\"table table-responsive table-hover\">";
        for (var i = 0; i < this.chords.length; i++) {
            output += this.chords[i].outputDisplay();
        }
        output += "</tbody></table>";
        return output;
    }
}
/// <reference path="scale.ts" />
/// <reference path="chordTypeGroup.ts" />
/// <reference path="chordTypes.ts" />
/// <reference path="chordType.ts" />
/// <reference path="chordNote.ts" />
/// <reference path="accidental.ts" />
var scales = [
    new Scale("C", ["C", "D", "E", "F", "G", "A", "B"]),
    new Scale("C♯", ["C♯", "D♯", "E♯", "F♯", "G♯", "A♯", "B♯"]),
    new Scale("D♭", ["D♭", "E♭", "F", "G♭", "A♭", "B♭", "C"]),
    new Scale("D", ["D", "E", "F♯", "G", "A", "B", "C♯"]),
    new Scale("D♯", ["D♯", "E♯", "F𝄪", "G♯", "A♯", "B♯", "C𝄪"]),
    new Scale("E♭", ["E♭", "F", "G", "A♭", "B♭", "C", "D"]),
    new Scale("E", ["E", "F♯", "G♯", "A", "B", "C♯", "D♯"]),
    new Scale("E♯", ["E♯", "F𝄪", "G𝄪", "A♯", "B♯", "C𝄪", "D𝄪"]),
    new Scale("F♭", ["F♭", "G♭", "A♭", "B♭♭", "C♭", "D♭", "E♭"]),
    new Scale("F", ["F", "G", "A", "B♭", "C", "D", "E"]),
    new Scale("F♯", ["F♯", "G♯", "A♯", "B", "C♯", "D♯", "E♯"]),
    new Scale("G♭", ["G♭", "A♭", "B♭", "C♭", "D♭", "E♭", "F"]),
    new Scale("G", ["G", "A", "B", "C", "D", "E", "F♯"]),
    new Scale("G♯", ["G♯", "A♯", "B♯", "C♯", "D♯", "E♯", "F𝄪"]),
    new Scale("A♭", ["A♭", "B♭", "C", "D♭", "E♭", "F", "G"]),
    new Scale("A", ["A", "B", "C♯", "D", "E", "F♯", "G♯"]),
    new Scale("A♯", ["A♯", "B♯", "C𝄪", "D♯", "E♯", "F𝄪", "G𝄪"]),
    new Scale("B♭", ["B♭", "C", "D", "E♭", "F", "G", "A"]),
    new Scale("B", ["B", "C♯", "D♯", "E", "F♯", "G♯", "A♯"]),
    new Scale("B♯", ["B♯", "C𝄪", "D𝄪", "E♯", "F𝄪", "G𝄪", "A𝄪"]),
    new Scale("C♭", ["C♭", "D♭", "E♭", "F♭", "G♭", "A♭", "B♭"]),
];
var chordTypeGroups = new ChordTypeGroup([
    new ChordTypes("Triads", [
        new ChordType("Major", ["", "maj", "Maj", "M", "Ma", "ma", "△"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.natural),
            new ChordNote(5, Accidental.natural)
        ], null),
        new ChordType("Minor", ["min", "Min", "m", "Mi", "mi", "-"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.flat),
            new ChordNote(5, Accidental.natural)
        ], null),
        new ChordType("Augmented", ["aug", "+"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.natural),
            new ChordNote(5, Accidental.sharp)
        ], null),
        new ChordType("Diminished", ["dim", "<sup>o</sup>"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.flat),
            new ChordNote(5, Accidental.flat)
        ], null)
    ]),
    new ChordTypes("Sevenths", [
        new ChordType("Dominant 7th", ["7"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.natural),
            new ChordNote(5, Accidental.natural),
            new ChordNote(7, Accidental.flat)
        ], null),
        new ChordType("Major 7th", ["maj7", "Maj7", "M7", "Ma7", "ma7", "△7"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.natural),
            new ChordNote(5, Accidental.natural),
            new ChordNote(7, Accidental.natural)
        ], null),
        new ChordType("Minor 7th", ["min7", "m7", "Mi7", "mi7", "-7"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.flat),
            new ChordNote(5, Accidental.natural),
            new ChordNote(7, Accidental.flat)
        ], null),
        new ChordType("Augmented 7th", ["aug7", "+7"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.natural),
            new ChordNote(5, Accidental.sharp),
            new ChordNote(7, Accidental.flat)
        ], null),
        new ChordType("Diminished 7th", ["dim7", "<sup>o</sup>7"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.flat),
            new ChordNote(5, Accidental.flat),
            new ChordNote(6, Accidental.natural) // fix this for double-flat?
        ], null),
        new ChordType("Half-Diminished 7th", ["<sup>ø</sup>", "<sup>ø</sup>7", "min7♭5", "m7♭5", "-7♭5"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.flat),
            new ChordNote(5, Accidental.flat),
            new ChordNote(7, Accidental.flat)
        ], null)
    ]),
    new ChordTypes("Sixths", [
        new ChordType("Major 6th", ["Maj6", "maj6", "6"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.natural),
            new ChordNote(5, Accidental.natural),
            new ChordNote(6, Accidental.natural)
        ], null),
        new ChordType("Minor 6th", ["min6", "m6", "-6"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.flat),
            new ChordNote(5, Accidental.natural),
            new ChordNote(6, Accidental.natural)
        ], null)
    ]),
    new ChordTypes("Extended", [
        new ChordType("9th", ["9"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.natural),
            new ChordNote(5, Accidental.natural),
            new ChordNote(7, Accidental.flat),
            new ChordNote(2, Accidental.natural)
        ], null),
        new ChordType("Major 9th", ["maj9", "Ma9", "M9", "Ma9", "ma9", "△9"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.natural),
            new ChordNote(5, Accidental.natural),
            new ChordNote(7, Accidental.natural),
            new ChordNote(2, Accidental.natural)
        ], null),
        new ChordType("Minor 9th", ["min9", "m9", "Mi9", "mi9", "-9"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.flat),
            new ChordNote(5, Accidental.natural),
            new ChordNote(7, Accidental.flat),
            new ChordNote(2, Accidental.natural)
        ], null),
        new ChordType("11th", ["11"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.natural),
            new ChordNote(5, Accidental.natural),
            new ChordNote(7, Accidental.flat),
            new ChordNote(2, Accidental.natural),
            new ChordNote(4, Accidental.natural)
        ], null),
        new ChordType("Major ♯11", ["maj#11", "Ma#11", "M#11", "Ma#11", "ma#11", "△#11"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.natural),
            new ChordNote(5, Accidental.natural),
            new ChordNote(7, Accidental.natural),
            new ChordNote(2, Accidental.natural),
            new ChordNote(4, Accidental.sharp)
        ], null),
        new ChordType("Minor 11", ["min11", "m11", "Mi11", "mi11", "-11"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.flat),
            new ChordNote(5, Accidental.natural),
            new ChordNote(7, Accidental.flat),
            new ChordNote(2, Accidental.natural),
            new ChordNote(4, Accidental.natural)
        ], null),
        new ChordType("13th", ["13"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.natural),
            new ChordNote(5, Accidental.natural),
            new ChordNote(7, Accidental.flat),
            new ChordNote(2, Accidental.natural),
            new ChordNote(4, Accidental.natural),
            new ChordNote(6, Accidental.natural)
        ], null),
        new ChordType("Major 13", ["maj13", "Ma13", "M13", "Ma13", "ma13", "△13"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.natural),
            new ChordNote(5, Accidental.natural),
            new ChordNote(7, Accidental.natural),
            new ChordNote(2, Accidental.natural),
            new ChordNote(4, Accidental.sharp),
            new ChordNote(6, Accidental.natural)
        ], null),
        new ChordType("Minor 13", ["min13", "m13", "Mi13", "mi13", "-13"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.flat),
            new ChordNote(5, Accidental.natural),
            new ChordNote(7, Accidental.flat),
            new ChordNote(2, Accidental.natural),
            new ChordNote(4, Accidental.natural),
            new ChordNote(6, Accidental.natural)
        ], null)
    ])
]);
/// <reference path="scale.ts" />
/// <reference path="chords.ts" />
/// <reference path="chord.ts" />
/// <reference path="vars.ts" />
class ChordDisplay {
    // ---------------------------
    constructor(chordRootSelect, chordTypeSelect, outputDiv) {
        this.chordRootSelect = chordRootSelect;
        this.chordTypeSelect = chordTypeSelect;
        this.outputDiv = outputDiv;
        this.setupSelectValues();
        this.addEventListeners();
        this.displayChord();
    }
    // ---------------------------
    displayChord() {
        var chordType = this.chordTypeSelect.value;
        var chordRoot = this.chordRootSelect.value;
        var chords = new Chords([
            new Chord(chordRoot + " " + chordType, chordTypeGroups, scales)
        ]);
        var output = chords.getChordsForDisplay();
        this.outputDiv.innerHTML = output;
    }
    // ---------------------------
    setupSelectValues() {
        for (var i = 0; i < scales.length; i++) {
            var scale = scales[i];
            var option = document.createElement("option");
            option.text = scale.root;
            chordRootSelect.add(option);
        }
        for (var j = 0; j < chordTypeGroups.chordTypes.length; j++) {
            var optgroup = document.createElement("optgroup");
            optgroup.label = chordTypeGroups.chordTypes[j].groupName;
            for (var k = 0; k < chordTypeGroups.chordTypes[j].chordTypes.length; k++) {
                var chordType = chordTypeGroups.chordTypes[j].chordTypes[k];
                var option = document.createElement("option");
                option.text = chordType.name;
                optgroup.appendChild(option);
            }
            chordTypeSelect.add(optgroup);
        }
    }
    // ---------------------------
    addEventListeners() {
        this.chordRootSelect.addEventListener("change", (event) => {
            event.preventDefault();
            this.displayChord();
        });
        this.chordTypeSelect.addEventListener("change", (event) => {
            event.preventDefault();
            this.displayChord();
        });
    }
}
/// <reference path="scale.ts" />
/// <reference path="chords.ts" />
/// <reference path="chord.ts" />
/// <reference path="vars.ts" />
/// <reference path="chordDisplay.ts" />
var chordRootSelect;
var chordTypeSelect;
var outputDiv;
var chordDisplay;
window.onload = () => {
    chordRootSelect = document.getElementById("chordRoot");
    chordTypeSelect = document.getElementById("chordType");
    outputDiv = document.getElementById("output");
    chordDisplay = new ChordDisplay(chordRootSelect, chordTypeSelect, outputDiv);
};
class Note {
    // ---------------------------
    constructor(name, halfStepsFromRoot, scaleDegree) {
        this.name = name;
        this.halfStepsFromRoot = halfStepsFromRoot;
        this.scaleDegree = scaleDegree;
    }
}
