function cone(radius,height) {

    let Pi = Math.PI;
    let V = (1/3) * height * Pi * Math.pow(radius,2);
    let area = Pi * radius * (radius + Math.sqrt(Math.pow(height,2) + Math.pow(radius,2)))
    console.log(`volume = ${V.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);

}
cone(3.3,7.8)