describe("ToDo list integration test", function() {
        
    it("should add new tem", function() {
        ST.play([
            { type: "click", target: "todo #addNewItemButton" },
            { type: "type", target: "todowindow textfield", text: "My new ToDo" },
            { type: "tap", target: "todowindow #saveButton" },
            { function (grid) {
                expect(grid.getStore().findRecord('task', "My new ToDo")).toBeTruthy();   
            }, target: "todo"}
        ]);
    });
    
    it("should do not add new tem", function() {
        ST.play([
            { type: "click", target: "todo #addNewItemButton" },
            { type: "type", target: "todowindow textfield", text: "My new ToDo" },
            { type: "tap", target: "todowindow #saveButton" },
            { function (grid) {
                expect(grid.getStore().findRecord('task', "My new ToDo")).toBeFalsy();   
            }, target: "todo"}
        ]);
    });
    
});