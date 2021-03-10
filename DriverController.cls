public with sharing class DriverController {
	@AuraEnabled
    public static void saveDriver(Driver__c driver) {
      insert driver;
    }
    
    @AuraEnabled
    public static List<Driver__c> getDrivers() {
        return [SELECT Id, Name, FIO__c, Order__c, Expire__c, Salary__c FROM Driver__c];
    }
}