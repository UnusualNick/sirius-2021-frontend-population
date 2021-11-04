import './App.css';
import './patch.css';

const countriesTuple = {
	"World" : {
		"barWidth": "649",
		"amount": "7,752,840,000"
	},
	"China" : {
		"barWidth": "89",
		"amount": "1,402,112,000"
	},
	"India" : {
		"barWidth": "78",
		"amount": "1,380,004,000"
	},
	"United States" : {
		"barWidth": "31",
		"amount": "329,484,000"
	},
	"Indonesia" : {
		"barWidth": "31",
		"amount": "273,523,000"
	},
	"Pakistan" : {
		"barWidth": "23",
		"amount": "220,892,000"
	},
	"Brazil" : {
		"barWidth": "19",
		"amount": "212,559,000"
	},
	"Nigeria" : {
		"barWidth": "14",
		"amount": "206,139,000"
	},
	"Bangladesh" : {
		"barWidth": "14",
		"amount": "164,689,000"
	},
	"Russian Federation" : {
		"barWidth": "11",
		"amount": "144,104,000"
	},
	"Mexico" : {
		"barWidth": "6",
		"amount": "128,932,000"
	}
};

export function getBarWidth(params) {
    return(countriesTuple[params]['barWidth'])
}

export function getAmount(params) {
    return(countriesTuple[params]['amount'])
}