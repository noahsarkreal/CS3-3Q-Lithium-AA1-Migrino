let piConst = 3.14;
let radius = 6.378e6;
let circumference = 2*piConst*radius;
let surfaceArea = 4*piConst*(radius*radius);
let volume = (4/3)*piConst*(radius*radius*radius)

document.write('The radius of the sphere is ' +radius+ '.');
document.write('<br>');
document.write('The circumference is ' +circumference+ '.');
document.write('<br>');
document.write('The surface area is ' +surfaceArea+ '.');
document.write('<br>');
document.write('The volume is ' +volume+ '.');
