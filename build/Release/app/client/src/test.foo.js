goog.require ("Foo")
goog.provide ("spec.Foo")

describe("Foo", function() {
	it("it should work", function() {

		var res = new Foo();

		expect(res.testMethod()).toEqual("test");
	});

});
