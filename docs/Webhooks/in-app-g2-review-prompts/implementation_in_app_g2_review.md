<div>
  {/* 39b27bc3-da76-42f0-9c5e-2dce57bcffdc */}
  # Implementation
  This page details every step you need to take to implement the in-app G2 review form.
  Your organization can choose one of two implementation paths:
  1. [**Webhook**](/g2/docs/implementation-in-app-g2-review#option-1-webhook): This is the simpler option to implement, and offers enhanced privacy because the product user's email address is only sent to G2 when the review is submitted. However, users are not validated before they can view and submit the G2 review form, which means reviews could be submitted by users that are not eligible according to G2 standards.
  **OR**
  2. [**API call**](/g2/docs/implementation-in-app-g2-review#option-2-api-call): This option ensures that the product user's email address is validated before they can view and submit the G2 review form. 
  :::(Warning)
  Before proceeding, ensure that you have the appropriate technical resources to set up the webhook or API call and the CTA.
  G2 Support does not extend to building or troubleshooting your unique in-app prompt experience.
  :::
  <br />
  * * *
  ## Option 1: Webhook
  ### 1. Prepare for implementation
  In-app review prompts require authorization from G2. To gain this authorization, contact your G2 representative and request help in setting up in-app review prompts.
  You should receive the following items from G2.
  | Item | Use |
  | --- | --- |
  | Partner URL | This URL is specific to your organization, and is used to access the G2 API endpoint. <br /><br /> For example: https://www.g2.com/partnerships/<strong>\<partnername /></strong>/ |
  | API token | The API token is used to authenticate requests for each user submitting a review. |
  ### 2. Set up a webhook request
  For in-app review prompts, G2 uses a webhook to validate product users to submit reviews from your website. This eliminates the need for the user to create a G2.com account.
  :::(Info)
  The webhook request can be sent any time before or after the G2 review form is displayed. For example, when a user selects the CTA you build for in-app prompts, use that same action to trigger your back-end service to send the webhook request.
  :::
  Send a server-to-server request to G2.
  &gt; ```POST``` https://www.g2.com/validate_review_integration_token?```review_token```=UNIQUE_IDENTIFIER&amp;```api_token```=API_TOKEN
  Replace the following query parameters in the endpoint URL.
  | Key | Value |
  | --- | --- |
  | ```api_token``` | API_TOKEN is provided by G2 in the [Prepare for implementation](/g2/docs/implementation-in-app-g2-review#1-prepare-for-implementation) section. |
  | ```review_token``` | UNIQUE_IDENTIFIER is a unique token that your organization must generate for each user that submits a G2 review using this method. It is used for G2 review validation purposes. <br /><br /> This unique token must match with the same UNIQUE_IDENTIFIER used for each user when [implementing the CTA](/g2/docs/implementation-in-app-g2-review#3-implement-calltoaction-cta-for-g2-review-form). <br /><br /> G2 recommends using a ```user_id``` or ```user_uuid``` to serve as this token, but it can also be a user email or other value. <br /><br /> The token has to be unique to the specific user and the product they are reviewing (if you have multiple products on G2). It can be reused if the user selects the review CTA multiple times. |
  Webhook requests should receive a 204 message indicating that the request was accepted. No other response is expected.
  As the webhook endpoint used for in-app review prompts requires authorization from G2 to use, you should avoid exposing the API token on the front-end of a website, and generally should follow API security best practices to keep the API token hidden.
  ### 3. Implement call-to-action (CTA) for G2 review form
  With the webhook request configured, set up the redirect for the in-app prompt that delivers users to the G2 review form.
  To redirect a user to the G2 review form, embed the following URL in a CTA.
  &gt; https://www.g2.com/partnerships/```PARTNER_NAME```/products/```PRODUCT_SLUG```/take_integrated_survey.embed?```email```=USER_EMAIL&amp;```review_token```=UNIQUE_IDENTIFIER
  Replace the following query and path parameters in the endpoint URL.
  | Key | Value |
  | --- | --- |
  | ```PARTNER_NAME``` | The ```PARTNER_NAME``` is included in the URL provided by G2. |
  | ```PRODUCT_SLUG``` | To find your ```PRODUCT_SLUG```, go to your product profile page on G2.com and use the information in the URL between **products/** and **/reviews**. <br /><br /> For example, the G2 Marketing Solutions product profile page on G2 is https://www.g2.com/products/```g2-seller-solutions```/reviews, so the product slug to use in the review form HTML for G2 Marketing Solutions is ```g2-seller-solutions```. |
  | ```email``` | Each reviewer’s email address (USER_EMAIL) is required to create the review. |
  | ```review_token``` | The UNIQUE_IDENTIFIER should match the token created by your organization for each user in the [Set up a webhook request](/g2/docs/implementation-in-app-g2-review#2-set-up-a-webhook-request) section. If the tokens do not match, G2 will be unable to validate the review. |
  The following example shows how the link can be embedded in a simple iFrame to serve as the CTA.
  ```HTML
  <iframe src="https://www.g2.com/partnerships/PARTNER_ID/products/PRODUCT_SLUG/take_integrated_survey.embed?email=USER_EMAIL&review_token=UNIQUE_IDENTIFIER" style={{width: '80vw', height: '80vh'}} />
  ```
  Review the [prompt guidelines](/g2/docs/prompt-guidelines) for suggestions on the language and appearance to include in the CTA.
  <br />
  * * *
  ## Option 2: API call
  ### 1. Prepare for implementation
  In-app review prompts require authorization from G2. To gain this authorization, contact a G2 representative and request help in setting up in-app review prompts.
  You should receive the following items from G2.
  | Item | Use |
  | --- | --- |
  | Partner URL | This URL is specific to your organization, and is used to access the G2 API endpoint. <br /><br /> For example: https://www.g2.com/partnerships/<strong>\<partnername /></strong>/ |
  | API token | The API token is used to authenticate requests for the one-time passcodes that are necessary for each user submitting a review. |
  | Product UUIDs | The product IDs for your products on G2 that can be used as part of the in-app review prompt process. <br /><br /> If you have multiple products that you want to highlight as part of in-app prompts, note that each CTA link can only utilize one product ID. For multiple products, consider building CTAs that tell the user which product they are going to be reviewing. |
  | (Optional) Redirect URL | To redirect users to a specific URL after completing the G2 review, provide a redirect URL to your G2 representative before implementing the prompts. This URL can only be set by a G2 representative. <br /><br /> If a redirect URL is not provided, users are redirected to a generic “Thanks for your review” message after completing a review. |
  As the API endpoint used for in-app review prompts requires authorization from G2 to use, you should avoid exposing the API token on the front-end of a website, and generally should follow API security best practices to keep the API token hidden.
  ### 2. Set up the API call
  When a user enters a site page or area where the in-app review prompt appears, send a server-to-server request to G2:
  &gt; ```POST``` https://www.g2.com/partnerships/```PARTNER_NAME```/tokens
  Include the following in your request payload.
  ```
  {'{'}
  "api_token": "API_TOKEN",
  "product_id": "PRODUCT_ID"
  {'}'}
  ```
  You will receive a one-time passcode in the response.
  ```
  {'{'}
  "state": "ONETIME_PASSCODE"
  {'}'}
  ```
  This passcode expires in 24 hours, and it is used to validate the authenticity of a request for access to the G2 review form.
  You do not need to secure the ```"state": "ONETIME_PASSCODE"``` information. The one-time passcode is decrypted by G2 for the purposes of accessing the G2 review form, but it is otherwise valueless.
  ### 3. Implement call-to-action (CTA) for G2 review form
  With the API call configured to retrieve the one-time passcode, set up the redirect for the in-app prompt that delivers users to the G2 review form.
  G2 recommends that the communication handshake happens on your server, and that the user is redirected via a ```POST``` or ```GET``` request.
  &gt;https://www.g2.com/partnerships/```PARTNER_NAME```/users/login.embed?
  Set up a method to retrieve the user email and include it in the request payload.
  Include the following in your request payload.
  ```
  {'{'}
  "state": "ONETIME_PASSCODE",
  "email": "USER_EMAIL",
  {'}'}
  ```
  :::(Info)
  If the one-time passcode is incorrect or expired, the user is shown a 404 error.
  If the user's credentials are not included with the request payload, they are shown a 422 error stating that G2 could not find or create a user. Ensure that the user credentials are being passed to G2 to resolve this issue.
  :::
  To redirect the user to the G2 review form, embed a URL similar to the following example in a CTA.
  &gt; https://www.g2.com/partnerships/```PARTNER_NAME```/users/login.embed?```state```=ONETIME_PASSCODE&amp;```email```=aoeu@example.com
  The following example shows how the link can be embedded in a simple iFrame to serve as the CTA.
  ```HTML
  <iframe src="https://www.g2.com/partnerships/PARTNER_NAME/users/login.embed?state=ONETIME_PASSCODE&email=aoeu@example.com" style={{width: '80vw', height: '80vh'}} />
  ```
  Review the [prompt guidelines](/g2/docs/prompt-guidelines) for suggestions on the language and appearance to include in the CTA.
</div>
