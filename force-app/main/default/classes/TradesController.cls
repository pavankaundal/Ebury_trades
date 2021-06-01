public with sharing class TradesController {
  /*  
    @AuraEnabled(Cacheable=true)
    public static Trade__c[] getAllTrades() {
        return [
            SELECT  Id,
                    Buy_Currency__c,
                    Buy_Amount__c,
                    Date_Booked__c,
                    ID__c,
                    Rate__c,
                    Sell_Amount__c,
                    Sell_Currency__c,
                    Name
            FROM Trade__c
            ORDER BY Name
            LIMIT 50
        ];
    }

    @AuraEnabled(Cacheable=true)
    public static Trade__c[] searchTrades(String searchTerm) {
        // Return all trades when no search term
        searchTerm = searchTerm.trim();
        if (searchTerm == '') {
            return getAllTrades();
        }
        // Prepare query paramters
        searchTerm = '%' + searchTerm + '%';
        // Execute search query
        return [
            SELECT  Id,
                    Buy_Currency__c,
                    Buy_Amount__c,
                    Date_Booked__c,
                    ID__c,
                    Rate__c,
                   Sell_Amount__c,
                    Sell_Currency__c,
                    Name
            FROM Trade__c
            WHERE Name LIKE :searchTerm
            ORDER BY Name
            LIMIT 50
        ];
    }*/
}
