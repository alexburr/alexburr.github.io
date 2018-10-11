var Accidental;
(function (Accidental) {
    Accidental[Accidental["flat"] = -1] = "flat";
    Accidental[Accidental["natural"] = 0] = "natural";
    Accidental[Accidental["sharp"] = 1] = "sharp";
    Accidental[Accidental["test"] = 2] = "test";
})(Accidental || (Accidental = {}));
var Scale = (function () {
    function Scale(root, notes) {
        this.root = root;
        this.notes = notes;
    }
    return Scale;
}());
var ChordNote = (function () {
    function ChordNote(scaleDegree, accidental) {
        this.scaleDegree = scaleDegree;
        this.accidental = accidental;
    }
    return ChordNote;
}());
var ChordType = (function () {
    function ChordType(name, names, chordNotes, accidental) {
        this.name = name;
        this.names = names;
        this.chordNotes = chordNotes;
        this.accidental = accidental;
    }
    return ChordType;
}());
var ChordTypes = (function () {
    function ChordTypes(name, chordTypesArray) {
        this.groupName = name;
        this.chordTypes = chordTypesArray;
    }
    ChordTypes.prototype.findTypeByName = function (name) {
        var chordType = null;
        for (var i = 0; i < this.chordTypes.length; i++) {
            if (name.toLowerCase() == this.chordTypes[i].name.toLowerCase()) {
                chordType = this.chordTypes[i];
                break;
            }
        }
        return chordType;
    };
    return ChordTypes;
}());
var ChordTypeGroup = (function () {
    function ChordTypeGroup(chordTypes) {
        this.chordTypes = chordTypes;
    }
    ChordTypeGroup.prototype.findTypeByName = function (name) {
        var chordType = null;
        for (var i = 0; i < this.chordTypes.length; i++) {
            var chordTypeResult = this.chordTypes[i].findTypeByName(name);
            if (chordTypeResult !== null) {
                chordType = chordTypeResult;
                break;
            }
        }
        return chordType;
    };
    return ChordTypeGroup;
}());
var Chord = (function () {
    function Chord(name, chordTypeGroups, scales) {
        this.inputName = name;
        this.init(chordTypeGroups, scales);
    }
    Chord.prototype.outputDisplay = function () {
        var output = "";
        output += "<th class=\"text-xs-center\">" + this.name + "</th>";
        output += "<td>";
        for (var j = 0; j < this.chordType.names.length; j++) {
            if (j != 0) {
                output += ", ";
            }
            output += this.root + this.chordType.names[j];
        }
        output += "</td>";
        output += "<td>";
        for (var k = 0; k < this.noteNames.length; k++) {
            output += "<span>" + this.noteNames[k] + "</span>";
        }
        output += "</td>";
        return output;
    };
    Chord.prototype.init = function (chordTypeGroups, scales) {
        this.extractRoot();
        this.extractType(chordTypeGroups);
        this.name = this.root + " " + this.chordType.name;
        this.extractScale(scales);
        this.extractNoteNames();
    };
    Chord.prototype.extractRoot = function () {
        var dividerIndex = this.inputName.indexOf(" ");
        if (dividerIndex != 0) {
            this.root = this.inputName.substring(0, dividerIndex);
        }
        else {
            this.root = "C";
        }
    };
    Chord.prototype.extractType = function (chordTypeGroups) {
        var nameLength = this.inputName.length;
        var dividerIndex = this.inputName.indexOf(" ");
        if (dividerIndex != 0) {
            var chordTypeSubstr = this.inputName.substring(dividerIndex + 1, nameLength);
            this.chordType = chordTypeGroups.findTypeByName(chordTypeSubstr);
        }
        else {
            this.chordType = chordTypeGroups.findTypeByName("Major");
        }
    };
    Chord.prototype.extractScale = function (scales) {
        for (var i = 0; i < scales.length; i++) {
            if (this.root == scales[i].root) {
                this.scale = scales[i];
            }
        }
    };
    Chord.prototype.extractNoteNames = function () {
        var noteDegrees = [];
        var noteNames = [];
        for (var i = 0; i < this.chordType.chordNotes.length; i++) {
            var chordNote = this.chordType.chordNotes[i];
            var chordNoteScaleIndex = chordNote.scaleDegree;
            var noteName = this.scale.notes[chordNoteScaleIndex - 1];
            if (chordNote.accidental == Accidental.flat) {
                noteNames.push(this.reconcileAccidentalNoteName(noteName, "♭"));
            }
            else if (chordNote.accidental == Accidental.sharp) {
                noteNames.push(this.reconcileAccidentalNoteName(noteName, "♯"));
            }
            else {
                noteNames.push(noteName);
            }
        }
        this.noteNames = noteNames;
    };
    Chord.prototype.reconcileAccidentalNoteName = function (noteName, accidental) {
        var noteNameLength = noteName.length;
        var noteIsSharp = (noteName.indexOf("♯") != -1);
        var noteIsFlat = (noteName.indexOf("♭") != -1);
        if (noteNameLength == 1) {
            return noteName + accidental;
        }
        else {
            if ((noteIsSharp && accidental == "♭") || (noteIsFlat && accidental == "♯")) {
                return noteName.slice(0, 1);
            }
            else {
                return noteName + accidental;
            }
        }
    };
    return Chord;
}());
var Chords = (function () {
    function Chords(chords) {
        this.chords = chords;
    }
    Chords.prototype.getChordsForDisplay = function () {
        var output = "<table class=\"table table-hover table-sm text-xs-center\">";
        output += "<thead><tr><th class=\"text-xs-center\">Chord</th><th class=\"text-xs-center\">Names</th><th class=\"text-xs-center\">Notes</th></tr></thead><tbody><tr>";
        for (var i = 0; i < this.chords.length; i++) {
            output += this.chords[i].outputDisplay();
        }
        output += "</tr></tbody></table>";
        return output;
    };
    return Chords;
}());
var scales = [
    new Scale("C", ["C", "D", "E", "F", "G", "A", "B"]),
    new Scale("D♭", ["D♭", "E♭", "F", "G♭", "A♭", "B♭", "C"]),
    new Scale("D", ["D", "E", "F♯", "G", "A", "B", "C♯"]),
    new Scale("E♭", ["E♭", "F", "G", "A♭", "B♭", "C", "D"]),
    new Scale("E", ["E", "F♯", "G♯", "A", "B", "C♯", "D♯"]),
    new Scale("F", ["F", "G", "A", "B♭", "C", "D", "E"]),
    new Scale("G", ["G", "A", "B", "C", "D", "E", "F♯"]),
    new Scale("A♭", ["A♭", "B♭", "C", "D♭", "E♭", "F", "G"]),
    new Scale("A", ["A", "B", "C♯", "D", "E", "F♯", "G♯"]),
    new Scale("B♭", ["B♭", "C", "D", "E♭", "F", "G", "A"]),
    new Scale("B", ["B", "C♯", "D♯", "E", "F", "G♯", "A♯"])
];
var chordTypeGroups = new ChordTypeGroup([
    new ChordTypes("Triads", [
        new ChordType("Major", ["", "maj", "Maj", "M", "△"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.natural),
            new ChordNote(5, Accidental.natural)
        ], null),
        new ChordType("Minor", ["min", "m", "-"], [
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
        new ChordType("Major 7th", ["Maj7", "maj7", "△7"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.natural),
            new ChordNote(5, Accidental.natural),
            new ChordNote(7, Accidental.natural)
        ], null),
        new ChordType("Minor 7th", ["min7", "m7", "-7"], [
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
            new ChordNote(6, Accidental.natural)
        ], null),
        new ChordType("Half-Diminished 7th", ["<sup>ø</sup>", "<sup>ø</sup>7", "min7♭5", "m7♭5"], [
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
        ], null)
    ])
]);
window.onload = function () {
    var chordRootSelect = document.getElementById("chordRoot");
    var chordTypeSelect = document.getElementById("chordType");
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
    document.getElementById("button").addEventListener("click", function (event) {
        event.preventDefault();
        var chordType = window["chordType"].value;
        var chordRoot = window["chordRoot"].value;
        var chords = new Chords([
            new Chord(chordRoot + " " + chordType, chordTypeGroups, scales)
        ]);
        var output = chords.getChordsForDisplay();
        document.getElementById("output").innerHTML = output;
    }, false);
};
var Note = (function () {
    function Note(name, halfStepsFromRoot, scaleDegree) {
        this.name = name;
        this.halfStepsFromRoot = halfStepsFromRoot;
        this.scaleDegree = scaleDegree;
    }
    return Note;
}());
//# sourceMappingURL=app.js.map