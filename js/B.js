window.addEventListener('load', function() {

    function writeMessage(message) {
        text.text(message);
        layer.draw();
    }

    var text = new Konva.Text({
        x: 10,
        y: 10,
        fontFamily: 'Calibri',
        fontSize: 24,
        text: '',
        fill: 'black'
    });

    var stage = new Konva.Stage({
        container: 'container',
        width: 600,
        height: 300
    });

    var layer = new Konva.Layer();

    // Draw triangle code below



    // Draw circle code below



    layer.add(text);
    stage.add(layer);

});
