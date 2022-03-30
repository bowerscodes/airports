class Controller {
    
    constructor(aeroplane) {
        this.aeroplane = aeroplane;

        this.initialiseBackground();
    }

    initialiseBackground() {
        $('.viewport-background').fadeTo('slow',0.15)
    }

}