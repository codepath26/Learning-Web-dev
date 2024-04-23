 DiagonalsMax = (matrix)=>{
  const n = matrix.length;
  let xDia = matrix[0][0];
  let yDia = matrix[0][n-1];

  for(let i=0 ; i<matrix.length ; i++){

    if(matrix[i][i] > xDia){
      xDia = matrix[i][i];
    }
    if(matrix[i][n-1-i] > yDia){
      yDia = matrix[i][n-1-i];
    }
  }
  return [xDia , yDia];
}

const matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
console.log(DiagonalsMax(matrix));