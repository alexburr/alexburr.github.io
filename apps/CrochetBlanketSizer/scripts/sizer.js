// -------------
// SUPPORT CODE
// -------------
class ScreenGrabber {
    constructor(regionId, downloadButtonId) {
        this.region = document.getElementById(regionId);
        this.downloadButton = document.getElementById(downloadButtonId);
        this.canvas = {};
    }

    download = function() {
        this.downloadButton.className = "hidden";
        this.canvas = html2canvas(this.region).then(function(canvas) {
            const a = document.createElement('a');
            a.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            a.download = 'blanket.png';
            a.click();
        });
        this.downloadButton.className = "";
    }
}

class TextFiller {
    constructor(sourceId, targetId) {
        this.source = document.getElementById(sourceId);
        this.target = document.getElementById(targetId);
    }

    fill() {
        const sourceText = this.source.textContent;
        this.target.innerText = this.source.textContent;
    }

    empty() {
        this.target.innerText = "";
    }
}

class ClipboardCopier {
    colors = [];
    textToCopy = "";

    constructor(colors) {
        this.colors = colors;
        let i = 0;

        while (i < colors.length) {
            const color = colors[i];
            this.textToCopy += color.displayName + "\n" + color.numberSmall + " small\t" + color.numberLarge + " large\n\n";
            i++;
        }
    }

    copy() {
        navigator.clipboard.writeText(this.textToCopy)
            .then(() => { alert(`Copied!`); })
            .catch((error) => { alert(`Copy failed! ${error}`); })
    }
}

class SizeManager {
    numberOfColumns = 0;

    constructor(numberOfColumns) {
        this.numberOfColumns = numberOfColumns;
    }

    getRandomSize() {        
        let smallSize = (Math.random() < globals.smallProbability);
        let size = smallSize ? "small" : "large";
        return size;
    }

    checkRandomSize(blanketCircles, size) {
        if (size == "large" && blanketCircles.length > 0) {
            let index = blanketCircles.length;
            if (blanketCircles[index - 1].size == "large") { size = "small"; }

            if (blanketCircles.length > this.numberOfColumns) {
                if ((blanketCircles[index - (this.numberOfColumns - 3)].size == "large") || 
                    (blanketCircles[index - (this.numberOfColumns - 2)].size == "large") ||
                    (blanketCircles[index - (this.numberOfColumns - 1)].size == "large") ||
                    (blanketCircles[index - (this.numberOfColumns)].size == "large") ||
                    (blanketCircles[index - (this.numberOfColumns + 1)].size == "large")) { 
                    size = "small"; 
                }
            }
        }

        return size;
    }
}

class ColorManager {
    colors = [];
    numberOfColumns = 0;

    constructor(colors, numberOfColumns) {
        this.colors = colors;
        this.numberOfColumns = numberOfColumns;
    }

    cycleColor(color) {
        const index = this.colors.findIndex(colorToFind => colorToFind === color);
        let newColor = (index == this.colors.length - 1) ? this.colors[0] : this.colors[index + 1];

        return newColor;
    }

    getRandomColor() {
        let randomNum = Math.floor(Math.random() * this.colors.length);
        let randomColor = this.colors[randomNum];
        return randomColor;
    }

    checkRandomColor(blanketCircles, color) {
        let result = false;
        let lastIndex = blanketCircles.length;
        let numberOfColumns = this.numberOfColumns;

        if (lastIndex < 1) { 
            result = true;
        }

        if (lastIndex == 1) {
            result = (blanketCircles[0].color.name !== color.name);
        }

        if (lastIndex > 1) {
            let previousColor = blanketCircles[lastIndex - 1].color;

            if (lastIndex > numberOfColumns) {

                result = ((previousColor.name !== color.name) &&
                        (blanketCircles[lastIndex - (numberOfColumns - 3)].color.name !== color.name) && 
                        (blanketCircles[lastIndex - (numberOfColumns - 2)].color.name !== color.name) &&
                        (blanketCircles[lastIndex - (numberOfColumns - 1)].color.name !== color.name) &&
                        (blanketCircles[lastIndex - (numberOfColumns)].color.name !== color.name) &&
                        (blanketCircles[lastIndex - (numberOfColumns + 1)].color !== color.name));
                debugLogger.log("lastIndex > " + numberOfColumns + " (" + lastIndex + ") " + color.name + " " + result);
            } else {
                result = (previousColor.name !== color.name);
                debugLogger.log("lastIndex > 1" + " (" + lastIndex + ") " + color.name + " " + previousColor.name + " " + result);
            }
        }

        return result;
    }
}

class BlanketData {
    blanketCircles = [];

    addCircle(color, size) {
        var blanketCircleObject = {
            id: this.blanketCircles.length,
            color: color,
            size: size
        }

        this.blanketCircles.push(blanketCircleObject);
        return blanketCircleObject;
    }

    getCircles() {
        return this.blanketCircles;
    }

    updateCircleColor(id, color) {
        let blanketCircleObject = this.getCircleById(id);
        debugLogger.log('blanketCircleObject found ' + blanketCircleObject.id + " " + blanketCircleObject.color.name);
        blanketCircleObject.color = color;
        debugLogger.log('blanketCircleObject change ' + blanketCircleObject.id + " " + blanketCircleObject.color.name);
        return blanketCircleObject;
    }

    updateCircleSize(id, size) {
        let blanketCircleObject = this.getCircleById(id);
        debugLogger.log('blanketCircleObject found ' + blanketCircleObject.id + " " + blanketCircleObject.size);
        blanketCircleObject.size = size;
        debugLogger.log('blanketCircleObject change ' + blanketCircleObject.id + " " + blanketCircleObject.size);
        return blanketCircleObject;
    }

    getCircleById(idToFind) {
        return this.blanketCircles.find( ({ id }) => id === idToFind );
    }
}

class DebugLogger {
    isDebug = false;

    constructor() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const debugParam = urlParams.get('debug');
        this.isDebug = (debugParam == "true");
    }

    log(message) {
        if (this.isDebug) {
            console.log(message);
        }
    }
}

// -------------
// GLOBALS
// -------------
const globals = {
    blanketDivId: "blanket",
    blanketPreviewContainerDivId: "blanketPreviewContainer",
    clipboardId: "clipboard",
    colorContainerDivId: "colorContainer",
    columnsDefault: 11,
    downloadButtonDivId: "downloadButtonContainer",
    exportContainerDivId: "exportContainer",
    rowsDefault: 12,
    smallProbability: .4,
    squareColor: { name: "duckEgg", value: "178, 198, 197", displayName: "Duck Egg" },
    colors: [
        { name: "cream", value: "237, 236, 232", displayName: "Cream", numberSmall: 0, numberLarge: 0 },
        { name: "petrol", value: "12, 67, 92", displayName: "Petrol", numberSmall: 0, numberLarge: 0 },
        { name: "tomato", value: "140, 16, 16", displayName: "Tomato", numberSmall: 0, numberLarge: 0 },
        { name: "graphite", value: "33, 33, 33", displayName: "Graphite", numberSmall: 0, numberLarge: 0 },
        { name: "teal", value: "15, 128, 118", displayName: "Teal", numberSmall: 0, numberLarge: 0 },
        { name: "daffodil", value: "251, 250, 150", displayName: "Daffodil", numberSmall: 0, numberLarge: 0 },        
        { name: "saffron", value: "247, 165, 87", displayName: "Saffron", numberSmall: 0, numberLarge: 0 }
    ]
};

// ----------------
// REACT COMPONENTS
// ----------------
var ColorEntry = React.createClass({
    render: function() {
        return(
            <ul className="list-unstyled">
                <li>
                    <b>{this.props.displayName}</b><br />
                    Small: {this.props.numberSmall}, Large: {this.props.numberLarge}
                </li>
            </ul>
        )
    }
})

var ColorList = React.createClass({
    getColorCounts(colors, circles) {
        let colorCounts = [];
        let i = 0;

        while (i < colors.length) {
            let color = colors[i];
            let j = 0;
            let colorCount = { name: color.name, displayName: color.displayName, smallSize: 0, largeSize: 0 };

            while (j < circles.length) {
                let circle = circles[j];
                if (circle.color.name == colorCount.name) {
                    if (circle.size === "small") {
                        colorCount.smallSize++;
                    } else {
                        colorCount.largeSize++;
                    }
                }

                j++;
            }

            colorCounts.push(colorCount);
            i++;
        }

        return colorCounts;
    },
    getColorEntries(colorCounts) {
        let i = 0;
        let colorEntries = [];
        while (i < colorCounts.length) {
            colorEntries.push(
                <ColorEntry 
                key={i} 
                displayName={colorCounts[i].displayName} 
                numberSmall={colorCounts[i].smallSize} 
                numberLarge={colorCounts[i].largeSize} />
            );
            i++;
        }
        return colorEntries;
    },
    render: function() {
        let colors = this.props.colors;
        let circles = this.props.circles;

        let colorCounts = this.getColorCounts(colors, circles);
        let colorEntries = this.getColorEntries(colorCounts);

        return (
            <div>{colorEntries}</div>
        )
    }
})

var BlanketCircle = React.createClass({
    getInitialState() {        
        let size = sizeManager.getRandomSize();
        size = sizeManager.checkRandomSize(blanketData.getCircles(), size);
        let color = this.getNewColor();
        let blanketCircleObject = blanketData.addCircle(color, size);

        return {
            color: color,
            className: "blanket-circle " + size,
            size: size,
            colorName: color.name,
            colorValue: color.value,
            backgroundColor: "rgb(" + color.value + ")",
            id: blanketCircleObject.id
        };
    },    
    getNewColor() {
        let isColorSafe = false;
        let color = null;

        while (!isColorSafe) {
            color = colorManager.getRandomColor();
            isColorSafe = colorManager.checkRandomColor(blanketData.getCircles(), color);
        }

        return color;
    },
    handleClick(e) {
        if (e.shiftKey || e.ctrlKey) {
            debugLogger.log('will change ' + this.state.size);
            let newSize = (this.state.size == "small") ? "large" : "small";
            let blanketCircleObject = blanketData.updateCircleSize(this.state.id, newSize);
            this.setState({
                size: newSize,
                className: "blanket-circle " + newSize
            });
            debugLogger.log('changed ' + this.state.size);
        } else {
            debugLogger.log('will change ' + this.state.colorName);
            let newColor = colorManager.cycleColor(this.state.color);
            let blanketCircleObject = blanketData.updateCircleColor(this.state.id, newColor);
            this.setState({ 
                color: newColor,
                colorName: newColor.name, 
                colorValue: newColor.value,
                backgroundColor: "rgb(" + newColor.value + ")"
            });
            debugLogger.log('changed ' + this.state.colorName);
        }
    },
    componentDidUpdate() {
        ReactDOM.render(
            <ColorList colors={globals.colors} circles={blanketData.getCircles()} />, document.getElementById(globals.colorContainerDivId)
        );
    },
    render: function() {
        return (
            <span className={this.state.className} style={{ backgroundColor: this.state.backgroundColor }} onClick={this.handleClick} ></span>
        )
    }
})

var BlanketSquare = React.createClass({
    render: function() {
        let squareBackgroundColor = "rgb(" + globals.squareColor.value + ")";
        return (
            <div className="blanket-square" style={{ backgroundColor: squareBackgroundColor }}>
                <BlanketCircle />
            </div>
        )
    }
})

var BlanketRow = React.createClass({
    render: function() {
        let blanketSquares = [];
        let i = 0;

        while (i< this.props.columns) {
            blanketSquares.push(<BlanketSquare key={i} />);
            i++;
        }

        return ( 
            <div className="blanket-row">
                {blanketSquares}
            </div>
        )
    }
});

var DownloadButton = React.createClass({
    handleDownloadClick: function(e) {
        e.preventDefault();
        const screenGrabber = new ScreenGrabber(globals.exportContainerDivId, globals.downloadButtonDivId);
        screenGrabber.download();
    },
    render: function() {
        return (            
            <a className="btn btn-primary btn-sm" id="downloadButton" href="#" role="button" onClick={this.handleDownloadClick}>Download Blanket</a>
        )
    }
})

var Blanket = React.createClass({
    render: function() {
        let blanketRows = [];
        let i = 0;

        while (i < this.props.rows) {
            blanketRows.push(<BlanketRow key={i} colors={this.props.colors} columns={this.props.columns} />);
            i++;
        }

        return ( 
            <div id={globals.blanketDivId}>
                {blanketRows}
            </div>
        )
    }
});

var Form = React.createClass({
    getInitialState: function() {
        return {
            colors: globals.colors,
            rows: globals.rowsDefault,
            columns: globals.columnsDefault,
        };
    },
    componentDidMount: function() {
        this.displayResults();
    },
    displayResults: function() {
        ReactDOM.render(
            <ColorList colors={this.state.colors} circles={blanketData.getCircles()} />, document.getElementById(globals.colorContainerDivId)
        );
        ReactDOM.render(
            <DownloadButton />, document.getElementById(globals.downloadButtonDivId)
        );
    },
    render: function() {
        return (
            <div>
                <Blanket colors={this.state.colors} rows={this.state.rows} columns={this.state.columns} />
            </div>
        );
    }
});

// ----------------
// Start the show
// ----------------
const debugLogger = new DebugLogger();
const colorManager = new ColorManager(globals.colors, globals.columnsDefault); 
const sizeManager = new SizeManager(globals.columnsDefault);
const blanketData = new BlanketData();
ReactDOM.render(<Form />, document.getElementById(globals.blanketPreviewContainerDivId));