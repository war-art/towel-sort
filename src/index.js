

module.exports = function towelSort (matrix) {

    if (matrix == undefined || matrix.length<1) return []; 
   
  
    let towel = [];
    towel.push(matrix[0], matrix[1].reverse()); 
  
  
    if (matrix[2]) towel.push(matrix[2]); 
  
  
    if (matrix[3]) towel.push(matrix[3].reverse());
  
  
    return towel.flat();
  
  
}
