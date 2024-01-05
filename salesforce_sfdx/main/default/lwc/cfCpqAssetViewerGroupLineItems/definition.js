let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"{}","dsDelay":"","resultVar":""}},"enableLwc":true,"events":[{"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1635307403426-9quy1eicz","label":"Action","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"Action","eventName":"setValues","fieldValues":[{"fieldName":"Session.selectedAssets","fieldValue":"{action.selectedAssets}"},{"fieldName":"Session.selectedAssetIds","fieldValue":"{action.selectedAssetIds}"}],"id":"flex-action-1635307457445","openUrlIn":"Current Window","targetType":"Web Page","type":"cardAction","vlocityIcon":"standard-default"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:selectallassets","element":"action","eventLabel":"pubsub","eventname":"selectallassets","eventtype":"pubsub","key":"event-0","recordIndex":"0","showSpinner":"false"},{"actionList":[{"actionIndex":0,"card":"{card}","draggable":true,"isOpen":true,"key":"1635307463997-1bd2bkffe","label":"Action","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"Action","eventName":"setValues","fieldValues":[{"fieldName":"Session.selectedAssets","fieldValue":"{action.selectedAssets}"},{"fieldName":"Session.selectedAssetIds","fieldValue":"{action.selectedAssetIds}"}],"id":"flex-action-1635307526370","openUrlIn":"Current Window","targetType":"Web Page","type":"cardAction","vlocityIcon":"standard-default"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:select_record","element":"action","eventLabel":"pubsub","eventname":"select_record","eventtype":"pubsub","key":"event-1","recordIndex":"0","showSpinner":"false"},{"actionList":[{"actionIndex":0,"card":"{card}","draggable":true,"isOpen":true,"key":"1635307545998-pia0pw76x","label":"Action","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"Action","eventName":"setValues","fieldValues":[{"fieldName":"Session.selectedAssetIds","fieldValue":"{action.selectedAssetIds}"},{"fieldName":"Session.selectedAssets","fieldValue":"{action.selectedAssets}"}],"id":"flex-action-1635307626872","openUrlIn":"Current Window","targetType":"Web Page","type":"cardAction","vlocityIcon":"standard-default"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:selectallassetsinagroup","element":"action","eventLabel":"pubsub","eventname":"selectallassetsinagroup","eventtype":"pubsub","key":"event-2","recordIndex":"0","showSpinner":"false"}],"isFlex":true,"lwc":{"DeveloperName":"cfCpqAssetViewerGroupLineItems_3_Vlocity","Id":"0Rb5g000000SLqtCAG","ManageableState":"unmanaged","MasterLabel":"cfCpqAssetViewerGroupLineItems_3_Vlocity","NamespacePrefix":"vlocity_cmt"},"selectableMode":"Multi","sessionVars":[{"name":"selectedAssets","val":"{}"},{"name":"selectedAssetIds","val":"[]"}],"states":[{"actions":[],"childCards":["cpqAssetViewerLineItem"],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"baseInputElement","elementLabel":"Block-2-Checkbox-0","key":"element_element_block_0_0_baseInputElement_0_0","name":"Checkbox","parentElementKey":"element_block_0_0","property":{"action":{"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1635225334279-nhavk8jmm","label":"Action","stateAction":{"displayName":"Action","eventName":"cpqutils_{recordId}","extraParams":{"containerRecord":"{Parent.containerRecord}","groupRecord":"{record}","offerType":"AssetsInGroup","selectAllEventName":"selectallassetsinagroup","selectedAssetIds":"{Session.selectedAssetIds}","selectedAssets":"{Session.selectedAssets}","utilMethod":"selectAllFunctionality"},"hasExtraParams":true,"id":"flex-action-1635307683176","message":"cpq_ui_event","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"}}],"eventType":"onchange","iconName":"standard-default","label":"Action","showSpinner":"false"},"card":"{card}","propertyObj":{"action":{"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1635225334279-nhavk8jmm","label":"Action","stateAction":{"displayName":"Action","eventName":"cpqutils_{recordId}","extraParams":{"containerRecord":"{Parent.containerRecord}","groupRecord":"{record}","offerType":"AssetsInGroup","selectAllEventName":"selectallassetsinagroup","selectedAssetIds":"{Session.selectedAssetIds}","selectedAssets":"{Session.selectedAssets}","utilMethod":"selectAllFunctionality"},"hasExtraParams":true,"id":"flex-action-1635307683176","message":"cpq_ui_event","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"}}],"eventType":"onchange","iconName":"standard-default","label":"Action","showSpinner":"false"},"checked":false,"customProperties":[{"id":0,"label":"checked","value":"{selectAll}"}],"fieldBinding":"","label":" "},"record":"{record}","type":"checkbox"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-m-top_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"top:small","size":"small","type":"top"}],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-m-top_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"top:small","size":"small","type":"top"}],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"flexIcon","elementLabel":"Block-2-Icon-1","key":"element_element_block_0_0_flexIcon_1_0","name":"Icon","parentElementKey":"element_block_0_0","property":{"action":{"actionData":{"card":"{card}","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"Action","eventName":"setValues","fieldValues":[{"fieldName":"itemsCollapsed","fieldValue":"true"}],"id":"flex-action-1629963802817","openUrlIn":"Current Window","targetType":"Web Page","type":"cardAction","vlocityIcon":"standard-default"},"stateObj":"{record}"},"eventType":"onclick","iconName":"standard-default","label":"Action","name":""},"card":"{card}","data-conditions":{"group":[{"field":"itemsCollapsed","hasMergeField":false,"id":"state-new-condition-0","operator":"!=","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"extraclass":"slds-icon_container slds-icon__svg--default ","iconName":"utility:chevrondown","iconType":"Salesforce SVG","imgsrc":"","record":"{record}","size":"x-small","variant":"default"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-top_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:small","size":"small","type":"top"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-top_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:small","size":"small","type":"top"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"flexIcon","elementLabel":"Block-2-Icon-2","key":"element_element_block_0_0_flexIcon_2_0","name":"Icon","parentElementKey":"element_block_0_0","property":{"action":{"actionData":{"card":"{card}","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"Action","eventName":"setValues","fieldValues":[{"fieldName":"itemsCollapsed","fieldValue":"false"}],"id":"flex-action-1629963789442","openUrlIn":"Current Window","targetType":"Web Page","type":"cardAction","vlocityIcon":"standard-default"},"stateObj":"{record}"},"eventType":"onclick","iconName":"standard-default","label":"Action","name":""},"card":"{card}","data-conditions":{"group":[{"field":"itemsCollapsed","hasMergeField":false,"id":"state-new-condition-7","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"extraclass":"slds-icon_container slds-icon__svg--default ","iconName":"utility:chevronright","iconType":"Salesforce SVG","imgsrc":"","record":"{record}","size":"x-small","variant":"default"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-top_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:small","size":"small","type":"top"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-top_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:small","size":"small","type":"top"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-2-Text-3","key":"element_element_block_0_0_outputField_3_0","name":"Text","parentElementKey":"element_block_0_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"groupByKey","hasMergeField":false,"id":"state-new-condition-67","operator":"!=","type":"custom","value":"vlocity_cmt__OneTimeCharge__c"},{"field":"groupByKey","hasMergeField":false,"id":"state-new-condition-76","logicalOperator":"&&","operator":"!=","type":"custom","value":"vlocity_cmt__RecurringCharge__c"},{"field":"groupByKey","hasMergeField":false,"id":"state-new-condition-92","logicalOperator":"&&","operator":"!=","type":"custom","value":"vlocity_cmt__OneTimeTotal__c"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%3E%3Cstrong%3E%3Cspan%20style=%22color:%20#0070d2;%20font-size:%2012pt;%22%3E%7Blabel%7D%3C/span%3E%3C/strong%3E%3C/div%3E","record":"{record}"},"size":{"default":"6","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-top_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:x-small","size":"x-small","type":"top"}],"size":{"default":"6","isResponsive":false},"sizeClass":"slds-size_6-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-top_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:x-small","size":"x-small","type":"top"}],"size":{"default":"6","isResponsive":false},"sizeClass":"slds-size_6-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"text"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-2-Text-4","key":"element_element_block_0_0_outputField_4_0","name":"Text","parentElementKey":"element_block_0_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"groupByKey","hasMergeField":false,"id":"state-new-condition-43","operator":"==","type":"custom","value":"vlocity_cmt__OneTimeCharge__c"},{"field":"groupByKey","hasMergeField":false,"id":"state-new-condition-23","logicalOperator":"||","operator":"==","type":"custom","value":"vlocity_cmt__RecurringCharge__c"},{"field":"groupByKey","hasMergeField":false,"id":"state-new-condition-39","logicalOperator":"||","operator":"==","type":"custom","value":"vlocity_cmt__OneTimeTotal__c"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%3E%3Cstrong%3E%3Cspan%20style=%22color:%20#0070d2;%20font-size:%2012pt;%22%3E$%7Blabel%7D%3C/span%3E%3C/strong%3E%3C/div%3E","record":"{record}"},"size":{"default":"3","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-top_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:x-small","size":"x-small","type":"top"}],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-top_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:x-small","size":"x-small","type":"top"}],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-2","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"4","isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"size":{"default":"4","isResponsive":false},"sizeClass":"slds-size_4-of-12 "},"type":"block"},{"children":[{"children":[],"class":"slds-col ","element":"block","elementLabel":"Block-8-Block-0","key":"element_element_block_3_0_block_0_0","name":"Block","parentElementKey":"element_block_3_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 "},"type":"block"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"Block-8-FlexCard-1","key":"element_element_block_3_0_childCardPreview_1_0","name":"FlexCard","parentElementKey":"element_block_3_0","property":{"cardName":"cpqAssetViewerLineItem","cardNode":"{record.value}","isChildCardTrackingEnabled":false,"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"11","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"11","isResponsive":false},"sizeClass":"slds-size_11-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"11","isResponsive":false},"sizeClass":"slds-size_11-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-4","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"data-conditions":{"group":[{"field":"itemsCollapsed","hasMergeField":false,"id":"state-new-condition-0","operator":"!=","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"sizeClass":"slds-size_12-of-12"},"type":"block"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card slds-m-around_none ","container":{"class":"slds-card"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqAssetViewerGroupLineItems","uniqueKey":"","Id":"a5a7a0000003HEoAAM","vlocity_cmt__GlobalKey__c":"cpqAssetViewerGroupLineItems/Vlocity/3/1635259495776"};
  export default definition