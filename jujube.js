const nodeLists = document.querySelectorAll('[chart]');
for (let node of nodeLists) {
  let chartId = node.getAttribute('id');
  let chartType = node.getAttribute('chart');
  let chartTitle = node.getAttribute('title');
  let xLabels = node.getAttribute('x-labels').split(',').map(x => x.trim().replaceAll("'", ''));
  let data = node.getAttribute('data').split(',').map(x => x.trim());
  let chart = echarts.init(document.getElementById(chartId));
  let options = {
    title: {text: chartTitle, left: 'center'},
    tooltip: {},
    legend: {},
    xAxis: {data: xLabels},
    yAxis: {},
    series: [{type: chartType, data: data}]
  };
  chart.setOption(options);
}