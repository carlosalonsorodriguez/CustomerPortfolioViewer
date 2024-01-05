global with sharing class CustomFunctionClass implements vlocity_cmt.VlocityOpenInterface
{
    
    global class CustomFunctionClassException extends Exception{}

    global Boolean invokeMethod(String methodName, Map<String, Object> inputMap, Map<String, Object> outputMap, Map<String, Object> options) 
    {   
        try
        {
            //System.debug(LoggingLevel.INFO,'CustomFunctionClass --- invokeMethod methodName: ' + JSON.serialize(methodName));
            //System.debug(LoggingLevel.INFO,'CustomFunctionClass --- invokeMethod inputMap: ' + JSON.serialize(inputMap));
            if(methodName == 'getDomain')
            {
                outputMap.put('result', getDomain((List<Object>)inputMap.get('arguments')));
            }
            else if(methodName == 'validateAccountId')
            {
                outputMap.put('result', validateAccountId((String)inputMap.get('AccountId')));
            }
            else if(methodName == 'sleep')
            {
                outputMap.put('result', sleep((String)inputMap.get('strSeconds')));
            }
            else if(methodName == 'inventoryItemsViewer')
            {
                inventoryItemsViewer(inputMap, outputMap, options);
                return true;
            }
            else if(methodName == 'getJSONAttribute')
            {
                outputMap.put('result', (Map<String,Object>) JSON.deserializeUntyped(JSON.serialize(getJSONAttribute(inputMap, outputMap, options))));
                System.debug(LoggingLevel.INFO,'CustomFunctionClass --- inventoryItemsViewer outputMap: ' + JSON.serialize(outputMap));
            }
            else
            {
                return false;
            }
                
            return true;
        }
        catch (Exception ex)
        {
            System.debug(LoggingLevel.ERROR,'CustomFunctionClass --- ERROR Exception: ' + ex.getMessage());
            System.debug(LoggingLevel.ERROR,'CustomFunctionClass --- ERROR Stack Trace: ' + ex.getStackTraceString());
            throw ex;
        }  
    }
    
    private String getDomain(List<Object> args)
    {
        return String.valueOf(Url.getOrgDomainUrl().toExternalForm());
    }

    private String validateAccountId(String strAccountId)
    {
        Id accountId = (Id) strAccountId;
        if (accountId.getSObjectType() != Schema.Account.SObjectType){
            throw new CustomFunctionClassException('Bad Request: Input value is not an Account Id, returned: ' + String.valueOf(accountId.getSObjectType()));
        }
        return String.valueOf(accountId.getSObjectType());
    }

    private String sleep(String strSeconds)
    {
        Long startTime = DateTime.now().getTime();
        Long finishTime = DateTime.now().getTime();
        Long lngMiliSeconds = 1000*long.valueOf(strSeconds);
        while ((finishTime - startTime) < lngMiliSeconds) {
            finishTime = DateTime.now().getTime();
        }
        String strReturn = '>>> Done from ' + DateTime.valueOf((datetime.newinstance(startTime).format('yyyy-MM-dd HH:mm:ss'))) + ' to ' + DateTime.valueOf((datetime.newinstance(finishTime).format('yyyy-MM-dd HH:mm:ss')));
        return strReturn;
    }

    private void inventoryItemsViewer(Map<String, Object> input, Map<String, Object> output, Map<String, Object> options)
    {
        //System.debug(LoggingLevel.INFO,'CustomFunctionClass --- inventoryItemsViewer input: ' + JSON.serialize(input));
        List<Object> inventoryItemList = new List<Object>();
        if(input.get('InventoryItemList') instanceOf List<Object> && ((List<Object>)input.get('InventoryItemList')).size() > 0){
            inventoryItemList = (List<Object>)input.get('InventoryItemList');
        } else {
            return;
        }
        
        if(input.get('AssetList') instanceOf List<Object> && ((List<Object>)input.get('AssetList')).size() > 0){
            
            String rootAssetReferenceId = (String) input.get('RootAssetReferenceId');
            List<Object> assetList = (List<Object>)input.get('AssetList');
            inventoryItemsHierarchy(rootAssetReferenceId, assetList, inventoryItemList, output); 
            output.put('AssetList', assetList);   
            System.debug(LoggingLevel.INFO,'CustomFunctionClass --- inventoryItemsViewer output: ' + JSON.serialize(output));
        }
    }

    private void inventoryItemsHierarchy(String rootAssetReferenceId, List<Object> assetList, List<Object> inventoryItemListOriginal, Map<String, Object> output)
    {
        List<Object> inventoryItemList = new List<Object>();
        inventoryItemList = removeListDuplicates(inventoryItemListOriginal);
        System.debug(LoggingLevel.INFO,'CustomFunctionClass --- inventoryItemsHierarchy assetList: ' + JSON.serialize(assetList));
        for (Object asset : assetList) {
            Map<String,Object> assetMap = (Map<String,Object>) asset;
            System.debug(LoggingLevel.INFO,'CustomFunctionClass --- inventoryItemsHierarchy assetMap: ' + JSON.serialize(assetMap));
            String assetReferenceId = (String) ((Map<String,Object>)assetMap.get('vlocity_cmt__AssetReferenceId__c')).get('value');
            String parentLineNumber = (String) assetMap.get('LineNumber');
            if (assetMap.containsKey('vlocity_cmt__AttributeSelectedValues__c')) {
                vJsonAttributeViewerController.JSONAttribute assetAttributes = new vJsonAttributeViewerController.JSONAttribute();
                assetAttributes = vJsonAttributeViewerController.getJSONAttribute((Id)((Map<String,Object>)assetMap.get('Id')).get('value'));
                Map<String,Object> assetItemAttributes = new Map<String,Object>();
                assetItemAttributes.put('values', (Map<String,Object>) JSON.deserializeUntyped(JSON.serialize(assetAttributes.values)));
                assetItemAttributes.put('metadata', (Map<String,Object>) JSON.deserializeUntyped(JSON.serialize(assetAttributes.metadata)));
                assetMap.put('Attributes', assetItemAttributes);
                assetMap.put('AttributeValues', getItemAttributeValues((Map<String,Object>) JSON.deserializeUntyped(JSON.serialize(assetAttributes.values)),(Map<String,Object>) JSON.deserializeUntyped(JSON.serialize(assetAttributes.metadata.attributes))));
            }
            String assetStatus = '';
            if (assetMap.containsKey('vlocity_cmt__ProvisioningStatus__c')) {
                assetStatus = (String)((Map<String,Object>)assetMap.get('vlocity_cmt__ProvisioningStatus__c')).get('value');
            }
            String assetDisconnectDate = '';
            if (assetMap.containsKey('vlocity_cmt__DisconnectDate__c')) {
                Datetime myDate = (DateTime)JSON.deserialize('"' + (String)((Map<String,Object>)assetMap.get('vlocity_cmt__DisconnectDate__c')).get('value') + '"', DateTime.class);
                //Datetime myDate = (Datetime)((Map<String,Object>)assetMap.get('vlocity_cmt__DisconnectDate__c')).get('value');
                //assetDisconnectDate = (DateTime.parse((String)((Map<String,Object>)assetMap.get('vlocity_cmt__DisconnectDate__c')).get('value'))).format('yyyy-MM-dd h:mm a');
                assetDisconnectDate = myDate.format('dd/MM/yyyy h:mm a');
            }
            String assetActivationDate = '';
            if (assetMap.containsKey('vlocity_cmt__ActivationDate__c')) {
                Datetime myDate = (DateTime)JSON.deserialize('"' + (String)((Map<String,Object>)assetMap.get('vlocity_cmt__ActivationDate__c')).get('value') + '"', DateTime.class);
                //Datetime myDate = (Datetime)((Map<String,Object>)assetMap.get('vlocity_cmt__ActivationDate__c')).get('value');
                //assetActivationDate = (DateTime.parse((String)((Map<String,Object>)assetMap.get('vlocity_cmt__ActivationDate__c')).get('value'))).format('yyyy-MM-dd h:mm a');
                assetActivationDate = myDate.format('dd/MM/yyyy');
            }
            if (assetMap.containsKey('ObjectType') && assetMap.get('ObjectType') == 'InventoryItem') {
                assetMap.put('disconnectDate', assetDisconnectDate);
            } else {
                assetMap.put('disconnectDate', assetDisconnectDate);
                assetMap.put('ActivationDate', assetActivationDate);
            }
            System.debug(LoggingLevel.INFO,'inventoryItemsHierarchy --- assetMap: ' + JSON.serialize(assetMap));
            List<Object> childAssetList = new List<Object>();
            List<Map<String,Object>> parentInvetoryItemList = new List<Map<String,Object>>();
            for (Object inventoryItem : inventoryItemList) {
                Map<String,Object> inventoryItemMap = (Map<String,Object>) inventoryItem;
                if (inventoryItemMap.containsKey('ItemId') && String.isNotBlank((String)inventoryItemMap.get('ItemId'))) {
                    System.debug(LoggingLevel.INFO,'inventoryItemsHierarchy --- inventoryItemMap: ' + JSON.serialize(inventoryItemMap));
                    vJsonAttributeViewerController.JSONAttribute itemAttributes = new vJsonAttributeViewerController.JSONAttribute();
                    itemAttributes = vJsonAttributeViewerController.getJSONAttribute((Id)((Map<String,Object>)inventoryItemMap.get('Id')).get('value'));
                    Map<String,Object> inventoryItemAttributes = new Map<String,Object>();
                    Map<String,Object> inventoryItemAttributeValues = new Map<String,Object>();
                    inventoryItemAttributeValues = (Map<String,Object>) JSON.deserializeUntyped(JSON.serialize(itemAttributes.values));
                    inventoryItemAttributes.put('values', inventoryItemAttributeValues);
                    Map<String,Object> inventoryItemAttributeMetadata = new Map<String,Object>();
                    inventoryItemAttributeMetadata = (Map<String,Object>) JSON.deserializeUntyped(JSON.serialize(itemAttributes.metadata));
                    inventoryItemAttributes.put('metadata', inventoryItemAttributeMetadata);
                    inventoryItemMap.put('Attributes', inventoryItemAttributes);
                    inventoryItemMap.put('AttributeValues', getItemAttributeValues(inventoryItemAttributeValues, (Map<String,Object>) inventoryItemAttributeMetadata.get('attributes')));
                    Map<String,Object> provisioningStatus = new Map<String,Object>();
                    provisioningStatus.put('value', assetStatus);
                    inventoryItemMap.put('vlocity_cmt__ProvisioningStatus__c', provisioningStatus);

                    if ((inventoryItemMap.get('LineNumber') == (((Map<String,Object>)inventoryItemMap.get('Id')).get('value') + '.0001') && inventoryItemMap.get('AssetReferenceId') == assetReferenceId) 
                    || inventoryItemMap.get('AssetReferenceId') == ''
                    || (rootAssetReferenceId != assetReferenceId && inventoryItemMap.get('AssetReferenceId') == assetReferenceId)
                    || (String.isNotBlank(parentLineNumber) && ((String)inventoryItemMap.get('LineNumber')).contains(parentLineNumber))
                    ) {
                        parentInvetoryItemList.add(inventoryItemMap);
                        System.debug(LoggingLevel.INFO,'inventoryItemsHierarchy --- inventoryItemMap2: ' + JSON.serialize(inventoryItemMap));
                    }
                }
            }
            for (Object parentInvetoryItem: parentInvetoryItemList) {
                inventoryItemList.remove(inventoryItemList.indexOf(parentInvetoryItem));
            }
            output.put('InventoryItemList', parentInvetoryItemList);
            System.debug(LoggingLevel.INFO,'inventoryItemsHierarchy --- parentInvetoryItemList: ' + JSON.serialize(parentInvetoryItemList));
            if (assetMap.containsKey('childAssets') && ((Map<String,Object>)assetMap.get('childAssets')).get('records') instanceOf List<Object>){
                childAssetList = (List<Object>) ((Map<String,Object>)assetMap.get('childAssets')).get('records');
                if (parentInvetoryItemList.size() >0) {
                    childAssetList.addAll(parentInvetoryItemList);
                    System.debug(LoggingLevel.INFO,'inventoryItemsHierarchy --- parentInvetoryItemList if: ' + JSON.serialize(parentInvetoryItemList));
                }
                if (childAssetList.size() > 0 && inventoryItemList.size() > 0 ) {
                    inventoryItemsHierarchy(rootAssetReferenceId, childAssetList, inventoryItemList, output); 
                }
            } else if (parentInvetoryItemList.size() >0) {
                Map<String,Object> childInventoryItems = new Map<String,Object>();
                childInventoryItems.put('records', parentInvetoryItemList);
                assetMap.put('childAssets', childInventoryItems);
                System.debug(LoggingLevel.INFO,'inventoryItemsHierarchy --- parentInvetoryItemList else: ' + JSON.serialize(parentInvetoryItemList));
                if (inventoryItemList.size() > 0 ) {
                    inventoryItemsHierarchy(rootAssetReferenceId, parentInvetoryItemList, inventoryItemList, output); 
                }
            }
        }
    }

    private vJsonAttributeViewerController.JSONAttribute getJSONAttribute(Map<String, Object> input, Map<String, Object> output, Map<String, Object> options)
    {
        System.debug(LoggingLevel.INFO,'CustomFunctionClass --- inventoryItemsViewer input: ' + JSON.serialize(input));
        vJsonAttributeViewerController.JSONAttribute itemAttributes = new vJsonAttributeViewerController.JSONAttribute();
        List<Object> arguments = (List<Object>)input.get('arguments');
        Map<String,Object> argument = (Map<String,Object>)arguments[0];
        Id recordId = (Id) argument.get('recordId');
        itemAttributes =  vJsonAttributeViewerController.getJSONAttribute(recordId);
        System.debug(LoggingLevel.INFO,'CustomFunctionClass --- inventoryItemsViewer itemAttributes: ' + JSON.serialize(itemAttributes));
        return itemAttributes;
    }

    private List<Map<String, Object>> getItemAttributeValues(Map<String, Object> inventoryItemAttributeValues, Map<String, Object> inventoryItemAttributeMetadata)
    {
        List<Map<String,Object>> attributeValuesList = new List<Map<String,Object>>();
        
        for (String attKey : inventoryItemAttributeMetadata.keySet()) {
            Map<String,Object> attributeValue = new Map<String,Object>();
            attributeValue = (Map<String,Object>) inventoryItemAttributeMetadata.get(attKey);
            attributeValue.put('userValue', inventoryItemAttributeValues.get(attKey));
            attributeValuesList.add(attributeValue);
        }
        return attributeValuesList;

    }

    private List<Object>  removeListDuplicates(List<Object> inventoryItemList)
    {
        
        List<Object> inventoryItemListNoDuplicates = new List<Object>();
        for (Object inventoryItem : inventoryItemList) {
            if (!inventoryItemListNoDuplicates.contains(inventoryItem)) {
                inventoryItemListNoDuplicates.add(inventoryItem);
            }
        }
        System.debug(LoggingLevel.INFO,'CustomFunctionClass --- removeListDuplicates inventoryItemListNoDuplicates: ' + JSON.serialize(inventoryItemListNoDuplicates));
        System.debug(LoggingLevel.INFO,'CustomFunctionClass --- removeListDuplicates inventoryItemList: ' + JSON.serialize(inventoryItemList));
        return inventoryItemListNoDuplicates;
    }

}