const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  test("it works for square arrays", () =>{
    let squareArray = [
      [1,2,3,4],
      [5,6,7,8],
      [9,10,11,12],
      [13,14,15,16]
    ]

    let res = unroll(squareArray);
    expect(res).toEqual(
      [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]
    );
  });

  test("it works with uneven arrays", () =>{
    let unevenArray = [
      [1,2,3,4],
      [5,6,7,8,8.5],
      [9,10,11,12],
      [13,14,15,16,17]
    ]

    let res = unroll(unevenArray);
    expect(res).toEqual(
      [1,2,3,4,8.5,12,17,16,15,14,13,9,5,6,7,8,11,10]
    )
  });

});
