
G2 leads are generated when buyers access gated content such as videos and downloads on your G2 product profile page, request that your organization contact them, or ask for a custom quote. These experiences require the buyer to submit contact details and other information via your lead form, which means leads are buyers that you know are interested in your product and are willing to be contacted directly by your organization.

## Leads activity
The my.G2 Leads Activity tab stores all the leads that have been generated for your product. 

You can filter leads by the activity that the buyer committed on your G2 product profile page. You can also search the email addresses submitted with your lead form.

To review all of the information that a buyer submitted via your lead form, select **See details** for each lead. To export all your leads data to a CSV file, adjust the date range at the top of the page and select **Download Leads**.

![Leads_LeadsActivityOverview](https://cdn.document360.io/1759d01c-b118-4f31-81f7-e4011071a6d4/Images/Documentation/Leads_LeadsActivityOverview.png){height="70%" width="70%"}

## Lead form
The my.G2 Lead Form tab is where you can adjust the default G2 lead form to potentially collect more information from leads, add tracking information, or provide needed information to third-party systems.

:::(Info)
After editing your G2 lead form, ensure that you [set up a webhook](/g2/docs/g2-leads-webhooks) if you want to send your G2 leads to a third-party system such as Salesforce. A webhook makes it easier to integrate G2 leads into your sales and marketing teams’ existing workflows.
:::

### Standard lead form fields
Most standard lead form fields cannot be removed. You can only change whether the Phone Number field is required when submitting your lead form.

When a buyer opens a lead form on your G2 product profile page, G2 also checks the buyer’s IP address against a third-party intent provider’s system. If a match is found between the buyer’s IP address and the known IP addresses of an organization, G2 removes fields such as Company, Company Size, and Industry from the lead form so that they do not appear for the buyer submitting the lead form. When you receive the lead, G2 auto-populates the information for the standard fields that are removed from the form with the details generated by the IP address matching process.

The standard fields in the G2 lead form include the following:

| Field | Is it required by G2? | Notes about the field |
| --- | --- | --- |
| First Name | Y |  |
| Last Name | Y |  |
| Business Email | Y |  |
| Phone Number | N | This is the only standard field that you can choose to keep in the lead form or remove it.<br /><br /> To remove the Phone Number prompt from your lead form, deselect the checkbox for the field to leave it blank. |
| Company | Y |  |
| Company Size | Y | Buyers must choose one of the provided options for this prompt. Those options include:<br /><br /> <ul><li>Myself Only</li><li>2-10 employees</li><li>11-50 employees</li><li>51-200 employees</li><li>501-1000 employees</li><li>1001-5000 employees</li><li>5001-10,000 employees</li><li>10,001+ employees</li></ul> |
| Industry | Y | Buyers must choose an option from an extensive dropdown of industries. |
| Message | N | This free-text field only appears when the buyer enters the lead form via certain mechanisms like the **Contact** CTA.<br /><br /> You cannot remove this prompt from the lead form entirely, but it is optional for buyers to enter details in the field when submitting the form. |
| Country | Y | G2 automatically collects relevant location data for the buyer via their IP address. This form of data collection is covered by G2’s [Privacy Policy](https://www.g2.com/static/privacy){target="_blank"}. |

### Custom lead form fields
Custom fields enable  your organization to ask buyers for more information when submitting your lead form and add organization-specific tracking information. Tracking information can be particularly useful if you choose to deliver your G2 leads to another system via webhooks.

To add custom fields to your lead form:

1. In the my.G2 Lead Form tab, select **Add Field**.
2. In the new field row, select the **Required** checkbox or leave it empty.
3. Enter a name for the field in the **Label** box. The **API Name** auto-populates based on the Label entry.

:::(Info)
If you copy and paste field names from a third-party system, the auto-populated API name might not match exactly with the pasted field name. For example, extended underscores might convert to shortened underscores.
:::

4. Choose from one of the four options from the Field Type dropdown:
    * **Text Field**: Allows buyers to submit free-form text.
    * **Menu**: Buyers must choose one option from a list that you provide. To format this field type, enter only one option per line.
    * **Checkbox**: Adds a checkbox to your prompt.
    * **Hidden**: Buyers do not see hidden fields, so they do not need to enter any information or select an option with this field type. Choose this field type when you want to add organization-specific tracking information.
5. Select **Preview** to review your lead form and test how the form works.
6. With your lead form set, select **Save**.

The lead form on your G2 product profile page should update immediately with your changes.

#### Examples of custom lead form fields
The custom fields that you add to the G2 lead form could depend on the information that your organization wants to collect and track, or information that might need to be supplied to a third-party system if you want to [set up a lead webhook](/g2/docs/g2-leads-webhooks).

A basic example of a custom field could be adding a question to the lead form about the buyer’s specific job title. You could use the Field Type **Text Field** to allow the buyer to submit any answer they want, which eliminates the need for you to supply a list of all relevant job titles.

![Leads_CustomFieldTitleExample](https://cdn.document360.io/1759d01c-b118-4f31-81f7-e4011071a6d4/Images/Documentation/Leads_CustomFieldTitleExample.png){height="70%" width="70%"}

Another example could be offering buyers the option to detail how many product users there might be in your organization. You could use the Field Type **Menu** to give buyers specific ranges of users.

![Leads_CustomFieldUsersExample](https://cdn.document360.io/1759d01c-b118-4f31-81f7-e4011071a6d4/Images/Documentation/Leads_CustomFieldUsersExample.png){height="70%" width="70%"}

An important option to consider adding would be a tracking code that is specific to a campaign your organization is conducting. For example, you could use the Field Type **Hidden** to set a default value for every lead form submission that has meaning within your organization.

![Leads_CustomFieldTrackingExample](https://cdn.document360.io/1759d01c-b118-4f31-81f7-e4011071a6d4/Images/Documentation/Leads_CustomFieldTrackingExample.png){height="70%" width="70%"}

### Privacy policy settings
By default, the lead form includes a link to G2’s [Privacy Policy](https://www.g2.com/static/privacy). You can also add a link to your organization’s own privacy policy as well as a pre-built statement that lets buyers know what you will do with their information.

:::(Warning)
If you add your own privacy policy, buyers must select the checkbox to acknowledge the policy before they will be able to submit the lead form.
:::

To add your own privacy policy and pre-built statement to the lead form:

1. Enter a link to your organization’s policy in the **Privacy Policy URL** field.
2. Review the three G2-provided options for the privacy policy statement and choose the one that most accurately represents how you plan to use the information provided by the buyer.
3. Select the **Privacy Policy Active?** slider so that it turns blue. This means your privacy policy will be added to your lead form.
4. Select **Preview** to review your lead form and ensure that the privacy policy link and statement at the bottom of the form are being added correctly.

![Leads_CustomPrivacyPolicy](https://cdn.document360.io/1759d01c-b118-4f31-81f7-e4011071a6d4/Images/Documentation/Leads_CustomPrivacyPolicy.png){height="50%" width="50%"}

5. With the privacy policy for your lead form set, select **Save**.

The lead form on your G2 product profile page should update immediately to add your privacy policy link and statement. The API field **is_privacy_compliant** is also added to the complete details you receive with every lead form submission.

## Lead emails
Individuals and groups in your organization can be notified of new G2 leads immediately by adding their email addresses in the my.G2 Leads Emails tab. Only email addresses that are added that are added in this page will receive direct email notifications for new leads.

To receive G2 leads notifications via email:

1. In the my.G2 Lead Emails tab, select **Add Lead Email**.
2. Enter the email address of the individual or group in your organization that should receive immediate notifications for G2 leads.
3. Repeat steps 1-2 to add more email addresses.
4. Select **Save**.

When your lead form is submitted to G2 in the future, the email addresses that you added should immediately receive a notification email.

:::(Info)
To test that the email addresses you added are receiving G2 leads notifications, go to your G2 product profile page and submit a lead form. Email notifications should be delivered less than five minutes after the lead form is submitted.

If an email address that you added does not receive the notification, check your email provider’s spam filter settings and ensure that G2 emails can be received.
:::

## Lead webhooks
In the context of G2 leads, webhooks enable you to automatically take leads submitted via your G2 product profile page and send them to third-party systems such as Salesforce and HubSpot.

Webhooks can be used to send G2 leads data nearly instantly after a buyer submits your leads form, which means that your sales and marketing teams can work a new lead immediately.

The process to set up webhooks for G2 leads is specific to the third-party system that you plan to use. Generally, the set-up process follows this general pattern:

* Identify a endpoint URL for the third-party system
* Match the API field names between your G2 lead form and your third-party system form
* Potentially set up hidden custom fields for your G2 leads form that supplies needed information to the third-party system

G2 has tested and supplied instructions specifically for the following third-party systems:

* [Salesforce CRM webhook](https://documentation.g2.com//g2/docs/salesforce-crm-webhook)
* [HubSpot webhook](https://documentation.g2.com//g2/docs/hubspot-webhook)

You can also [set up leads for Marketo](/g2/docs/g2-marketo-implementation#5-optional-enable-leads-data) via G2's integration. You do not have to enable Buyer Intent for Marketo if you prefer to only receive leads data.

To set up webhooks for other third-party systems, review the system’s own documentation and use G2’s documentation as an example of how to complete the process.

## CTA settings
If you want to entice buyers to engage with your organization directly, you can add and customize call-to-action (CTA) buttons for your G2 product profile page. CTA buttons enable you to send customers directly to your own webpages without submitting a G2 lead form.

For both the Free Trial CTA and Custom CTA options, consider adding a UTM tracking code to the URLs you use. This enables your organization to track the traffic generate by these CTA buttons on your G2 product profile page.

The my.G2 CTA Settings tab offers two options to add CTAs: the Free Trial CTA and the Custom CTA.

:::(Info)
When both the Free Trial CTA and Custom CTA options are enabled for your product, the Custom CTA overrides the Free Trial CTA so that only the Custom CTA button appears on your product profile page.

Other G2 pages still add the Free Trial CTA button when both options are enabled.
:::

![Leads_CTASettingsOverview](https://cdn.document360.io/1759d01c-b118-4f31-81f7-e4011071a6d4/Images/Documentation/Leads_CTASettingsOverview.png){height="50%" width="50%"}

### Free Trial CTA
The Free Trial CTA option adds a button with the standard text **Try [your product name] free** to the top-right of your G2 product profile page. This option also adds a CTA button with the standard text **Try for free** to your product listing when it appears in G2 category, comparisons, and alternatives pages.

Use this option to direct buyers to a free demo environment (or a form to sign up for a free demo).

To add the Free Trial CTA:

1. In the **CTA URL** field, enter the link for the webpage where you want to direct customers. 
2. Select the Free Trial CTA slider to move it to **ON**.

The following image shows the Free Trial CTA on a G2 product profile page.

![Leads_FreeTrialCTA](https://cdn.document360.io/1759d01c-b118-4f31-81f7-e4011071a6d4/Images/Documentation/Leads_FreeTrialCTA.png){height="50%" width="50%"}

The following image shows the Free Trial CTA on a G2 product comparison page.

![Leads_FreeTrialCTAComparisons](https://cdn.document360.io/1759d01c-b118-4f31-81f7-e4011071a6d4/Images/Documentation/Leads_FreeTrialCTAComparisons.png){height="50%" width="50%"}

### Custom CTA
The Custom CTA option adds a button with your custom text to the top-right of your G2 product profile page. Use this option to direct buyers to any webpage. 

To add a custom CTA:

1. In the **CTA URL** field, enter the link for the webpage where you want to direct customers. 
2. Select the Custom CTA slider to move it to **ON**.

The following image shows an example of a custom CTA on a G2 product profile page.

![Leads_CustomCTAExample](https://cdn.document360.io/1759d01c-b118-4f31-81f7-e4011071a6d4/Images/Documentation/Leads_CustomCTAExample.png){height="50%" width="50%"}