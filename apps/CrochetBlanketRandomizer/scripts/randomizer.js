// -------------
// SUPPORT CODE
// -------------
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function toggleLines() {
    var blanket = document.getElementById('blanket');
    
    if (blanket != null) {
        if (blanket.classList.contains("lined")) {
            blanket.classList.remove("lined");            
        } else {
            blanket.classList.add("lined");
        }
    }
}

class RowColor {
    constructor(colors) {
        let min = 1;
        let max = numberOfColors;
        let randomInt = getRandomInt(min, max);
        this.color = colors[randomInt];
    }
}

var numberOfColors = 6;

var colors = Object.freeze({
    1: { name: "terracotta", value: "rgb(226, 114, 91)", displayName: "Terracotta" },
    2: { name: "mustard", value: "rgb(255, 219, 88)", displayName: "Mustard" },
    3: { name: "silverblue", value: "rgb(201,217,229)", displayName: "Silver Blue" },
    4: { name: "fern", value: "rgb(151,186,118)", displayName: "Fern" },
    5: { name: "midnightblue", value: "rgb(18,52,87)", displayName: "Midnight Blue" },
    6: { name: "fisherman", value: "rgb(243,237,215)", displayName: "Fisherman" }
});

// -------
// REACT!
// -------
var BlanketRow = React.createClass({
    render: function() {
        var rowColor = new RowColor(this.props.colors);
        var className = `blanketRow ` + rowColor.color.name;
        return (
            <div className={className}></div>
        )
    }
})

var Blanket = React.createClass({
    render: function() {
        var blanketRows = [];
        for (var i = 0; i < this.props.totalRows; i++) {
            blanketRows.push(<BlanketRow key={i} colors={this.props.colors} />);
        }

        return ( 
            <div id="blanket" className="blanket">
                {blanketRows}
            </div>
        )
    }
});

var ColorList = React.createClass({
    render: function() {
        var colors = this.props.colors;
        var colorList = [];
        for (var i = 1; i <= numberOfColors; i++ ) {
            var className = 'list-group-item small ' + colors[i].name;
            colorList.push(<li key={i} className={className}>{colors[i].displayName}</li>);
        }

        return (
            <ul className="list-group">{colorList}</ul>
        )
    }
})

var Form = React.createClass({
    getInitialState: function() {
        return {
            colors: colors,
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
        toggleLines();
    },
    // Use this when including the "Randomize!" button
    handleFormSubmit: function(e) {
        e.preventDefault();
        this.displayResults();
    },
    displayResults: function() {
        ReactDOM.render(
            <Blanket colors={this.state.colors} totalRows={this.state.totalRows} />,
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

ReactDOM.render(<Form />, document.getElementById('formContainer'));