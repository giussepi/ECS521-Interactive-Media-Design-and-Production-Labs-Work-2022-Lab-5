window.addEventListener('load', function() {

    var stage = new Konva.Stage({
	container: 'container',   // id of container <div>
	width: 600,
	height: 300
    });

    var layer = new Konva.Layer();

    var text = new Konva.Text({
	x: 10,
	y: 10,
	fontFamily: 'Calibri',
	fontSize: 24,
	text: '',
	fill: 'black'
    });

    function writeMessage(message) {
	text.text(message);
	layer.draw();
    }

    // Add mouseout event below



    // Add mousemove event below



    layer.add(text);
    stage.add(layer);

});
