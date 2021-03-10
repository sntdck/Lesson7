({
    driverHelper : function(component, event, helper) {
         component.set('v.mycolumns', [
             {label: 'Name', fieldName: 'Name', type: 'text'},
             {label: 'Driver FIO', fieldName: 'FIO__c', type: 'text'},
             {label: 'Driver order', fieldName: 'Order__c', type: 'text'},
             {label: 'Experence', fieldName: 'Expire__c', type: 'number'},
             {label: 'Salary', fieldName: 'Salary__c', type: 'number'}
         ]);  
             
         var data = component.get("c.getDrivers");
         data.setParams({
         });
         data.setCallback(this, function(response){
             var state = response.getState();
             if (state === "SUCCESS") {
                 component.set("v.driverList", response.getReturnValue());
             }
         });
         $A.enqueueAction(data);
     }  
 });