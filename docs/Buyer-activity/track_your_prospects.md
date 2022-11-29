<!-- f843a165-3f71-44a6-aa2a-24e10b5b4147 -->


  # Track Your Prospects
  Track Your Prospects provides insights into how your G2 product profile influences buyer behavior by tracking visitors who navigate between your G2 product profile and your website. When a visitor interacts with your G2 product profile and then your website (or vice versa), you receive data about the specific page visited, the duration between visits, and the firmographic information of the visitor.
  ![track your prospects demo](https://github.com/g2-documentation/images/blob/main/track-your-prospects-example.png?raw=true)
  ## Basics of Track Your Prospects
  ### Data collection
  Track Your Prospects creates a client-side, bidirectional cookie that persists for 14 days after a visitor’s most recent activity. This period resets each time a visitor lands on your website or on your G2 product profile page. 
  Track Your Prospects data will not be recorded if a visitor clears their browsing history before visiting both endpoints. A visitor does not have to commit a specific action on your G2 product profile or your website for event data to be recorded. 
  :::(Info)
  Unlike other, third-party methods of attribution tracking, Track Your Prospects does not track the activities of your customers across your website and does not report personally-identifiable information (such as name and address) back to G2.
  :::
  #### Cookie details
  The following information describes the cookie that G2 uses to collect Track Your Prospects data:
  &gt; Name: `_session_id`
  &gt; Host: `tracking.g2crowd.com`
  &gt; Session duration: `14 days`
  &gt; Type: `targeting`
  ### G2 Buyer Intent data and Track Your Prospects
  Like Buyer Intent signals, Track Your Prospects events indicate that a buyer is interested in taking the next step to research your product. 
  Where Buyer Intent captures enriched data about visitors researching your product and competitors across G2, Track Your Prospects helps attribute G2’s influence on your website traffic while adding firmographic information about your visitors. Use Track Your Prospects events alongside your Buyer Intent signals to completely understand the influence of your G2 product profile on buyers.
  :::(Info)
  Not all visits to G2.com are classified as Buyer Intent data. For example, writing a review does not provide a signal of a potential buyer and is excluded from Buyer Intent. 
  For more information on G2 Buyer Intent data, refer to the [Buyer Intent](https://documentation.g2.com/docs/buyer-intent) documentation.
  :::
  ## Implementation
  ### Option 1: Initializing the Track Your Prospects tag via your website's source code
  The simplest way to implement the Track Your Prospects tag is by pasting the embed code into your website's source code. If you don't have access to modify your website's source code, refer to [option 2](#option-2-initializing-the-track-your-prospects-tag-via-google-tag-manager). 
  To begin tracking your prospects: 
  1. Go to [my.G2](https://my.g2.com/~/attribution_tracking/edit), then **Buyer Activity** &gt; **Track Your Prospects**.
  2. Move the **Enable Prospect Tracking** slider to the **ON** position. 
  3. Choose your tracking tag type: 
  &gt; **JavaScript (preferred):** This code is asynchronous and does not prevent other elements on your page from loading.
  &gt;
  &gt; **Pixel Tag**: This code renders an invisible 1x1 pixel on your website.
  4. Select **Copy embed** to copy your preferred tracking tag to your clipboard. Paste a copy of the tracking tag in the body (between the &lt;body&gt; and &lt;/body&gt; tags) of your website for every page you want to track traffic.
  :::(Warning)
  You must add a unique Track Your Prospects tag to your website for each of your organization’s G2-listed products. To switch between the my.G2 pages for each of your products, first expand the dropdown at the top of the page by selecting your product name, then select the product you want to view from the list provided.  
  :::
  ### Option 2: Initializing the Track Your Prospects tag via Google Tag Manager
  Don’t have access to modify the source code of your website? You can use a tag management software such as Google Tag Manager to generate custom HTML tags that fire for specified event triggers.
  <img style={{width: '100%', margin: 'auto', display: 'block'}} className="vidyard-player-embed" src="https://play.vidyard.com/jGMg9ZEKSoAQBNECbNkAJV.jpg" data-uuid="jGMg9ZEKSoAQBNECbNkAJV" data-v={4} data-type="inline" data-loop={1} />
  To begin tracking your prospects:
  1. Go to [my.G2](https://my.g2.com/~/attribution_tracking/edit), then **Buyer Activity** &gt; **Track Your Prospects**.
  2. Move the **Enable Prospect Tracking** slider to the **ON** position.
  3. Choose your tracking tag type: 
  &gt; **JavaScript (preferred):** This code is asynchronous and does not prevent other elements on your page from loading.
  &gt;
  &gt; **Pixel Tag**: This code renders an invisible 1x1 pixel on your website.
  4. Select **Copy embed** to copy your preferred tracking tag to your clipboard
  5. Navigate to [Google Tag Manager](https://tagmanager.google.com) and select the container associated with your website.
  6. Create a new tag by navigating to **Workspace** &gt; **Tags**, then selecting **New**.
  7. Select the **Tag Configuration** panel to reveal the **Choose tag type** sidebar.
  8. Select **Custom HTML**. Paste your embed into the text box provided.
  9.  Assign triggers by selecting the **Triggering** panel. G2 recommends firing the tag on **All Pages (Page View)** by default.
  10. Name your tag, then select **Save**. 
  :::(Warning)
  You must submit and publish the changes to your Google Tag Manager container to apply Track Your Prospects to your website.
  :::
  ## Custom IDs
  The custom ID field of the Track Your Prospects tag enables you to associate prospects with unique identifiers, such as Google Analytics IDs or UTM IDs. Data inserted into the custom ID field appears in the *Custom ID* column of the [Track Your Prospects](https://my.g2.com/~/attribution_tracking/edit) tab, and in CSV exports of your Track Your Prospects data.
  :::(Info)
  For more information on using Google Tag Manager to populate the custom ID field, refer to the [Identify G2 buyers on your website using Google Analytics](#example-identify-g2-buyers-on-your-website-using-google-analytics) section.
  :::
  ![my.G2 custom IDs](https://cdn.document360.io/1759d01c-b118-4f31-81f7-e4011071a6d4/Images/Documentation/my.G2%20custom%20IDs.png){'{'}height="" width=""{'}'}
  To pass a value to Track Your Prospects, insert your unique identifier into the highlighted region of each tag type. 
  **JavaScript tag:**
  ```
  ```
  **Pixel tag:**
  ```
  <blockquote>
    &lt;`img src="https://tracking.g2crowd.com/attribution_tracking/conversions/000.gif?e=' <span style={{background: '#ff492c', fontWeight: 'bold', color: 'white'}}>YOUR CUSTOM ID</span> '/&gt;
  </blockquote>
  ```
  ## Analytics and data export
  Once you have embedded a tracking tag on your desired webpage(s), [Track Your Prospects](https://my.g2.com/~/attribution_tracking/edit) begins recording bidirectional traffic between your G2 profile and your webpage(s). 
  Choose one of the preset timeframes or set a custom timeframe to view the traffic that occurred during your timeframe of interest. 
  Use the graph to easily analyze trends in the traffic between G2 and your website. 
  ![track your prospects analytics](https://cdn.document360.io/1759d01c-b118-4f31-81f7-e4011071a6d4/Images/Documentation/track%20your%20prospects%20analytics.png){'{'}height="" width=""{'}'}
  The table view offers more details about each data point represented in the graph, including the:  
  * Industry and organization associated with your visitor 
  * Country where the headquarters of their company is located
  * First action the visitor committed to trigger the tag
  * Next action the visitor committed to trigger the tag
  * Time between tag triggers 
  To export the Track Your Prospects data that occurred in the timeframe you selected:
  1. Select **Download CSV**. G2 begins generating your report. The time this takes varies based on the amount of traffic received and the timeframe you selected.
  2. When the report finishes generating, select the file link to begin your download. Your CSV contains all the information seen in the table view. 
  :::(Info)
  To parse out data where a visitor’s organization and industry could not be determined, sort your CSV by the **Organization** or **Industry** column and then remove the undesired “unknown” values. 
  :::
  ## Example: Identify G2 buyers on your website using Google Analytics
  Once you've [added the Track Your Prospects tag to your site via Google Tag manager](#option-2-initializing-the-track-your-prospects-tag-via-google-tag-manager), you can easily populate the custom ID field of Track Your Prospects events with Google Analytics data.
  For example, the Google Analytics client ID is a string of numbers that can be used to identify the navigation actions of an individual visitor on your website. Adding this data to Track Your Prospects enables you to track how a buyer navigates across your website before, during, and after researching your product on G2. 
  :::(Warning)
  Before proceeding with these steps, ensure the Track Your Prospects tag is active in your Google Tag Manager container. For more information, refer to the [Initializing the Track Your Prospects tag in Google Tag Manager](#option-2-initializing-the-track-your-prospects-tag-via-google-tag-manager) section.
  :::
  ### 1. Create a variable to capture the client ID
  Sending the client ID to a Google Tag Manager variable enables you to add it to the custom ID field of the Track Your Prospects tag.
  <img style={{width: '100%', margin: 'auto', display: 'block'}} className="vidyard-player-embed" src="https://play.vidyard.com/rwDzanS8ewMnCqCz4GkQb6.jpg" data-uuid="rwDzanS8ewMnCqCz4GkQb6" data-v={4} data-type="inline" data-loop={1} />
  To create the Google Tag Manager variable:
  1. Go to your [Google Tag Manager](https://tagmanager.google.com/#/home) container, then select the **Variables** tab. 
  2. Select **New**, then name your variable with a descriptive name, such as Return Client ID. 
  3. Select the **Variable Configuration** panel to reveal the **Choose variable type** sidebar.
  4. Select **Custom JavaScript**, then paste the following code into the textbox:
  ```JavaScript
  function(){'{'}
  try{'{'}
  var tracker = ga.getAll()[0]
  return tracker.get('clientId');
  {'}'} catch(e) {'{'}
  return false;
  {'}'}
  {'}'}
  ```
  4. Select **Save**.
  ### 2. Create a custom tag trigger
  Creating a custom tag trigger for this workflow ensures that your Track Your Prospects tag will not fire until the visitor's client ID is available in Google Analytics. 
  <img style={{width: '100%', margin: 'auto', display: 'block'}} className="vidyard-player-embed" src="https://play.vidyard.com/VJ21GAGEdtmfd3NeHhEobT.jpg" data-uuid="VJ21GAGEdtmfd3NeHhEobT" data-v={4} data-type="inline" data-loop={1} />
  To create the Google Tag Manager trigger:
  1. In your [Google Tag Manager](https://tagmanager.google.com/#/home) container, navigate to the **Triggers** tab. 
  2. Select **New**, then name your variable with a descriptive name, such as Track Your Prospects Trigger.
  3. Select the **Trigger Configuration** panel to reveal the **Choose trigger type** sidebar.
  4. Select **Window Loaded**.
  5. Select **Save**.
  ### 3. Add your custom variable and trigger to the Track Your Prospects tag
  You can add your client ID variable and custom trigger to the Track Your Prospects tag by editing the tag configuration.
  <img style={{width: '100%', margin: 'auto', display: 'block'}} className="vidyard-player-embed" src="https://play.vidyard.com/DJ5upxgY6wAwzNKkctpSYU.jpg" data-uuid="DJ5upxgY6wAwzNKkctpSYU" data-v={4} data-type="inline" data-loop={1} />
  To add your variable and trigger:
  1. In your [Google Tag Manager](https://tagmanager.google.com/#/home) container, navigate to the **Tags** tab.
  2. Select the name of your Track Your Prospects tag to open the tag editor. 
  3. Find the custom ID field of your preferred tag, which is denoted by quotation marks. If using the Javascript tag, the quotation marks follow the ID variable of the script (id = **‘ ‘**). If using the Pixel tag, the quotation marks follow the query at the end of the URL (?e=**’’**). 
  4. Type two open braces, **{'{'}{'{'}** , between the quotation marks of your preferred tag. This action displays a list of all the variables in your Google Tag Manager container.
  5. Select the name of the variable you created to add it to the tag. 
  6. If you have an existing trigger, such as an *All pages* trigger, remove it by selecting the *Triggering* panel, then selecting the **-** icon.
  7. Select the *Triggering* panel to access the *Choose a trigger* window, then select the name of the trigger you created in the [Create a custom tag trigger](#2-create-a-custom-tag-trigger) section
  8. Select **Save**.
  :::(Warning)
  You must submit and publish the changes to your Google Tag Manager container to apply them to your website.
  :::
  ### Viewing buyer navigation data in Google Analytics
  To view buyer navigation data:
  1. Go to [my.G2](https://my.g2.com/~/attribution_tracking/edit), then **Buyer Activity** &gt; **Track Your Prospects**.
  2. From the Track Your Prospects Analytics table, find an event you want to track in Google Analytics, then copy the string in the Custom ID field to your clipboard.
  3. Go to **Google Analytics** &gt; **User Explorer**. Paste the Custom ID from step 2 into the search bar, then select the **search icon**.
  4. Select the corresponding ID from the search results to view the buyer’s navigation history across your website.
  <img style={{width: '100%', margin: 'auto', display: 'block'}} className="vidyard-player-embed" src="https://play.vidyard.com/SgEDubnj3os4UQBuW2SQU3.jpg" data-uuid="SgEDubnj3os4UQBuW2SQU3" data-v={4} data-type="inline" data-loop={1} />
