window.addEventListener('load', function() {

    let width = window.innerWidth;
    let height = window.innerHeight - 25;

    // first we need Konva core things: stage and layer
    let stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height
    });

    let layer = new Konva.Layer();
    stage.add(layer);

    let isPaint = false;
    let mode = 'brush';
    let lastLine;

    stage.on('mousedown touchstart', function(e) {
        isPaint = true;
        let pos = stage.getPointerPosition();

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
        let newPoints = lastLine.points().concat([pos.x, pos.y]);
        lastLine.points(newPoints);
    });

    let tool_select = document.getElementById('tool');

    tool_select.addEventListener('change', function() {
        mode = this.value;
    });

    let btn_inspiration = document.getElementById('inspiration-btn');
    let img_inspiration = document.getElementById('flying-bulldog');
    let stage_visibility = true;

    btn_inspiration.addEventListener('click', function(e){
	img_inspiration.classList.toggle("hide");
	if (stage_visibility){
	    stage.hide();
	    this.value = 'Enough inspiration';
	} else {
	    stage.show();
	    this.value = 'More inspiration';
	}
	stage_visibility = !stage_visibility;
    });

    ///////////////////////////////////////////////////////////////////////////
    //                      TODO 1: Add your code below                      //
    ///////////////////////////////////////////////////////////////////////////



    ///////////////////////////////////////////////////////////////////////////
    //                      TODO 2: Add your code below                      //
    ///////////////////////////////////////////////////////////////////////////



});
