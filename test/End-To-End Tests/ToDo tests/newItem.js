describe("ToDo list integration test", function() {
        
    it("should add new tem", function() {
    
       
    ST.play([
        { type: "tap", target: "button[itemId=\"addNewItemButton\"]", x: 31, y: 23 },
        { type: "type", target: "todowindow textfield", text: "Type test" },
        { fn: function () {
            var textfield = this.targetEl.getComponent();
            expect(textfield.getValue()).toBe("Type test");
        }, target: "todowindow textfield"}
        
        ]);
        
    });
    
    
    
});

 /*ST.play([
        { type: "tap", target: "button[itemId=\"addNewItemButton\"]", x: 31, y: 23 },
        { type: "type", target: "todowindow textfield", text: "Type test" },
        { fn: function () {
            var textfield = this.targetEl.getComponent();
            expect(textfield.getValue()).toBe("Type test");
        }, target: "todowindow textfield"}
        /*{ type: "tap", target: "button[itemId=\"saveButton\"]", x: 26, y: 19 },
        { fn: function () {
            var grid = this.targetEl.getComponent();
            expect(grid.getStore().findRecord('task', "New ToDo")).toBeTruthy();
        }, target: "todo grid"}
        ]);*/
    