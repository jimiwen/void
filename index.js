




  let fieldbend=Xrandom(0.2,1);


  console.log(fieldbend)

  let centerpoint=[Xrandom(300,800),Xrandom(500,700)];
  let sizeratio=[Xrandom(100,200),200];
  let depth=[Xrandom(30,100),Xrandom(40,130)]
  let right_vanish= Xrandom(0,100);
   let lower_ceiling=Xrandom(150,150);
   let whitepaint=-Xrandom(40,80);
   let topfaceangle= Xrandom(50,150);
let leftceilingangle= Xrandom(50,150);
let colorpicker= Xrandom(0,1);
let rotateStyle=Xrandom(0,1);


console.log(rotateStyle)
console.log(getColorStyle(colorpicker))
console.log(getRotateStyle(rotateStyle))
console.log(getPerspectiveNearFar(centerpoint[0],centerpoint[1],rotateStyle))

  function Xrandom(x,y){
    return (y-x)*fxrand()+x;
  }

  window.$fxhashFeatures = {
    "Color Palette": getColorStyle(colorpicker),
      "Ceremony Act": getPerspectiveNearFar(centerpoint[0],centerpoint[1],rotateStyle),
    "Right Side Up?": getRotateStyle(rotateStyle),
  }

function getPerspectiveNearFar(x,y,rotateStyle){
  if ( rotateStyle<0.8 &&  x <600 && y<600) return "Entering the tea house"
  else if (rotateStyle<0.8 && x<500) return "Sitting and contemplating"
  else if ( rotateStyle<0.8 &&  x>600) return "Observing the making of tea"
  else if (rotateStyle<0.8) return "Appreciation of tea"
  else return "Not Applicable"
}

function getColorStyle(value){
  if (value<0.15) return 'Day';
  else if (value<0.25) return 'Night'
    else if (value<0.33) return 'Anxious Purple'
      else if (value<0.40) return 'Bling'
        else if (value<0.65) return 'Pastel'
          else if (value<0.85) return 'Negative'
  else return 'Dark Riyku'
}

function getRotateStyle(value){
  if (value<0.8) return 'Tea Time';
  else if (value<0.87) return 'Good Night'
    else if (value<0.94) return 'Bath Time'
  else return 'Upside-down'
}

if (colorpicker < 0.15 ){
  // gucci
   colors = {
    main: "#d9d2ce",
    bg: "#120b17",
    roof:'#b03737',
    body2:'#234031'
  };
} else if (colorpicker< 0.25 ){
//  dark gucci
   colors = {
    main: "#0f0f12",
    bg: "#0f0f12",
    roof:'#b03737',
    body2:'#234031'
  };
} else if (colorpicker< 0.33 ){
//  lakers inverted
   colors = {
    main: "#f5c207",
    bg: "#140621",
    roof:'#140621',
    body2:'#140621'
  };
} else if (colorpicker < 0.40){
  //gold
   colors = {
    main: "#b03737",
    bg: "#09060d",
    roof:'#ffd608',
    body2:'#f5c207'
  };
}else if (colorpicker < 0.65){
  //pastel blue
   colors = {
    main: "#061521",
    bg: "#061521",
    roof:'#96949c',
    body2:'#524c57'
  };
}else if (colorpicker < 0.85){
  //film negative
   colors = {
    bg: "#2e2e2e",
    main: "#2e2e2e",
    roof:'#6e6e6e',
    body2:'#cccccc'
  };
}else{
  //dark rikyu
   colors = {
    bg: "#2e2e2e",
    main: "#2e2e2e",
    roof:'#949079',
    body2:'#5e5246'
  };
}


//
//
//  colors = {
//   main: "#d9d2ce",
//   bg: "#120b17",
//   roof:'#b03737',
//   body2:'#234031'
// };











const size = 1200;
let rc;

function setup() {
  randomSeed(int(fxrand()*1000000));
  const canvas = createCanvas(1200, 1200);
  rc = rough.canvas(canvas.canvas);
  background(colors.main);
  noLoop();
  angleMode(DEGREES)


}

function draw() {

  if (rotateStyle<0.8){
    drawTokonoma()
    drawTokonoma()
    drawTokonoma()
}else if (rotateStyle<0.87){
  push()
  translate(1200,0)
  rotate(90)
  drawTokonoma()
  drawTokonoma()
  drawTokonoma()
  pop()
} else if (rotateStyle<0.94) {
  push()
  translate(0,1200)
  rotate(270)
  drawTokonoma()
  drawTokonoma()
  drawTokonoma()
  pop()
}
 else{
   push()
   translate(1200,1200)
   rotate(180)
   drawTokonoma()
   drawTokonoma()
   drawTokonoma()
   pop()
}
}

function exportImage() {
    save(`TaianTeaHouse_${fxhash}.png`)
}
function keyReleased() {
    "1" == key && exportImage()
}

function drawTokonoma(){
let toko_floor_raised=10;

  let centerpoints=[

    [centerpoint[0]-sizeratio[0],centerpoint[1]-sizeratio[1]],
    [centerpoint[0]+sizeratio[0],centerpoint[1]-sizeratio[1]],
    [centerpoint[0]+sizeratio[0],centerpoint[1]+sizeratio[1]],
    [centerpoint[0]-sizeratio[0],centerpoint[1]+sizeratio[1]],
  ];

  rc.polygon(centerpoints, {
    fill: colors.roof,
    fillStyle: random(['dashed']),
    fillWeight: random(1,2),
    hachureAngle: random(40,153),
    stroke: "transparent",
  });




  let lowerconcave=[
    [centerpoint[0]+sizeratio[0],centerpoint[1]+sizeratio[1]],
    [centerpoint[0]-sizeratio[0],centerpoint[1]+sizeratio[1]],
      [centerpoint[0]-sizeratio[0]-depth[0],centerpoint[1]+sizeratio[1]+depth[1]-toko_floor_raised],
        [centerpoint[0]+sizeratio[0]+depth[0],centerpoint[1]+sizeratio[1]+depth[1]-toko_floor_raised],
  ];

let shadowdepth=depth[0]*1;

  let lowerconcave_shadows=[
[centerpoint[0]-sizeratio[0]+shadowdepth,centerpoint[1]+sizeratio[1]],
//[centerpoint[0]-sizeratio[0]+shadowdepth,centerpoint[1]-sizeratio[1]],
  [centerpoint[0]-sizeratio[0],centerpoint[1]-sizeratio[1]],
    [centerpoint[0]-sizeratio[0],centerpoint[1]+sizeratio[1]],
      [centerpoint[0]-sizeratio[0]-depth[0],centerpoint[1]+sizeratio[1]+depth[1]-toko_floor_raised],
        [centerpoint[0]+sizeratio[0]+depth[0],centerpoint[1]+sizeratio[1]+depth[1]-toko_floor_raised],
  ];

  let leftconcave=[
      [centerpoint[0]-sizeratio[0],centerpoint[1]-sizeratio[1]],
  [centerpoint[0]-sizeratio[0],centerpoint[1]+sizeratio[1]],
      [centerpoint[0]-sizeratio[0]-depth[0],centerpoint[1]+sizeratio[1]+depth[1]],
        [centerpoint[0]-sizeratio[0]-depth[0],centerpoint[1]-sizeratio[1]-depth[1]],
  ];

  let rightconcave=[
      [centerpoint[0]+sizeratio[0],centerpoint[1]-sizeratio[1]],
  [centerpoint[0]+sizeratio[0],centerpoint[1]+sizeratio[1]],
      [centerpoint[0]+sizeratio[0]+depth[0],centerpoint[1]+sizeratio[1]+depth[1]],
        [centerpoint[0]+sizeratio[0]+depth[0],centerpoint[1]-sizeratio[1]-depth[1]],
  ];


  let upperconcave=[
    [centerpoint[0]-sizeratio[0],centerpoint[1]-sizeratio[1]],
    [centerpoint[0]+sizeratio[0],centerpoint[1]-sizeratio[1]],
      [centerpoint[0]+sizeratio[0]+depth[0],centerpoint[1]-sizeratio[1]-depth[1]],
        [centerpoint[0]-sizeratio[0]-depth[0],centerpoint[1]-sizeratio[1]-depth[1]],
  ];

  let front_enclosure=[
    [centerpoint[0]-sizeratio[0]-depth[0]*1.1,centerpoint[1]-sizeratio[1]],
    [centerpoint[0]+sizeratio[0]+depth[0]*1.1,centerpoint[1]-sizeratio[1]],
      [centerpoint[0]+sizeratio[0]+depth[0]*1.1,centerpoint[1]-sizeratio[1]-depth[1]*1.1],
        [centerpoint[0]-sizeratio[0]-depth[0]*1.1,centerpoint[1]-sizeratio[1]-depth[1]*1.1],
  ];

  let tokobashiraR_inside=[
    [centerpoint[0]+sizeratio[0]+depth[0],centerpoint[1]+sizeratio[1]+depth[1]],
      [centerpoint[0]+sizeratio[0]+depth[0],centerpoint[1]-sizeratio[1]-depth[1]],
        [centerpoint[0]+sizeratio[0]+depth[0]*1.1,centerpoint[1]-sizeratio[1]-depth[1]*1.1],
        [centerpoint[0]+sizeratio[0]+depth[0]*1.1,centerpoint[1]+sizeratio[1]+depth[1]*1.1],
  ];

  let tokobashiraR_front=[
    [centerpoint[0]+sizeratio[0]+depth[0]*1.1,centerpoint[1]-sizeratio[1]-depth[1]*1.1],
    [centerpoint[0]+sizeratio[0]+depth[0]*1.1,centerpoint[1]+sizeratio[1]+depth[1]*1.3],
    [centerpoint[0]+sizeratio[0]+depth[0]*1.3,centerpoint[1]+sizeratio[1]+depth[1]*1.3],
    [centerpoint[0]+sizeratio[0]+depth[0]*1.3,centerpoint[1]-sizeratio[1]-depth[1]*1.1],
  ];

  let tokobashiraL_inside=[
    [centerpoint[0]-sizeratio[0]-depth[0]*0.95,centerpoint[1]+sizeratio[1]+depth[1]*0.95],
      [centerpoint[0]-sizeratio[0]-depth[0]*0.95,centerpoint[1]-sizeratio[1]-depth[1]*0.95],
        [centerpoint[0]-sizeratio[0]-depth[0]*1.1,centerpoint[1]-sizeratio[1]-depth[1]*1.1],
        [centerpoint[0]-sizeratio[0]-depth[0]*1.1,centerpoint[1]+sizeratio[1]+depth[1]*1.1],
  ];

  let tokobashiraL_front=[
    [centerpoint[0]-sizeratio[0]-depth[0]*1.1,centerpoint[1]-sizeratio[1]-depth[1]*1.1],
    [centerpoint[0]-sizeratio[0]-depth[0]*1.1,centerpoint[1]+sizeratio[1]+depth[1]*1.3],
    [centerpoint[0]-sizeratio[0]-depth[0]*1.35,centerpoint[1]+sizeratio[1]+depth[1]*1.3],
    [centerpoint[0]-sizeratio[0]-depth[0]*1.35,centerpoint[1]-sizeratio[1]-depth[1]*1.1],
  ];

  let concavebeam_front=[
      [centerpoint[0]+sizeratio[0]+depth[0]*1.3,centerpoint[1]-sizeratio[1]-depth[1]*1.1],
        [centerpoint[0]+sizeratio[0]+depth[0]*1.3,centerpoint[1]-sizeratio[1]-depth[1]*1],
        [0,centerpoint[1]-sizeratio[1]-depth[1]*1],
        [0,centerpoint[1]-sizeratio[1]-depth[1]*1.1],
  ];

  let toknomabottom_beam_inside=[
      [centerpoint[0]-sizeratio[0]-depth[0],centerpoint[1]+sizeratio[1]+depth[1]-toko_floor_raised],
        [centerpoint[0]+sizeratio[0]+depth[0],centerpoint[1]+sizeratio[1]+depth[1]-toko_floor_raised],
      [centerpoint[0]+sizeratio[0]+depth[0]*1.1,centerpoint[1]+sizeratio[1]+depth[1]*1.1-toko_floor_raised],
              [centerpoint[0]-sizeratio[0]-depth[0]*1.1,centerpoint[1]+sizeratio[1]+depth[1]*1.1-toko_floor_raised],
  ];


  let toknomabottom_beam_front=[

      [centerpoint[0]+sizeratio[0]+depth[0]*1.1,centerpoint[1]+sizeratio[1]+depth[1]*1.1-toko_floor_raised],
              [centerpoint[0]-sizeratio[0]-depth[0]*1.1,centerpoint[1]+sizeratio[1]+depth[1]*1.1-toko_floor_raised],
              [centerpoint[0]-sizeratio[0]-depth[0]*1.1,centerpoint[1]+sizeratio[1]+depth[1]*1.3],
                [centerpoint[0]+sizeratio[0]+depth[0]*1.1,centerpoint[1]+sizeratio[1]+depth[1]*1.3],
  ];

  let floor_height=[
      [centerpoint[0]-sizeratio[0]-depth[0]*1.1,centerpoint[1]+sizeratio[1]+depth[1]*1.3],
      [centerpoint[0]-sizeratio[0]-depth[0]*1.1,centerpoint[1]+sizeratio[1]+depth[1]*1.25],
      [0,centerpoint[1]+sizeratio[1]+depth[1]*1.25],
        [0,centerpoint[1]+sizeratio[1]+depth[1]*1.3],
  ];



  let left_wall=[
    [0,centerpoint[1]-sizeratio[1]-depth[1]*1.1],
      [0,centerpoint[1]+sizeratio[1]+depth[1]*1.25+whitepaint],
      [centerpoint[0]-sizeratio[0]-depth[0]*1.35,centerpoint[1]+sizeratio[1]+depth[1]*1.25+whitepaint],
      [centerpoint[0]-sizeratio[0]-depth[0]*1.35,centerpoint[1]-sizeratio[1]-depth[1]*1.1]
  ];


  let right_wall=[
      [centerpoint[0]+sizeratio[0]+depth[0]*1.3,centerpoint[1]+sizeratio[1]+depth[1]*1.3],
          [centerpoint[0]+sizeratio[0]+depth[0]+depth[0],1200],
      [1200,1200],
        [1200,right_vanish+lower_ceiling],
          [centerpoint[0]+sizeratio[0]+depth[0]*1.3,centerpoint[1]-sizeratio[1]-depth[1]*1.1]
  ];

  let right_window=[
    [centerpoint[0]+sizeratio[0]+depth[0]*1.5,centerpoint[1]+sizeratio[1]+depth[1]*1.3-200],
        [centerpoint[0]+sizeratio[0]+depth[0]*(3.5),centerpoint[1]+sizeratio[1]+depth[1]*2-200],
        [centerpoint[0]+sizeratio[0]+depth[0]*(3.5),centerpoint[1]-sizeratio[1]-depth[1]*1.5+300],
        [centerpoint[0]+sizeratio[0]+depth[0]*1.5,centerpoint[1]-sizeratio[1]-depth[1]*1.3+300]
  ];

  let right_window_countor=[
    [centerpoint[0]+sizeratio[0]+depth[0]*1.3,centerpoint[1]+sizeratio[1]+depth[1]*1.3-200],
        [centerpoint[0]+sizeratio[0]+depth[0]*(3.5),centerpoint[1]+sizeratio[1]+depth[1]*2-200],
          [centerpoint[0]+sizeratio[0]+depth[0]*(4),centerpoint[1]+sizeratio[1]+depth[1]*2-180],
              [centerpoint[0]+sizeratio[0]+depth[0]*(4),centerpoint[1]-sizeratio[1]-depth[1]*1.1],
                [centerpoint[0]+sizeratio[0]+depth[0]*(4),centerpoint[1]+sizeratio[1]+depth[1]*2-100],
                  [centerpoint[0]+sizeratio[0]+depth[0]*(14),centerpoint[1]+sizeratio[1]+depth[1]*4],
                    [centerpoint[0]+sizeratio[0]+depth[0]*(4),centerpoint[1]+sizeratio[1]+depth[1]*2-100],
                      [centerpoint[0]+sizeratio[0]+depth[0]*(4),centerpoint[1]-sizeratio[1]*0.4],
                    [centerpoint[0]+sizeratio[0]+depth[0]*(14),centerpoint[1]-sizeratio[1]-depth[1]*0.3],
                      [centerpoint[0]+sizeratio[0]+depth[0]*(4),centerpoint[1]-sizeratio[1]*0.4],
                            [centerpoint[0]+sizeratio[0]+depth[0]*(4),centerpoint[1]+sizeratio[1]+depth[1]*2-120],
  ];


  let right_window2=[
    [centerpoint[0]+sizeratio[0]+depth[0]*(6),centerpoint[1]-sizeratio[1]*0.6],
  [centerpoint[0]+sizeratio[0]+depth[0]*(14),centerpoint[1]-sizeratio[1]-depth[1]*0.3],
    [centerpoint[0]+sizeratio[0]+depth[0]*(14),centerpoint[1]+sizeratio[1]+depth[1]*4],
    [centerpoint[0]+sizeratio[0]+depth[0]*(6),centerpoint[1]+sizeratio[1]+depth[1]*2],
  ];



  let right_mat=[
      [centerpoint[0]+sizeratio[0]+depth[0]*1.3,centerpoint[1]+sizeratio[1]+depth[1]*1.3],
          [centerpoint[0]+sizeratio[0]+depth[0]+depth[0]*3,1200],
          [centerpoint[0]-sizeratio[0]-depth[0]*1.6,1200],
          [centerpoint[0]-sizeratio[0]-depth[0]*0.4,centerpoint[1]+sizeratio[1]+depth[1]*1.3],
  ];



    let left_mat=[
        [0,centerpoint[1]+sizeratio[1]+depth[1]*1.3],
            [0,1200],
            [centerpoint[0]-sizeratio[0]-depth[0]*1.6,1200],
            [centerpoint[0]-sizeratio[0]-depth[0]*0.4,centerpoint[1]+sizeratio[1]+depth[1]*1.3],
    ];

    let mat_shadows=[
        [0,centerpoint[1]+sizeratio[1]+depth[1]*1.3],
            [0,1200],
              [1200,1200-random(10,30)],
                   [centerpoint[0]+sizeratio[0]+depth[0]*(6),centerpoint[1]+sizeratio[1]+depth[1]*2],
              [centerpoint[0]+sizeratio[0]+depth[0]*1.3,centerpoint[1]+sizeratio[1]+depth[1]*1.3-random(40,80)],

            [centerpoint[0]+sizeratio[0]+depth[0]*1.3,centerpoint[1]+sizeratio[1]+depth[1]*1.3],

    ];

    let mat_shadows2=[
      //  [0,centerpoint[1]+sizeratio[1]+depth[1]*4],
            [0,1200],
              [1200,1200],
                [centerpoint[0]+sizeratio[0]+depth[0]*(14),centerpoint[1]+sizeratio[1]+depth[1]*4],
             [centerpoint[0]+sizeratio[0]+depth[0]*(6),centerpoint[1]+sizeratio[1]+depth[1]*2],
             [0,centerpoint[1]+sizeratio[1]+depth[1]*4],

    ];



    let pit=[
        [0,centerpoint[1]+sizeratio[1]+depth[1]*1.3],
        [0,centerpoint[1]+sizeratio[1]+depth[1]*1.3+100],
        [centerpoint[0]-sizeratio[0]-depth[0]*4.6,centerpoint[1]+sizeratio[1]+depth[1]*1.3+100],
          [centerpoint[0]-sizeratio[0]-depth[0]*3.6,centerpoint[1]+sizeratio[1]+depth[1]*1.3],

    ]


    let left_ceiling=[
        [0,0],
          [centerpoint[0]-sizeratio[0]-depth[0]*2.6,right_vanish+lower_ceiling],
            [centerpoint[0]-sizeratio[0]-depth[0]*1.1,centerpoint[1]-sizeratio[1]-depth[1]*1.1],
            [0,centerpoint[1]-sizeratio[1]-depth[1]*1.1],
    ];

    let left_side_ceiling=[
        [0,0],
            [centerpoint[0]-sizeratio[0]-depth[0]*2.6,0],
          [centerpoint[0]-sizeratio[0]-depth[0]*2.6,right_vanish+lower_ceiling],
    ];



    let right_ceiling=[
      [centerpoint[0]-sizeratio[0]-depth[0]*2.6,right_vanish+lower_ceiling],
      [centerpoint[0]-sizeratio[0]-depth[0]*1.1,centerpoint[1]-sizeratio[1]-depth[1]*1.1],
        [centerpoint[0]+sizeratio[0]+depth[0]*1.3,centerpoint[1]-sizeratio[1]-depth[1]*1.1],
      [1200,right_vanish+lower_ceiling],

    ];


    let right_ceiling_shadows=[
        [1200-random(0,350),right_vanish+lower_ceiling],
      [centerpoint[0]-sizeratio[0]-depth[0]*1.1,centerpoint[1]-sizeratio[1]-depth[1]*1.1],
        [centerpoint[0]+sizeratio[0]+depth[0]*1.3,centerpoint[1]-sizeratio[1]-depth[1]*1.1],
    ];


    let left_ceiling_shadows=[
        [0,right_vanish+lower_ceiling],
      [centerpoint[0]-sizeratio[0]-depth[0]*1.1,centerpoint[1]-sizeratio[1]-depth[1]*1.1],
        [1200-random(0,350),right_vanish+lower_ceiling],
    ];

    let top_face=[
      [centerpoint[0]-sizeratio[0]-depth[0]*2.6,right_vanish+lower_ceiling],
      [1200,right_vanish+lower_ceiling],
  [centerpoint[0]-sizeratio[0]-depth[0]*2.6,0],
    ];

    let top_ceiling=[
      [1200,right_vanish+lower_ceiling],
      [1200,0],
  [centerpoint[0]-sizeratio[0]-depth[0]*2.6,0],
    ];

    let top_ceiling2=[
      [1200,right_vanish+lower_ceiling/random(1,3)],
      [1200,right_vanish+lower_ceiling],
  [centerpoint[0]-sizeratio[0]-depth[0]*2.6,0],
    ];


  rc.polygon(upperconcave, {
    fill: colors.roof,
    fillStyle: random(['dashed']),
    fillWeight: random(1,2),
    hachureAngle: random(40,153),
    stroke: "transparent",
  });



  rc.polygon(lowerconcave, {
    fill: colors.body2,
    fillStyle: random(['hachure']),

    hachureAngle: random(90,90),
    stroke: "transparent",
    bowing: 1, stroke: colors.body2, strokeWidth: 1,
      fillWeight: random(0.3,0.8),
  });

  rc.polygon(lowerconcave, {
    fill: colors.body2,
    fillStyle: random(['hachure']),

    hachureAngle: random(180,190),
    stroke: "transparent",
    bowing: 1, stroke: colors.body2, strokeWidth: 1,
      fillWeight: random(0.3,0.8),
  });

  rc.polygon(lowerconcave, {
    fill: colors.body2,
    fillStyle: random(['hachure']),

    hachureAngle: random(170,180),
    stroke: "solid",
    bowing: 2, stroke: colors.body2, strokeWidth: 1,
      fillWeight: random(0.3,0.8),
  });

  rc.polygon(lowerconcave_shadows, {
    fill: colors.main,
    fillStyle: random(['hachure']),
    hachureAngle: random(100,180),
    stroke: "transparent",
      fillWeight: random(0.1,0.3),
  });

  rc.polygon(leftconcave, {
    fill: random([colors.roof,colors.main]),
    fillStyle: random(['dashed']),
    fillWeight: random(1,2),
    hachureAngle: random(40,153),
    stroke: "transparent",
  });
  rc.polygon(rightconcave, {
    fill: random([colors.roof,colors.roof]),
    fillStyle: random(['dashed']),
    fillWeight: random(1,2),
    hachureAngle: random(40,153),
    stroke: "transparent",
  });

  rc.polygon(tokobashiraR_inside, {
    fill: colors.body2,
    fillStyle: random(['hachure']),
    fillWeight: random(1,2),
    hachureAngle: random(40,53),
    stroke: "solid",
    bowing: 2, stroke: colors.body2, strokeWidth: 1,
  });

  rc.polygon(tokobashiraR_front, {
    fill: colors.body2,
    fillStyle: random(['hachure']),
    fillWeight: random(1,2),
    hachureAngle: random(90,93),
    stroke: "solid",
    bowing: 6, stroke: colors.body2, strokeWidth: 1,
  });

  rc.polygon(tokobashiraL_inside, {
    fill: colors.body2,
    fillStyle: random(['hachure']),
    fillWeight: random(1,2),
    hachureAngle: random(40,53),
    stroke: "solid",
    bowing: 2, stroke: colors.body2, strokeWidth: 1,
  });

  rc.polygon(tokobashiraL_front, {
    fill: colors.body2,
    fillStyle: random(['hachure']),
    fillWeight: random(1,2),
    hachureAngle: random(90,93),
    stroke: "solid",
    bowing: 6, stroke: colors.body2, strokeWidth: 1,
  });

  rc.polygon(concavebeam_front, {
    fill: colors.body2,
    fillStyle: random(['hachure']),
    fillWeight: random(0.5,2),
    hachureAngle: random(90,90),
    stroke: "transparent",
  });

  rc.polygon(toknomabottom_beam_inside, {
    fill: colors.body2,
    fillStyle: random(['dash']),
    fillWeight: random(1,2),
    hachureAngle: random(88,90),
    stroke: "transparent",
  });

  rc.polygon(toknomabottom_beam_front, {
    fill: colors.body2,
    fillStyle: random(['hachure']),
    fillWeight: random(1,2),
    hachureAngle: random(190,190),
    stroke: "transparent",
  });

  rc.polygon(left_wall, {
    fill: colors.main,
    fillStyle: random(['dash']),
    fillWeight: random(0.5,1),
    hachureAngle: random(180,180),
    stroke: "solid",
    bowing: 3, stroke: colors.body2, strokeWidth: 1,
  });

  rc.polygon(left_wall, {
    fill: colors.roof,
    fillStyle: random(['hachure']),
    fillWeight: random(0.5,1),
    hachureAngle: random(90,90),
    stroke: "transparent",
  });

  rc.polygon(left_wall, {
    fill: colors.roof,
    fillStyle: random(['hachure']),
    fillWeight: random(0.2,0.5),
    hachureAngle: random(180,180),
    stroke: "transparent",
  });

  rc.polygon(floor_height, {
    fill: colors.body2,
    fillStyle: random(['hachure']),
    fillWeight: random(1,2),
    hachureAngle: random(90,90),
    stroke: "transparent",
  });

  rc.polygon(right_wall, {
    fill: colors.roof,
    fillStyle: random(['hachure']),
    fillWeight: random(0.2,0.5),
    hachureAngle: random(180,180),
    stroke: "transparent",
  });

  rc.polygon(right_wall, {
    fill: colors.roof,
    fillStyle: random(['hachure']),
    fillWeight: random(0.2,0.5),
    hachureAngle: random(80,100),
    stroke: "transparent",
  });

  rc.polygon(right_mat, {
    fill: colors.roof,
    fillStyle: random(['dashed']),
    fillWeight: random(0.5,1.5),
    hachureAngle: random(90,90),
    stroke: "solid",
      bowing: 10, stroke: colors.body2, strokeWidth: 2,
  });


  rc.polygon(right_mat, {
    fill: colors.roof,
    fillStyle: random(['dashed']),
    fillWeight: random(0.5,1.5),
    hachureAngle: random(90,90),
    stroke: "solid",
      bowing: 10, stroke: colors.body2, strokeWidth: 1,
  });


  rc.polygon(left_mat, {
    fill: colors.roof,
    fillStyle: random(['dashed']),
    fillWeight: random(0.5,1.5),
    hachureAngle: random(180,180),
    stroke: "solid",
      bowing: 10, stroke: colors.body2, strokeWidth: 2,
  });


  rc.polygon(left_mat, {
    fill: colors.roof,
    fillStyle: random(['dashed']),
    fillWeight: random(0.5,1.5),
    hachureAngle: random(180,180),
    stroke: "solid",
      bowing: 10, stroke: colors.body2, strokeWidth: 1,
  });

  rc.polygon(mat_shadows, {
    fill: colors.roof,
    fillStyle: random(['hachure']),
    fillWeight: random(0.2,0.4),
    hachureAngle: random(180,180),
    stroke: "transparent",
    //  bowing: 1, stroke: colors.body2, strokeWidth: 1,
  });


  rc.polygon(mat_shadows2, {
    fill: colors.roof,
    fillStyle: random(['hachure']),
    fillWeight: random(0.2,0.4),
    hachureAngle: random(80,80),
    stroke: "transparent",
    //  bowing: 1, stroke: colors.body2, strokeWidth: 1,
  });


  rc.polygon(left_ceiling, {
    fill: colors.body2,
    fillStyle: random(['hachure']),
    fillWeight: random(0.5,1.5),
    hachureAngle: random(190,190),
    stroke: "solid",
      bowing: 10, stroke: colors.body2, strokeWidth: 1,
  });

  rc.polygon(left_ceiling, {
    fill: colors.body2,
    fillStyle: random(['hachure']),
    fillWeight: random(0.5,0.5),
    hachureAngle: random(00,100),
    stroke: "solid",
      bowing: 1, stroke: colors.body2, strokeWidth: 1,
  });

  rc.polygon(left_side_ceiling, {
    fill: colors.roof,
    fillStyle: random(['dashed']),
    fillWeight: random(0.5,1.5),
    hachureAngle: random(190,190),
    stroke: "solid",
      bowing: 1, stroke: colors.body2, strokeWidth: 2,
  });

  rc.polygon(left_side_ceiling, {
    fill: colors.roof,
    fillStyle: random(['dashed']),
    fillWeight: random(0.5,1.5),
    hachureAngle:leftceilingangle,
    stroke: "transparent",
  });

  rc.polygon(right_ceiling, {
    fill: colors.body2,
    fillStyle: random(['hachure']),
    fillWeight: random(0.5,1.5),
    hachureAngle: random(90,90),
    stroke: "solid",
      bowing: 1, stroke: colors.body2, strokeWidth: 1,
  });

  rc.polygon(right_ceiling, {
    fill: colors.body2,
    fillStyle: random(['hachure']),
    fillWeight: random(0.5,0.5),
    hachureAngle: random(0,190),
    stroke: "solid",
      bowing: 11, stroke: colors.body2, strokeWidth: 1,
  });


  rc.polygon(right_ceiling_shadows, {
    fill: colors.main,
    fillStyle: random(['hachure']),
    fillWeight: random(0.2,0.5),
    hachureAngle: random(0,90),
    stroke: "solid",
      bowing: 1, stroke: colors.body2, strokeWidth: 1,
  });


  rc.polygon(left_ceiling_shadows, {
    fill: colors.main,
    fillStyle: random(['hachure']),
    fillWeight: random(0.2,0.5),
    hachureAngle: random(0,90),
    stroke: "solid",
      bowing: 1, stroke: colors.body2, strokeWidth: 1,
  });

  rc.polygon(top_face, {
    fill: colors.roof,
    fillStyle: random(['dashed']),
    fillWeight: random(0.5,1.5),
    hachureAngle: random(90,90),
    stroke: "solid",
      bowing: 1, stroke: colors.body2, strokeWidth: 1,
  });

  rc.polygon(top_face, {
    fill: colors.roof,
    fillStyle: random(['dashed']),
    fillWeight: random(0.5,1.5),
    hachureAngle: topfaceangle,
    stroke: "transparent",

  });

  rc.polygon(top_ceiling, {
    fill: colors.body2,
    fillStyle: random(['hachure']),
    fillWeight: random(0.5,1.5),
    hachureAngle: random(60,70),
    stroke: "solid",
      bowing: 1, stroke: colors.body2, strokeWidth: 1,
  });

  rc.polygon(top_ceiling, {
    fill: colors.body2,
    fillStyle: random(['hachure']),
    fillWeight: random(0.5,1.5),
    hachureAngle: random(160,170),
    stroke: "solid",
      bowing: 1, stroke: colors.body2, strokeWidth: 1,
  });

  rc.polygon(top_ceiling2, {
    fill: colors.main,
    fillStyle: random(['hachure']),
    fillWeight: random(0.1,0.5),
    hachureAngle: random(0,170),
    stroke: "solid",
      bowing: 1, stroke: colors.body2, strokeWidth: 1,
  });

  rc.polygon(front_enclosure, {
    fill: colors.roof,
    fillStyle: random(['hachure']),
    fillWeight: random(0.5,1.5),
    hachureAngle: random(180,180),
    stroke: "solid",
      bowing: 5, stroke: colors.body2, strokeWidth: 2,
  });

  rc.polygon(front_enclosure, {
    fill: colors.roof,
    fillStyle: random(['dashed']),
    fillWeight: random(0.5,1.5),
    hachureAngle: random(180,180),
    stroke: "solid",
      bowing: 10, stroke: colors.body2, strokeWidth: 1,
  });


  rc.polygon(right_window, {
    fill: colors.main,
    fillStyle: random(['dashed']),
    fillWeight: random(1.5,3.5),
    hachureAngle: random(180,180),
    stroke: "solid",
      bowing: 10, stroke: colors.body2, strokeWidth: 1,
  });

  rc.polygon(right_window, {
    fill: colors.main,
    fillStyle: random(['dashed']),
    fillWeight: random(1.5,3.5),
    hachureAngle: random(90,90),
    stroke: "solid",
      bowing: 1, stroke: colors.body2, strokeWidth: 1,
  });

  rc.polygon(right_window_countor, {
    fill: colors.main,
    fillStyle: random(['dashed']),
    fillWeight: random(0.5,1.5),
    hachureAngle: random(90,90),
    stroke: "solid",
      bowing: 1, stroke: colors.body2, strokeWidth: 1,
  });

  rc.polygon(right_window2, {
    fill: colors.main,
    fillStyle: random(['hachure']),
    fillWeight: random(0.2,0.5),
    hachureAngle: random(90,90),
    stroke: "solid",
      bowing: 3, stroke: colors.body2, strokeWidth: 0.5,
  });


  rc.polygon(pit, {
    fill: colors.bg,
    fillStyle: random(['dashed']),
    fillWeight: random(1.5,3.5),
    hachureAngle: random(90,90),
    stroke: "solid",
      bowing: 14, stroke: colors.body2, strokeWidth: 4,
  });

  rc.polygon(pit, {
    fill: colors.bg,
    fillStyle: random(['dashed']),
    fillWeight: random(1.5,3.5),
    hachureAngle: random(90,90),
    stroke: "solid",
      bowing: 12, stroke: colors.body2, strokeWidth: 1,
  });


  rc.ellipse(centerpoint[0],centerpoint[1],30,90,{
    fill: colors.bg,
    fillStyle: random(['dashed']),
    fillWeight: random(4,8),
    hachureAngle: random(10,13),
    stroke: "transparent",
  }
);

rc.ellipse(centerpoint[0]+20,centerpoint[1],30,30,{
  fill: colors.bg,
  fillStyle: random(['dashed']),
  fillWeight: random(4,8),
  hachureAngle: random(10,13),
  stroke: "transparent",
}
);


rc.ellipse(centerpoint[0]-20,centerpoint[1]-20,30,30,{
  fill: colors.bg,
  fillStyle: random(['dashed']),
  fillWeight: random(4,8),
  hachureAngle: random(10,13),
  stroke: "transparent",
}
);

rc.ellipse(centerpoint[0]-5,centerpoint[1]-50,30,30,{
  fill: colors.bg,
  fillStyle: random(['dashed']),
  fillWeight: random(4,8),
  hachureAngle: random(10,13),
  stroke: "transparent",
}
)

rc.ellipse(centerpoint[0]-5+random(-30,30),centerpoint[1]-20+random(-30,30),30,30,{
  fill: colors.bg,
  fillStyle: random(['dashed']),
  fillWeight: random(4,8),
  hachureAngle: random(10,13),
  stroke: "transparent",
}
);

rc.ellipse(centerpoint[0]+5+random(-30,30),centerpoint[1]+20+random(-30,30),30,30,{
  fill: colors.bg,
  fillStyle: random(['dashed']),
  fillWeight: random(4,8),
  hachureAngle: random(10,13),
  stroke: "transparent",
}
)


}
