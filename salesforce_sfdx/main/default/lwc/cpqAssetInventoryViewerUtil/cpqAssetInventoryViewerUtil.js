import { LightningElement, api, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import pubsub from 'vlocity_cmt/pubsub';
import { getDataHandler } from "vlocity_cmt/utility";
import cpqAssetViewerUtil from "vlocity_cmt/cpqAssetViewerUtil";
import { OmniscriptBaseMixin } from 'vlocity_cmt/omniscriptBaseMixin';
import { OmniscriptActionCommonUtil } from 'vlocity_cmt/omniscriptActionUtils';

export default class cpqAssetInventoryViewerUtil extends OmniscriptBaseMixin(cpqAssetViewerUtil){
    // your properties and methods here
        
    connectedCallback() {
        // Call omniUpdateDataJson to update the omniscript
        // this.omniUpdateDataJson({'key':'value'});
        /*this.triggerGetAssetViewerLineItems({
          "accountId": this.accountId,
          "currentPage": this.currentPage,
          "offset": this.offset,
          "pagesize": this.pagesize
        });*/
        this.invokeVIPChainable(this.ipMethodName, {
            "accountId": this.accountId,
            "currentPage": this.currentPage,
            "offset": this.offset,
            "pagesize": this.pagesize
          }, {"chainable": true});
        this.handleRefreshGetAssetViewerLineItems = {
          cpq_refresh_asset_viewer_lineitems: this.refreshAssetViewerLineItems.bind(this)
        };
        pubsub.register(`cpq_${this.accountId}`, this.handleRefreshGetAssetViewerLineItems);
    }

    async invokeVIPChainable(name, input, options){
        let _actionUtilClass = new OmniscriptActionCommonUtil();
        let requestData = {
            sClassName: `vlocity_cmt.IntegrationProcedureService`,
            sMethodName: name,
            input: JSON.stringify(input),
            options: JSON.stringify(options)
        }
        var response = await _actionUtilClass.executeAction(requestData, null, null, null, null)
        try {
            //response = JSON.parse(response);
            response = response.result ? response.result : response;
            response = response.IPResult ? response.IPResult : response;
            if (response && response.result && response.result.error) {
            this.showToastMessage("Error", response.result.error, "error");
            }
            pubsub.fire(`cpq_${this.accountId}`, "get_asset_viewer_lineitems", {
                "response": response
            });
        } catch (error) {
            console.error('Error ' + error);
        }
    }

    async triggerGetAssetViewerLineItems(inputMap) {
        let requestDataGetAssetViewerLineItems = {
          type: "integrationprocedure",
          value: {
            ipMethod: this.ipMethodName,
            inputMap: inputMap,
            optionsMap: {
                "chainable": true
                }
                
         }
        };
        this.callIP(requestDataGetAssetViewerLineItems);
    }

    callIP(requestDataGetAssetViewerLineItems){
    
        getDataHandler(JSON.stringify(requestDataGetAssetViewerLineItems)).then(response => {
            try {
              response = JSON.parse(response);
              response = response.IPResult ? response.IPResult : response;
              if (response && response.result && response.result.error) {
                this.showToastMessage("Error", response.result.error, "error");
              }
              let count = 0;
              let exit = 1;
              while(exit > count) {
                  exit = 0;
                  if (
                      response.hasOwnProperty("vlcIPData") &&
                      response.hasOwnProperty("vlcStatus") &&
                      response.vlcStatus === "InProgress"
                      ) {
                      exit = 1;
                      console.log("IP In Progress...");
                      let requestDataGetAssetViewerLineItemsCont = {
                          type: "integrationprocedure",
                          value: {
                              ipMethod: this.ipMethodName,
                              inputMap: '{}',
                              optionsMap: JSON.stringify(response)
                          }
                      }
                      var response = this.callIP(requestDataGetAssetViewerLineItemsCont);
                      console.log("IP response continuation: ", JSON.stringify(response));
                  } else {
                      exit = 0;
                      pubsub.fire(`cpq_${this.accountId}`, "get_asset_viewer_lineitems", {
                      "response": response
                      });
                  } 
              }
              /*pubsub.fire(`cpq_${this.accountId}`, "get_asset_viewer_lineitems", {
                "response": response
              });*/
            } catch (error) {
                if (error != "TypeError: Cannot read properties of undefined (reading 'hasOwnProperty')") {
                    console.error('Error ' + error);
                }
            }
          }).catch(error => {
            if (error && error.body && error.body.message) {
              this.showToastMessage("Error", error.body.message, "error");
            }
            pubsub.fire(`cpq_${this.accountId}`, "get_asset_viewer_lineitems", {
              "response": null
            });
          });


    }

}