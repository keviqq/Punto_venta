    google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var lunesdinero = JSON.parse(localStorage.getItem("totalsem"));
      var data = google.visualization.arrayToDataTable([
        
        ['Element', 'Dinero generado', { role: 'style' }],
        ['Lunes', lunesdinero, '#b87333'],        
        ['Martes', 10.49, 'silver'],  
        ['Miercoles', 19.30, 'gold'],
        ['Jueves', 21.45, 'color: #e5e4e2' ],
        ['Viernes', 10.49, 'silver'],
        ['Sabado', 19.30, 'gold'],
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Ventas",
        width: 400,
        height: 200,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
      chart.draw(view, options);
  }    