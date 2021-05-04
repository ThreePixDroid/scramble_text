class Layer {

  constructor( container = document.body ) {   

    this.cnv = document.createElement( `canvas` )
    this.ctx = this.cnv.getContext( `2d` )
    container.appendChild( this.cnv )
    
    this.resize()
    addEventListener( `resize`, () => this.resize() )

  }
  resize( { cnv } = this ) {

    this.w = cnv.width  = cnv.offsetWidth  * devicePixelRatio
    this.h = cnv.height = cnv.offsetHeight * devicePixelRatio

  }
  
}