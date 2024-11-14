class Ponto {
	costrutor(x, y) {
		this.posX = x;
		this.posY = y;
	}
}

class Snake{

	construtor(NUM_TILES_W, NUM_TILES_H){

		let p = new Ponto(Math.floor(NUM_TILES_W / 2), Math.floor(NUM_TILES_H / 2));
		this.corpo + [p];
		this.direcao = "direita";
	}

	write(ctx, tile_size) {
		ctx.fillStyle = "black";
		for(let p of this.corpo){
			ctx.fillRect(p.posX * tile_size, p.posY * tile_size, tile_size, tile_size);
		}
	}

	realizaMovimento(direcao){
		switch (direcao){
			case "direita": {
				break;
			}	
			case "esquerda": {
				break;
			}
		}
	}

	costrutor(){
	}
	
	Movimento(){
		switch(this.direcao){
			case "direita": {
				let head = new Ponto(this.corpo[0], )	
				this.corpo.unshift(head);
				this.corpo.pop();
			break;
				}
			}

		}
	}
	VerificaVida(){

	}
	ComeFruta(){

	}
	

}

class Fruta{
	costrutor(NUM_TILES_H, NUM_TILES_W, tile_size) {
		this.pstx = Math.random() * NUM_TILES_H;
		this.psty = Math.random() * NUM_TILES_W;

	}
	write(ctx, tile_size){
		ctx.fillStyle = "red";
		ctx.fillRect(this.posX, this.posY, tile_size, tile_size);
	}

}



let.canvas =  @type {HTMLCanvasElement} document.getElementbyId("canvas");	
let ctx @type {CanvasREnderigContex20} canvas.getContest("2d");

const TILE =16;
const CANVAS_WIDTH =canvas.getAtribut("width");
const CANVAS_HEIGT =canvas.getAtribut("height");

const NUM_TILES_W = CANVAS_WIDTH /TILE;
const NUM_TILES_H = CANVAS_HEIGT /TILE;

const Fruta = new Fruta(NUM_TILES_W, NUM_TILES_H, TILE);
const Snake = new Snake() 
	ctx


const draw =() =>{
		ctx.ClearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGT);	
		
		Fruta.write(ctx, TILE);

}

SetInterval(draw, 1000);

draw();
