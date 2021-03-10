({
    clickCreate: function(component, event, helper) {
        let newDriver = component.get("v.newDriver");
        
        let data = component.get("c.saveDriver");
        data.setParams({
            "driver": newDriver
        });
        data.setCallback(this, function(response){
            let state = response.getState();
            if (state === "SUCCESS") {
                console.log("Driver created");
            }
        });
        $A.enqueueAction(data); 
    }
})