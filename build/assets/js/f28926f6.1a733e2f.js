"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2053],{3905:(e,o,t)=>{t.d(o,{Zo:()=>c,kt:()=>f});var a=t(7294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function n(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,a,r=function(e,o){if(null==e)return{};var t,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),d=function(e){var o=a.useContext(i),t=o;return e&&(t="function"==typeof e?e(o):l(l({},o),e)),t},c=function(e){var o=d(e.components);return a.createElement(i.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},h=a.forwardRef((function(e,o){var t=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(t),f=r,b=h["".concat(i,".").concat(f)]||h[f]||u[f]||n;return t?a.createElement(b,l(l({ref:o},c),{},{components:t})):a.createElement(b,l({ref:o},c))}));function f(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var n=t.length,l=new Array(n);l[0]=h;var s={};for(var i in o)hasOwnProperty.call(o,i)&&(s[i]=o[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<n;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},3741:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const n={},l=void 0,s={unversionedId:"Webhooks/g2-leads-webhooks/salesforce_crm_webhook",id:"Webhooks/g2-leads-webhooks/salesforce_crm_webhook",title:"salesforce_crm_webhook",description:"## Metadata_Start",source:"@site/docs/Webhooks/g2-leads-webhooks/salesforce_crm_webhook.md",sourceDirName:"Webhooks/g2-leads-webhooks",slug:"/Webhooks/g2-leads-webhooks/salesforce_crm_webhook",permalink:"/docs/Webhooks/g2-leads-webhooks/salesforce_crm_webhook",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"hubspot_webhook",permalink:"/docs/Webhooks/g2-leads-webhooks/hubspot_webhook"},next:{title:"basics_of_in_app_review_prompts",permalink:"/docs/Webhooks/in-app-g2-review-prompts/basics_of_in_app_review_prompts"}},i={},d=[],c={toc:d};function u(e){let{components:o,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("div",null,"## Metadata_Start ## title: Salesforce CRM webhook ## original-url : https://documentation.g2.com/docs/salesforce-crm-webhook ## article-id : a5391a08-05d5-4dd7-b9ac-28aa642ac6a6 ## seo-title : ## description : ## Metadata_End You can use Salesforce\u2019s Web-to-Lead form option to automatically deliver your organization\u2019s G2 leads via a webhook to your Salesforce instance. This means any leads generated from your G2.com product profile page are instantly added to your Salesforce instance and ready to be worked by your sales and marketing teams. The following information details examples of how to set up the webhook for this process. There could potentially be dozens of fields that need to be matched between your G2 lead form and Salesforce, and these fields will be different depending on the G2 leads data that you want delivered to your Salesforce leads. Your organization should adjust steps 12-14 based on your own selections. :::(Info) You should set up your [G2 lead form](/g2/docs/leads) before starting this process. ::: To send your G2 leads to Salesforce: 1. Log in to your Salesforce instance and go to **Setup**. 2. Search for and select **Web-to-Lead**. 3. In the Web-to-Lead Setup page, ensure that **Web-to-Lead Enabled** checkbox is selected. If not, select **Edit** and enable Web-to-Lead forms before proceeding. ![WebhookSalesforce_EnableWebLead](https://cdn.document360.io/1759d01c-b118-4f31-81f7-e4011071a6d4/Images/Documentation/WebhookSalesforce_EnableWebLead.png)","{",'height="70%" width="70%"',"}","4. Select **Create Web-to-Lead Form**. 5. Add and remove the Salesforce fields for your leads.",(0,r.kt)("br",null),(0,r.kt)("br",null)," The options you move to the **Selected Fields** column should ultimately match with both the standard and custom fields you choose to include in the G2 lead form. For example, the standard **First Name (first_name)** field in the G2 lead form could match with the default **First Name (first_name)** field in Salesforce. ![WebhookSalesforce_AddingFieldsSFDC2](https://cdn.document360.io/1759d01c-b118-4f31-81f7-e4011071a6d4/Images/Documentation/WebhookSalesforce_AddingFieldsSFDC2.png)","{",'height="50%" width="50%"',"}","6. Remove the **Return URL** entry and uncheck the **Include reCAPTCHA in HTML** checkbox. Both should be empty. 7. Select **Generate**. 8. In the sample HTML generated by Salesforce, you should look for several elements that need to be copy-and-pasted to your my.G2.",(0,r.kt)("br",null),(0,r.kt)("br",null)," First, find and copy the endpoint URL. The code for the URL should be similar to the following:",(0,r.kt)("br",null),(0,r.kt)("br",null),' <form action="**https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8**" method="POST"> ',(0,r.kt)("br",null),(0,r.kt)("br",null)," Ignore the surrounding HTML. Copy only the URL inside the quotation marks. ![WebhookSalesforce_URLandOID](https://cdn.document360.io/1759d01c-b118-4f31-81f7-e4011071a6d4/Images/Documentation/WebhookSalesforce_URLandOID.png)","{",'height="50%" width="50%"',"}","9. Go to the [my.G2 Lead Webhooks](https://my.g2.com/~/buyer_activity)","{",'target="_blank"',"}"," tab. Paste the URL from Salesforce into the **Choose endpoint** field and select the **Form Data** option. Then, select **Save**. :::(Info) Select **Send Test Lead** to test the endpoint URL. This option ensures that your endpoint URL is valid, but does not send an actual lead to your Salesforce instance. ::: 10. Next, go back to your Salesforce sample HTML and find the oid value. The code for the oid value should be similar to the following:",(0,r.kt)("br",null),(0,r.kt)("br",null),' <input type=hidden name="oid" value="**00D4x000006swyD**"> ',(0,r.kt)("br",null),(0,r.kt)("br",null)," Ignore the surrounding HTML. Copy only the 15-digit value inside the quotation marks. 11. Go to the [my.G2 Lead Form](https://my.g2.com/~/buyer_activity)","{",'target="_blank"',"}"," tab. In the Custom Fields section, select **Add Field** and enter the following details: * **Label**: oid * **API Name**: This should auto-populate with oid. * **Field Type**: Hidden * **Field Value**: Paste the oid value you copied in step 11 into this field.",(0,r.kt)("br",null),(0,r.kt)("br",null),"12. Select **Save**. ![WebhookSalesforce_CustomFieldOID](https://cdn.document360.io/1759d01c-b118-4f31-81f7-e4011071a6d4/Images/Documentation/WebhookSalesforce_CustomFieldOID.png)","{",'height="70%" width="70%"',"}","13. Finally, go back to your Salesforce sample HTML and find the various API fields for each of your chosen Salesforce fields from step 5. Each of these field values need to be transferred to the corresponding fields in your G2 lead form.",(0,r.kt)("br",null),(0,r.kt)("br",null)," For example, the code for the default Salesforce field First Name should be similar to the following:",(0,r.kt)("br",null),(0,r.kt)("br",null),' <label for="**first_name**">First Name</label><input  id="first_name" maxlength="40" name="first_name" size="20" type="text" /><br> ',(0,r.kt)("br",null),(0,r.kt)("br",null)," Ignore the surrounding HTML. Copy only the API field **first_name** that is inside the quotation marks of the label for= entry. ![WebhookSalesforce_FindHTMLFields](https://cdn.document360.io/1759d01c-b118-4f31-81f7-e4011071a6d4/Images/Documentation/WebhookSalesforce_FindHTMLFields.png)","{",'height="" width=""',"}","14. With the first value from step 12 copied, go to the [my.G2 Lead Webhooks](https://my.g2.com/~/buyer_activity)","{",'target="_blank"',"}"," tab and find the API Name for the matching G2 lead form field. Paste your copied Salesforce field into the matching **Override API Name** field. 15. Repeat steps 12-13 to find and map each of your Salesforce fields to the fields in your G2 lead form, and then select **Save**. This should include any custom fields that have been created for your G2 lead form. ![WebhookSalesforce_MapWebhookValue](https://cdn.document360.io/1759d01c-b118-4f31-81f7-e4011071a6d4/Images/Documentation/WebhookSalesforce_MapWebhookValue.png)","{",'height="50%" width="50%"',"}","16. Go back to your sample HTML page in Salesforce and select **Finished**. 17. With the endpoint URL, oid value, and all Salesforce fields moved from the sample HTML to your my.G2 dashboard, the webhook should be established between your G2 lead form and Salesforce.",(0,r.kt)("br",null),(0,r.kt)("br",null)," Test the webhook by going to your G2 product profile page and submitting a lead form. If the webhook has been successfully connected, the lead data you submit to G2 should appear in your Salesforce instance almost immediately.",(0,r.kt)("br",null),(0,r.kt)("br",null)," If any fields in your Salesforce leads are not populating appropriately, repeat this process starting with step 1 to create a new Web-to-Lead form. Ensure that the Salesforce fields you add to your Web-to-Lead form match the fields that you include in your G2 lead form. If you successfully receive a G2 lead in your Salesforce instance, the webhook is working and future G2 leads should also be delivered to Salesforce. When G2 leads are added to Salesforce, they are routed according to your organization\u2019s existing Salesforce rules. If you would like to learn more about how to automatically assign leads in Salesforce, review the **Creating Lead Assignment Rule** section of this [Salesforce Lead Management Implementation Guide](https://resources.docs.salesforce.com/230/10/en-us/sfdc/pdf/salesforce_lead_implementation_guide.pdf)","{",'target="_blank"',"}","."))}u.isMDXComponent=!0}}]);