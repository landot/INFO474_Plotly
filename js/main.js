'use strict';

var bactNames = 
['Aerobacter aerogenes',
 'Brucella abortus',
 'Brucella anthracis',
 'Diplococcus pneumoniae',
 'Escherichia coli',
 'Klebsiella pneumoniae',
 'Mycobacterium tuberculosis',
 'Proteus vulgaris',
 'Pseudomonas aeruginosa ',
 'Salmonella (Eberthella) typhosa ',
 'Salmonella schottmuelleri ',
 'Staphylococcus albus ',
 'Staphylococcus aureus ',
 'Streptococcus fecalis ',
 'Streptococcus hemolyticus ',
 'Streptococcus viridans']
var bactPen = 
    [870.0,
    1.0,
    0.001,
    0.0050000000000000001,
    100.0,
    850.0,
    800.0,
    3.0,
    850.0,
    1.0,
    10.0,
    0.0069999999999999993,
    0.029999999999999999,
    1.0,
    0.001,
    0.0050000000000000001]
var bactStre = [1.0,
 2.0,
 0.01,
 11.0,
 0.40000000000000002,
 1.2,
 5.0,
 0.10000000000000001,
 2.0,
 0.40000000000000002,
 0.80000000000000004,
 0.10000000000000001,
 0.029999999999999999,
 1.0,
 14.0,
 10.0]
var bactNeo = [1.6000000000000001,
 0.02,
 0.0069999999999999993,
 10.0,
 0.10000000000000001,
 1.0,
 2.0,
 0.10000000000000001,
 0.40000000000000002,
 0.0080000000000000002,
 0.089999999999999997,
 0.001,
 0.001,
 0.10000000000000001,
 10.0,
 40.0]
var bactGram = [
    'negative',
 'negative',
 'positive',
 'positive',
 'negative',
 'negative',
 'negative',
 'negative',
 'negative',
 'negative',
 'negative',
 'positive',
 'positive',
 'positive',
 'positive',
 'positive'
]

console.log(bactNeo)

var trace1 = {
    x: [1, 2, 3, 4],
    y: bactNames,
    type: 'heatmap',
    showscale: true
};

var trace2 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'lines',
    type: 'scatter'
};

var trace3 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: 'lines+markers',
    type: 'scatter'
};

var data = [trace1, trace2, trace3];

var layout = {
    title: 'Line Plot',
    height: window.height,
    width: window.width
};

Plotly.newPlot('graph', data, layout);