describe("ToDo list integration test", function() {
        
    it("should add new tem", function() {
    
    ST.play([
        { type: "tap", target: "button[itemId=\"addNewItemButton\"]", x: 28, y: 11 },
        { type: "tap", target: "textfield", x: 202, y: 23 },
        { type: "type", target: "textfield", text: "1" },
        { type: "tap", target: "button[itemId=\"saveButton\"]", x: 51, y: 15 }
    ]);
    
     
    ST.play([
        { type: "tap", target: "button[itemId=\"addNewItemButton\"]", x: 31, y: 23 },
        { type: "type", target: "todowindow textfield", text: "New ToDo" },
        { type: "tap", target: "button[itemId=\"saveButton\"]", x: 26, y: 19 },
        { fn: function () {
            var grid = this.targetEl.getComponent();
            expect(grid.getStore().findRecord('task', "New ToDo")).toBeTruthy();
        }, target: "todo grid"}
        
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
    