




  let fieldbend=Xrandom(0.2,1);


  // console.log(fieldbend)

  // window.$fxhashFeatures = {
  //   "Flow Field": getFieldbend(fieldbend),
  // }
  // console.log(getFieldbend(fieldbend))

  function Xrandom(x,y){
    return (y-x)*fxrand()+x;
  }


function getFieldbend(value){
  if (value<0.3) return 'Calm';
  else if (value<0.5) return 'Unsure'
  else return 'Wild'
}





function setup() {
	let width =1000
	let height = 1200
	createCanvas(width, height);
  randomSeed(int(fxrand()*100000000))
	// put setup code here
	left_x = int(width * -0.5)
	right_x = int(width * 1.5)
	top_y = int(height * -0.5)
	bottom_y = int(height * 1.5)
	resolution = int(width * 0.01)
	//	print('resolution'+ resolution)


	num_columns = 3*int((right_x - left_x) / resolution)
	num_rows = 3*int((bottom_y - top_y) / resolution)
	//	print('num_columns'+ num_columns)
	//	print('num_rows'+ num_rows)



}

function draw() {
	background(random([0,255]))
	// fill(0)
	// rect(0,0,1199,1199)
	fill(random([0,255]))
	rect(100,100,800,1000)
	//put drawing code here


  for (let k=0;k<50;k++){
  carve('yes')

  //print(k)
  }

  for (let k=0;k<random(20,21);k++){
  carve('no')

  //print(k)
  }




	noLoop()

}

function exportImage() {
    save(`void_${fxhash}.png`)
}
function keyReleased() {
    "1" == key && exportImage()
}

function carve(solid){

	// let	x = 100
	// let y = 100
	// let num_steps=100


	// initialise field
	let Array2D = (r,c) => [...Array(r)].map(x=>Array(c).fill(0));
	let m = Array2D(num_columns,num_rows);

	//print("m length "+m.length)

	gain=int(random(-3.1,3.1));
	bend=random(0.2,0.3);
	offset=random(0,num_rows)
	if (random(0.1,0.9)<fieldbend) {
		quantum=1;
		for (let column=0; column<num_columns; column++) {
			for (row=0; row<num_rows; row++) {

				angle = (quantum*(row-offset-gain*bend*column) / (num_rows*bend))/quantum * PI*gain
				// print('angle'+angle)
				m[column][row] = angle
			}
		}
	}
	else{
		quantum=random(2,3);
		for (let column=0; column<num_columns; column++) {
			for (row=0; row<num_rows; row++) {

				angle = int(quantum*((row-offset-gain*bend*column) / (num_rows*bend))/quantum) * PI*gain
				// print('angle'+angle)
				m[column][row] = angle
			}
		}
	}

	//print("angle"+m[100][100])

	let	x = 100+random(-200,800)
	let y = 100+random(-200,1000)
	let num_steps=50

	// strokeWeight(0.1)
	// dice=random(0,1)
	// if (dice<0.95){
	// 	noFill()
	// 	stroke(255)
	// }
	// else if (dice>0.999995){
	// 	fill(255)
	// 	noStroke();
	// }
	// else {
	// 	fill(0)
	// 	stroke(255)
	// }

	//vertex(100,100)
	//vertex(1100,1300)
	beginShape()
	let dice2=random(0,1)
	let shapesize=random(100,600);
	let stepsize=random(0.1,0.3);
	stroke(255)
	for (k=0;k<50+random(100,35000);k+=1+random(1,5)) {
		strokeWeight(0.04+random(0,0.2))


		x_offset = x - left_x
		y_offset = y - top_y
		if (x_offset<2800 && y_offset< 3800 && x_offset>0 && y_offset>0  ) {
			column_index = int(x_offset / resolution)
			row_index = int(y_offset / resolution)

			grid_angle = m[column_index][row_index]
			x_step = stepsize*resolution * cos(grid_angle)
			y_step = stepsize*resolution * sin(grid_angle)
			//	vertex(x, y)

			//draw shapes
			if (dice2>0.50){
				stroke(255)
				noFill()
				rect(x,y,shapesize,shapesize)
			//	vertex(x, y)
			}
			else if (dice2<0.20 && dice2>0.195-random(0,0.2)){

if (solid =='yes'){
      	stroke(0)
				fill(255)
				//	ellipse(x,y,shapesize,shapesize)

        }
        else {
          //vertex(x, y)
        }
rect(x,y,shapesize,shapesize)

			}
			else if (dice2<0.30 && dice2>0.285 -random(0,0.5)){
        if (solid=='yes'){
				stroke(255)
				//	fill(255)
				fill(0)
				//	ellipse(x,y,shapesize,shapesize)
      }else{

      }
      	rect(x,y,shapesize,random(1,1)*shapesize)
			}
			else if (dice2<0.55-random(0,0.2)){
				stroke(255)
				//				fill(0)
				noFill()

			//	vertex(x, y)


			}
			else {
				//	noFill()
				stroke(0)
				//fill(0)
				noFill()
				rect(x,y,random(1,1)*shapesize,shapesize)

				//	vertex(x, y)

			}
			//
			//pop()
			x = x + x_step+int(random(0,1))
			y = y + y_step+int(random(0,1))


		//	circle(x,y,3)
		}

		endShape()
	}

}
