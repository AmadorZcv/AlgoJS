
let values = [];
size = 200
for (let index = 0; index < size; index++) {
    values.push({ y: Math.random() * (100 - 0) + 0, label: `${index}` })
}
var updateInterval = 1000;
var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title: {
        text: "Numeros"
    },
    axisY: {
        title: "Reserves(MMbbl)"
    },
    data: [{
        type: "column",
        showInLegend: true,
        legendMarkerColor: "grey",
        legendText: "MMbbl = one million barrels",
        dataPoints: values
    }]
});
var updateInterval = 1000;

var updateChart = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Numeros"
        },
        axisY: {
            title: "Reserves(MMbbl)"
        },
        data: [{
            type: "column",
            showInLegend: true,
            legendMarkerColor: "grey",
            legendText: "MMbbl = one million barrels",
            dataPoints: values
        }]
    });
    chart.render();
};
//setInterval(function () { updateChart() }, updateInterval);
function onPress() {
    values = [];
    for (let index = 0; index < size; index++) {
        values.push({ y: Math.random() * (100 - 0) + 0, label: `${index}` })
    }
    values = quickSort(values, 0, size - 1);
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Numeros"
        },
        axisY: {
            title: "Reserves(MMbbl)"
        },
        data: [{
            type: "column",
            showInLegend: true,
            legendMarkerColor: "grey",
            legendText: "MMbbl = one million barrels",
            dataPoints: values
        }]
    });
    chart.render();
}
function quickSort(arr, left, right) {
    var len = arr.length,
        pivot,
        partitionIndex;

    if (left < right) {
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);

        //sort left and right
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}
function partition(arr, pivot, left, right) {
    var pivotValue = arr[pivot].y,
        partitionIndex = left;

    for (var i = left; i < right; i++) {
        if (arr[i].y < pivotValue) {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}
function swap(arr, i, j) {
    var temp = arr[i].y; arr[i].y = arr[j].y;
    arr[j].y = temp;
    values = arr;
    console.log("Swap")
}