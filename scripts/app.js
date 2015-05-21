

var CategorySummaries = React.createClass({
	getInitialState: function () {
		return jsonData;
	},
	componentDidMount: function() {
        this.setState(jsonData);
	},
	render: function() {
		return(			
			<div>				
                <Header total={this.state.categories.summary.amount}/>
				<div className="row">			
					<div className="col-md-4">
						<Summary data={this.state.categories}/>          
                        <Drilldowns data={this.state.categories.drilldown} drilldownType={"category"}/>
					</div>								
					<div className="col-md-4">
						<Summary data={this.state.payees}/>
                        <Drilldowns data={this.state.payees.drilldown}  drilldownType={"payee"}/>
					</div>							
					<div className="col-md-4">
						<Summary data={this.state.categories} />
                        <Drilldowns data={this.state.categories.drilldown}  drilldownType={"category"}/>
					</div>				
				</div>									
			</div>
		);
	}	
});	
	
var Header = React.createClass({
    render: function() {
        return (
          
            <div className="row">
                <div className="col-md-12">
                    <h2>Total: {this.props.total}</h2>
                </div>
            </div>
            
        );
    }

});

var Summary = React.createClass({
	render: function() {
		return (
			<div className="row">
				<div className="col-md-12">
					<h3>{this.props.data.summary.pageTitle}</h3>
				</div>
			</div>
		);		
	}	
});	
	
var CategorySummary = React.createClass({
	// getInitialState: function() {
		// return {data:[]};
	// },
	// componentDidMount: function() {
		
		// this.setState({data: this.props.data});
		// // $.ajax({
			// // url:this.props.url,
			// // dataType: 'json',
			// // success: function(data) {
				// // this.setState({data: data});
			// // }.bind(this),
			// // error: function(xhr, status, err) {
				// // console.error(err.toString());
			// // }.bind(this)
		// // });
	// },
	render: function() {			
		return (
            
			<div className="categorySummary">			
				<h3>{this.props.data.summary.pageTitle}</h3>
				<CategoryDrilldowns data={this.props.data.drilldown} key={this.props.key}/>
			</div>
		);
	}				
});

var Drilldowns = React.createClass({
	render: function() {
        var dt = this.props.drilldownType;
		var items = this.props.data.map(function(drilldown) {
			return (
				<Drilldown data={drilldown} drilldownType={dt}/>				
			);
		});
		
		return (
		  <table className="categoryDrilldowns table table-striped">
			<thead>
				<tr>
					<th>Category</th>
					<th>Amount</th>
				</tr>
			</thead>
			<tbody>
			{items}
			</tbody>
		  </table>
		);
	}
});

var Drilldown = React.createClass({
	render: function() {
        console.log(this.props);
		return (			
			<tr>
                <td>{this.props.data[this.props.drilldownType].name}</td>
				<td>{this.props.data.formattedAmount}</td>
			</tr>
		);
	}		
});

// var CommentList = React.createClass({
	// render: function() {
		// var commentNodes = this.props.data.map(function(comment) {
		
			// return (
				// <Comment author={comment.author}>
					// {comment.text}
				// </Comment>
			// );
		// });
		
		// return (
			// <div class="commentList">
			// {commentNodes}
			// </div>
		// );
	// }
// });
// var CommentForm = React.createClass({
	// render: function() {
		// return (
			// <div className="commentForm">
			 // I'm a CommentForm
			// </div>
		// );
	// }
// });

// var converter = new Showdown.converter();

// var Comment = React.createClass({
	// render: function() {
		// var raw = converter.makeHtml(this.props.children.toString());
		
		// return (
			// <div className="comment">
				// <h2 className="commentAuthor">
				// {this.props.author}
				// </h2>
				// <span dangerouslySetInnerHTML = {{__html: raw}} />
				
			// </div>
		// );
	// }
// });

// var data = {"summary": {"amount":1553160689.160,"numEntries":176835,"numDrilldowns":7,"page":1,"pageSize":5,"pages":2,"pageTitle":"Expense Categories"	},drilldown":[{"formattedAmount":"$979,832,241.16",	""amount":979832241.160,			"numEntries":99161,	"category":	{"id":1,"name":"Contractual Services","label":"contractual-services","paymentId":null}},{"formattedAmount":"$343,079,529.00","amount":343079529.000,"numEntries":21053,"category":{"id":5,"name":"Pass Through Payments","label":"pass-through-payments","paymentId":null}},{"formattedAmount":"$193,424,035.46","amount":193424035.460,"numEntries":51822,"category":{"id":7,"name":"Supplies & Materials","label":"supplies--materials","paymentId":null}},{"formattedAmount":"$18,373,623.52","amount":18373623.520,"numEntries":292,"category":{"id":2,"name":"Infrastructure & Land","label":"infrastructure--land","paymentId":null}},{"formattedAmount":"$16,840,023.56","amount":16840023.560,"numEntries":827,"category":{"id":6,"name":"Personnel Non-payroll","label":"personnel-non-payroll","paymentId":null}}	]};

// var payees = {"summary":{"amount":1553160689.160,"numEntries":176835,"numDrilldowns":18162,"page":1,"pageSize":5,"pages":3633,"pageTitle":"Payees"},"drilldown":[{"formattedAmount":"$94,721,648.17","amount":94721648.170,"numEntries":39,"payee":{"id":43077,"name":"MORTENSON HUNT SAUNDERS","label":"mortenson-hunt-saunders","paymentId":null}},{"formattedAmount":"$87,125,136.18","amount":87125136.180,"numEntries":27,"payee":{"id":21838,"name":"DENVER EMPLOYEES RETIREMENT PLAN","label":"denver-employees-retirement-plan","paymentId":null}},{"formattedAmount":"$68,271,811.20","amount":68271811.200,"numEntries":54,"payee":{"id":32092,"name":"KAISER PERMANENTE","label":"kaiser-permanente","paymentId":null}},{"formattedAmount":"$62,312,138.97","amount":62312138.970,"numEntries":11,"payee":{"id":40314,"name":"METRO WASTEWATER RECLAMATION DISTRICT","label":"metro-wastewater-reclamation-district","paymentId":null}},{"formattedAmount":"$52,376,194.13","amount":52376194.130,"numEntries":61,"payee":{"id":32825,"name":"KIEWIT BUILDING GROUP INC","label":"kiewit-building-group-inc","paymentId":null}}]};

React.render(
	<CategorySummaries/>,
	document.getElementById('content')
);