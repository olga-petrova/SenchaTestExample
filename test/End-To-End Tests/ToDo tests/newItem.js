describe("ToDo list integration test", function() {
        
    it("should add new tem", function() {
        /*ST.play([
            { type: "click", target: "todo #addNewItemButton" },
            { type: "type", target: "todowindow textfield", text: "My new ToDo" },
            { type: "tap", target: "todowindow #saveButton" },
            { function (grid) {
                expect(grid.getStore().findRecord('task', "My new ToDo")).toBeTruthy();   
            }, target: "todo"}
        ]);*/
        
    ST.play([
        { type: "tap", target: "button[itemId=\"addNewItemButton\"]", x: 25, y: 21 },
        { type: "type", target: "textfield", text: "New item" },
        { type: "tap", target: "button[itemId=\"saveButton\"]", x: 31, y: 12 }
    ]);
        
    
    
    
    });
    
});