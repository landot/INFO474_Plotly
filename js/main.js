'use strict';

//CHART 1 DATA (grouped bar chart)
//mean drug use for each bacteria (gram positive)
var data1 = [0.15, 5.16, 8.59]

//mean drug use for each bacteria (gram negative)
var data2 = [387.22, 1.43, 0.59]

//OR
//median drug use for each bacteria (gram positive)
var data1b = [0.005, 1.0, 0.1]

//median drug use for each bacteria (gram negative)
var data2b = [100.0,1.0,.1]


//CHART 2 DATA (bar chart)
//mean effectiveness of each drug
var data3 = [217.88, 3.07, 4.09]

//OR
//median effectiveness of each drug
var data3b = [1.0, 1.0, 0.1]

//CHART 3 DATA (grouped bar chart)
//(3 groupings of data)
var groupings = ['0-.99', '1-9.99', '10+']
//Penicilin 
var data4 = [6,4,6]
//Streptomycin
var data5 = [7,6,3]
//Neomycin
var data6 = [10,3,3]

//CHART 4 DATA
//box plot of average of drug's effect on bacteria grouped by gram staining
//gram positive
var data7 = [.01,7.00,.04,.02,.7,8.00,16.67]
//gram negative
var data8 = [290.87,1.01,33.5,284.07,269,1.07,284.13,.47,3.63]

//drug names
var drugNames = ['Penicilin', 'Streptomycin', 'Neomycin']


var trace1 = {
    x: groupings,
    y: [data4[0], data4[1], data4[2]],
    name: drugNames[0],
    type: 'bar'
};

var trace2 = {
    x: groupings,
    y: [data5[0], data5[1], data5[2]],
    name: drugNames[1],
    type: 'bar'
};

var trace3 = {
    x: groupings,
    y: [data6[0], data6[1], data6[2]],
    name: drugNames[2],
    type: 'bar'
};

var data = [trace1, trace2, trace3]

var layout = {
    barmode: 'group',
    title: 'General Effectiveness of Antibiotics on Bacteria',
    xaxis: {
        title: 'Minimum inhibitory concentration (MIC) of drug needed to prevent bacterial growth'    
    },
    yaxis: {
        title: 'Types of bacteria'
    }
};
var trace4 = {
    y: data7,
    type: 'box',
    marker: {color: 'blue'},
    name: 'Positive Gram Staining'
};

var trace5 = {
    y: data8,  
    type: 'box',
    marker: {color: 'red'},
    name: 'Negatives Gram Staining',
};

var boxplot_Layout = {
    autosize: false,
    width: 350,
    height: 500,
    yaxis: {
    title: 'Minimum inhibitory concentration (MIC)',
    zeroline: false
  }
}

var boxplot1 = [trace4]
var boxplot2 = [trace5]

Plotly.newPlot('graph1', data, layout);
Plotly.newPlot('graph2', boxplot1, boxplot_Layout);
Plotly.newPlot('graph3', boxplot2, boxplot_Layout);


