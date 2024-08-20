import circle from './app.js';
import { expect } from 'chai';

 describe('Testing Diameter, Area of circle',function() {
     it('Test1. circle Diameter', function(done) {
         let radius = new circle(5);
         expect(radius.getDiameter()).to.equal(10);
         done();
     });
     it('Test2. Circle area', function(done) {
         let radius = new circle(25);
         expect(radius.getArea()).to.equal(1963);
         done();
     });
 });