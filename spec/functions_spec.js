import { coinCalc, fahrenheit2Celsius, cubeHeight2volume, gymMembershipCost, earthquakeDamage } from '../functions.js'

describe("tests for coin calculator", function() {
    it('tests coin calculator', function() {
        const total = coinCalc(0, 0, 0, 0, 0);
        expect(total).toEqual(0);
    });
    it('tests coin calculator', function() {
        const total = coinCalc(3, 2, 1, 2, 1);
        expect(total).toEqual(4.6);
    });
    it('tests coin calculator', function() {
        const total = coinCalc(18, 6, 7, 1, 0);
        expect(total).toEqual(4.25);
    });
    it('tests coin calculator', function() {
        const total = coinCalc(26, 1, 3, 3, 3);
        expect(total).toEqual(11.15);
    });
  });
  
describe("tests for fahrenheit to celsius", function(){
    it("tests boiling point of water conversion", function(){
        const temp = fahrenheit2Celsius(212);
        expect(temp).toBeCloseTo(100);
    });
    it("tests freezing point of water conversion", function(){
        const temp = fahrenheit2Celsius(32);
        expect(temp).toBeCloseTo(0);
    });
    it("tests room temperature conversion", function(){
        const temp = fahrenheit2Celsius(70);
        expect(temp).toBeCloseTo(21.1);
    });

});

describe("tests for cube height to volume", function(){
    it("tests height of 2m", function(){
        const volume = cubeHeight2volume(2);
        expect(volume).toBeCloseTo(8);
    });
    it("tests height of 5m", function(){
        const volume = cubeHeight2volume(5);
        expect(volume).toBeCloseTo(125);
    });
    it("tests height of 9.7m", function(){
        const volume = cubeHeight2volume(9.7);
        expect(volume).toBeCloseTo(912.67);
    });
});

describe("tests for gym membership cost", function(){
    it("tests 1 friend", function(){
        const cost = gymMembershipCost(12, 1);
        expect(cost).toBeCloseTo(11.4);
    });
    it("tests 2 friends", function(){
        const cost = gymMembershipCost(12, 2);
        expect(cost).toBeCloseTo(10.8);
    });
    it("tests 3 friends", function(){
        const cost = gymMembershipCost(12, 3);
        expect(cost).toBeCloseTo(10.2);
    });
    it("tests 4 friends", function(){
        const cost = gymMembershipCost(12, 4);
        expect(cost).toBeCloseTo(10.2);
    });
});

describe("tests for earthquake damage", function(){
    it("tests an intensity of 2.5", function(){
        const result = earthquakeDamage(2.5);
        expect(result).toBe("Little or no damage");
    });
    it("tests an intensity of 5.3", function(){
        const result = earthquakeDamage(5.3);
        expect(result).toBe("Some damage");
    });
    it("tests an intensity of 6.1", function(){
        const result = earthquakeDamage(6.1);
        expect(result).toBe("Serious damage: walls may crack or fall");
    });
    it("tests an intensity of 7.2", function(){
        const result = earthquakeDamage(7.2);
        expect(result).toBe("Disaster: buildings may collapse");
    });
    it("tests an intensity of 8", function(){
        const result = earthquakeDamage(8);
        expect(result).toBe("Catastrophe: most buildings destroyed");
    });    
});




