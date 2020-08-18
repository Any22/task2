describe ('Simple_Calculator',function(){
    var calc,num1,num2,total;
    

    beforeEach(function(){
        calc= new Simple_Calculator();
    });

    describe ("This calculator performs basic arithmetic operations",function(){
          it ('should be able to add two numbers',function(){
            
            expect(calc.sum1(num1,num2)).toEqual(total);
          });
    
        //   it ('should be able to subtract two numbers',function(){
            
        //     expect(calc.diff(8,3)).toEqual(5);
        //   });
        
        //   it ('should be able to multiply two numbers',function(){
            
        //     expect(calc.prod(8,3)).toEqual(24);
        //   });

    });
});