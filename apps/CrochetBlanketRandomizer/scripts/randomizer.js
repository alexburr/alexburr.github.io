// -------------
// SUPPORT CODE
// -------------
class RandomObject {
    constructor() { }

    getRandomInt = function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

class RandomDepth extends RandomObject {
    constructor(min, max, remaining) {
        super();
        let randomInt = this.getRandomInt(min, max);
        this.depth = randomInt;

        if (remaining != null & this.depth > remaining) {
            this.depth = remaining;
        }
    }
}

class RandomColor extends RandomObject {
    constructor(colors, invalidColor) {
        super();
        let min = 1;
        let max = Object.keys(colors).length;
        let randomInt = this.getRandomInt(min, max);
        this.color = colors[randomInt];

        if (invalidColor != null && invalidColor == this.color) {
            this.color = new RandomColor(colors, invalidColor).color;
        }

    }
}

// -------------
// GLOBALS
// -------------
const globals = {
    blanketDivId: "blanket",
    blanketPreviewContainerDivId: "blanketPreviewContainer",
    colorContainerDivId: "colorContainer",
    formContainerDivId: "formContainer",
    blanketLinedClass: "lined",
    formulaTextareaId: "formula",
    colors: Object.freeze({
        1: { name: "terracotta", value: "230, 145, 87", textColor: "black", displayName: "Terracotta", percentage: 16 },
        2: { name: "mustard", value: "255, 219, 88", textColor: "black", displayName: "Mustard", percentage: 16 },
        3: { name: "silverblue", value: "201, 217, 229", textColor: "black", displayName: "Silver Blue", percentage: 16 },
        4: { name: "fern", value: "185, 213, 91", textColor: "black", displayName: "Fern", percentage: 16 },
        5: { name: "midnightblue", value: "18, 52, 87", textColor: "white", displayName: "Midnight Blue", percentage: 16 },
        6: { name: "fisherman", value: "243, 237, 215", textColor: "black", displayName: "Fisherman", percentage: 16 }
    })
};

// ----------------
// REACT COMPONENTS
// ----------------
var BlanketRowRender = React.createClass({
    render: function() {        
        let rowColor = this.props.rowColor;
        let rowClassName = `blanketRow ` + rowColor.name;
        let rowStyle = {
            backgroundColor: `rgb(` + rowColor.value + `)`,
            color: rowColor.textColor
        };
        return (
            <div className={rowClassName} style={rowStyle}></div>
        )
    }
})

var BlanketBandRender = React.createClass({
    render: function() {
        let depth = this.props.depth;
        let color = this.props.color;
        let rows = [];

        let title = color.displayName + " x" + depth;
        let textarea = document.getElementById(globals.formulaTextareaId);

        for (var i = 0; i < depth; i++) {
            rows.push(<BlanketRowRender key={i} rowColor={color} />)
        }
        
        textarea.value += title + "\n";

        return (
            <div className="blanketBand" title={title}>
                {rows}
            </div>
        )
    }
});

var BlanketRender = React.createClass({
    render: function() {
        let colors = this.props.colors;
        let rowMin = this.props.rowMin;
        let rowMax = this.props.rowMax;
        let totalRows = this.props.totalRows;
        let lastColor = null;
        let blanketBands = [];
        let i = 0;

        while (i < totalRows) {
            let randomDepth = new RandomDepth(rowMin, rowMax, totalRows - i);
            let randomColor = new RandomColor(colors, lastColor);
            lastColor = randomColor.color;

            blanketBands.push(<BlanketBandRender key={i} color={randomColor.color} depth={randomDepth.depth} />);
            i = i + randomDepth.depth;
        }

        return ( 
            <div id={globals.blanketDivId}>
                {blanketBands}
            </div>
        )
    }
});

var ColorListItemRender = React.createClass({
    getInitialState: function() {
        return this.props.color;
    },
    render: function() {
        const color = this.state;
        const style = {
            backgroundColor: `rgb(` + color.value + `)`,
            color: color.textColor
        };
        const className = 'badge badge-pill ' + color.name;
        return (
            <span className={className} style={style}>{color.displayName}</span>
        )
    }
});

var ColorList = React.createClass({
    render: function() {
        const colors = this.props.colors;
        const numberOfColors = Object.keys(colors).length;
        let colorList = [];
        for (var i = 1; i <= numberOfColors; i++ ) {
            const color = colors[i];
            colorList.push(<ColorListItemRender key={i} color={color} />);
        }
        return (
            <div>{colorList}</div>
        )
    }
});

var Form = React.createClass({
    getInitialState: function() {
        return {
            colors: globals.colors,
            rowMin: 1,
            rowMax: 6,
            totalRows: 50 
        };
    },
    componentDidMount: function() {
        this.displayResults();
    },
    componentDidUpdate: function() {
        this.displayResults();
    },
    handleRowMinChange: function(e) {
        let selectedMin = e.target.value;
        if (selectedMin <= this.state.rowMax) {
            this.setState({ rowMin: selectedMin });
        }
    },
    handleRowMaxChange: function(e) {
        let selectedMax = e.target.value;
        if (selectedMax >= this.state.rowMin) {
            this.setState({ rowMax: selectedMax });
        }
    },
    handleTotalRowsChange: function(e) {        
        this.setState({ totalRows: e.target.value });
    },
    handleShowLinesChange: function(e) {
        const blanket = document.getElementById(globals.blanketDivId);    
        if (blanket != null) {
            if (blanket.classList.contains(globals.blanketLinedClass)) {
                blanket.classList.remove(globals.blanketLinedClass);            
            } else {
                blanket.classList.add(globals.blanketLinedClass);
            }
        }
    },
    handleCopyClick: function(e) {
        e.preventDefault();
        let textarea = document.getElementById(globals.formulaTextareaId);
        textarea.select();
        document.execCommand("copy");
        alert("The blanket pattern has been copied to the clipboard.");
    },
    handleFormSubmit: function(e) {
        // RANDOMIZE button will submit the form
        e.preventDefault();
        this.displayResults();
    },
    displayResults: function() {
        let textarea = document.getElementById(globals.formulaTextareaId);
        textarea.value = "";
        ReactDOM.render(
            <BlanketRender colors={this.state.colors} totalRows={this.state.totalRows} lastRow={this.state.lastRow} rowMin={this.state.rowMin} rowMax={this.state.rowMax} />,
            document.getElementById(globals.blanketPreviewContainerDivId)
        );
        ReactDOM.render(
            <ColorList colors={this.state.colors} />, document.getElementById(globals.colorContainerDivId)
        );
    },
    render: function() {
        return (
            <form className="" onSubmit={this.handleFormSubmit}>
                <h6>Actions</h6>
                <div className="card">
                    <div className="card-body">
                        <div className="form-group row">
                            <label htmlFor="rowMin" className="col-7 col-form-label">Smallest Row</label>
                            <div className="col-5">
                                <input type="number" className="form-control" name="rowMin" min="1" max="6" value={this.state.rowMin} pattern="[0-9]*" inputMode="numeric" onChange={this.handleRowMinChange} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="rowMax" className="col-7 col-form-label">Largest Row</label>
                            <div className="col-5">
                                <input type="number" className="form-control" name="rowMax" min="1" max="6" value={this.state.rowMax} pattern="[0-9]*" inputMode="numeric" onChange={this.handleRowMaxChange} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="totalRows" className="col-7 col-form-label">Total Rows</label>
                            <div className="col-5">
                                <input type="number" className="form-control" name="totalRows" min="1" max="100" value={this.state.totalRows} pattern="[0-9]*" inputMode="numeric" onChange={this.handleTotalRowsChange} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-12 text-center">
                                <button className="btn btn-primary btn-lg">Randomize!</button>
                            </div>
                        </div>       
                    </div>                                 
                </div>
                <h6>Options</h6>
                <div className="card">
                    <div className="card-body">
                        <div className="form-group row" id="showLinesRow">
                            <div className="form-check col-12">
                                <input type="checkbox" className="form-check-input" id="showLines" onChange={this.handleShowLinesChange} />&nbsp;
                                <label className="form-check-label" htmlFor="showLines">Show Lines</label>
                            </div>
                        </div>
                    </div>
                </div>
                <h6>Color Key</h6>
                <div className="card">
                    <div className="card-body" id="colorContainer"></div>
                </div>               
                <h6>Pattern <a className="btn btn-outline-primary btn-sm" href="#" role="button" onClick={this.handleCopyClick}>Copy</a></h6>
                <textarea className="form-control" id="formula" readOnly="readonly"></textarea>             
            </form>
        );
    }
});

// ----------------
// Start the show
// ----------------
ReactDOM.render(<Form />, document.getElementById(globals.formContainerDivId));