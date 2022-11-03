window.addEventListener('load', function() {

    var width = window.innerWidth;
    var height = window.innerHeight - 25;

    // first we need Konva core things: stage and layer
    var stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height
    });

    var layer = new Konva.Layer();
    stage.add(layer);

    var isPaint = false;
    var mode = 'brush';
    var lastLine;

    stage.on('mousedown touchstart', function(e) {
        isPaint = true;
        var pos = stage.getPointerPosition();

        lastLine = new Konva.Line({
            stroke: '#ab3e6d',
            strokeWidth: 5,
            globalCompositeOperation: mode === 'brush' ? 'source-over' : 'destination-out',
            points: [pos.x, pos.y]
        });

        layer.add(lastLine);
    });

    stage.on('mouseup touchend', function() {
        isPaint = false;
    });

    // and core function - drawing
    stage.on('mousemove touchmove', function(e) {
        if (!isPaint) {
            return;
        }

        // prevent scrolling on touch devices
        e.evt.preventDefault();

        const pos = stage.getPointerPosition();
        var newPoints = lastLine.points().concat([pos.x, pos.y]);
        lastLine.points(newPoints);
    });

    var select = document.getElementById('tool');

    select.addEventListener('change', function() {
        mode = this.value;
    });

    ///////////////////////////////////////////////////////////////////////////
    //                      TODO 1: Add your code below                      //
    ///////////////////////////////////////////////////////////////////////////



    ///////////////////////////////////////////////////////////////////////////
    //                      TODO 2: Add your code below                      //
    ///////////////////////////////////////////////////////////////////////////




});
