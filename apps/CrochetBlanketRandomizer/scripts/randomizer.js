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

class RandomColor extends RandomObject {
    constructor(colors) {
        super();
        let min = 1;
        let max = Object.keys(colors).length;
        let randomInt = this.getRandomInt(min, max);
        this.color = colors[randomInt];
    }
}

// -------------
// GLOBALS
// -------------
const globals = {
    blanketDivId: "blanket",
    blanketLinedClass: "lined",
    colors: Object.freeze({
        1: { name: "terracotta", value: "230, 145, 87", textColor: "black", displayName: "Terracotta" },
        2: { name: "mustard", value: "255, 219, 88", textColor: "black", displayName: "Mustard" },
        3: { name: "silverblue", value: "201, 217, 229", textColor: "black", displayName: "Silver Blue" },
        4: { name: "fern", value: "185, 213, 91", textColor: "black", displayName: "Fern" },
        5: { name: "midnightblue", value: "18, 52, 87", textColor: "white", displayName: "Midnight Blue" },
        6: { name: "fisherman", value: "243, 237, 215", textColor: "black", displayName: "Fisherman" }
    })
};

// ----------------
// REACT COMPONENTS
// ----------------
var BlanketRowRender = React.createClass({
    render: function() {
        let randomColor = new RandomColor(this.props.colors);
        let color = randomColor.color;
        let className = `blanketRow ` + color.name;
        let rowStyle = {
            backgroundColor: `rgb(` + color.value + `)`,
            color: color.textColor
        };
        return (
            <div className={className} style={rowStyle}></div>
        )
    }
})

var BlanketRender = React.createClass({
    render: function() {
        let blanketRows = [];

        for (var i = 0; i < this.props.totalRows; i++) {
            blanketRows.push(<BlanketRowRender key={i} colors={this.props.colors} />);
        }

        return ( 
            <div id={globals.blanketDivId}>
                {blanketRows}
            </div>
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
            const className = 'list-group-item small d-flex justify-content-between align-items-center' + color.name;
            const style = {
                backgroundColor: `rgb(` + color.value + `)`,
                color: color.textColor
            };
            const textValue = `RGB(` + color.value + `)`;
            colorList.push(<li key={i} className={className} style={style}>{color.displayName} <span className="badge badge-pill">{textValue}</span></li>);
        }

        return (
            <ul className="list-group">{colorList}</ul>
        )
    }
})

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
        this.setState({rowMin: e.target.value});
    },
    handleRowMaxChange: function(e) {
        this.setState({rowMax: e.target.value});
    },
    handleTotalRowsChange: function(e) {        
        this.setState({totalRows: e.target.value});
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
    // Use this when including the "Randomize!" button
    handleFormSubmit: function(e) {
        e.preventDefault();
        this.displayResults();
    },
    displayResults: function() {
        ReactDOM.render(
            <BlanketRender colors={this.state.colors} totalRows={this.state.totalRows} />,
            document.getElementById('blanketContainer')
        );
        ReactDOM.render(
            <ColorList colors={this.state.colors} />, document.getElementById('colorContainer')
        );
    },
    render: function() {
        return (
            <form className="" onSubmit={this.handleFormSubmit}>
                <h6>Actions</h6>
                <div className="card">
                    <div className="card-body">
                        <div className="form-group row d-none">
                            <label htmlFor="rowMin" className="col-7 col-form-label">Smallest Row</label>
                            <div className="col-5">
                                <input type="number" className="form-control" name="rowMin" min="1" max="6" value={this.state.rowMin} pattern="[0-9]*" inputMode="numeric" onChange={this.handleRowMinChange} />
                            </div>
                        </div>
                        <div className="form-group row d-none">
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
                <div id="colorContainer"></div>                
            </form>
        );
    }
});

// ----------------
// Start the show
// ----------------
ReactDOM.render(<Form />, document.getElementById('formContainer'));