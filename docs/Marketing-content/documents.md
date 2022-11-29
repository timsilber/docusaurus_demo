<!-- 85dde766-06ad-46b7-a900-4d8f5ebc1cd1 -->
# Documents

The Documents page enables you to track traffic to your [G2 Reports](https://sell.g2.com/reports), including Compare Reports, Grid<sup>Ⓡ</sup> Reports, and Index Reports. Reports appear in the Documents page after you purchase a license. 

![button analytics](https://github.com/g2-documentation/images/blob/654e4191b3902913a137d8104e3fa82bddcd7e11/button_analytics.png?raw=true "button analytics")


:::(Info)
To view all of your available reports, go to [my.G2](https://my.g2.com/~/reports_library), then **Marketing Content** > **Report Library**.

Licensing a report from G2 enables you to direct buyers to your G2 marketing content without requiring them to sign in to a G2 account. For more information on licensing a report, please contact your G2 sales representative.
:::

To view your licensed reports in the Documents page, go to [my.G2](https://my.g2.com/~/documents), then **Marketing Content** > **Documents**. Reports are displayed in chronological order (most recent first) alongside the corresponding expiration date of your license. 

![documents](https://raw.githubusercontent.com/g2-documentation/images/654e4191b3902913a137d8104e3fa82bddcd7e11/documents_list.png?raw=true "documents list")


### Sharing reports with access-granting URLs

Select the name of a report in the Documents page to get a shareable URL called the ```access-granting URL```. Sending the ```access-granting URL``` to your buyers enables them to view your report without logging in to G2.

![access_URL](https://github.com/g2-documentation/images/blob/main/access_url.png?raw=true "access_url")

The ```access-granting URL``` remains active if the **Enable** checkbox is checked for as long as your license is active. To remove sharing access for a report, uncheck the **Enable** button. 


:::(Warning)
Disabling a report prevents new buyers from being able to view the report via the ```access-granting URL```. Buyers who have previously accessed the report will still be able to access the report via their ```unique URL```. For more information on ```unique URLs```, refer to the Access-granting URLs vs. unique URLs section.
:::


#### Access-granting URLs vs. unique URLs

When a buyer visits your ```access-granting URL```, G2 automatically converts the ```access-granting URL``` into a buyer-specific, session-specific ```unique URL```. G2 uses ```unique URLs``` to help you track traffic to your report without using cookies. For more information on viewing your report traffic, refer to the Tracking report traffic section. 

The following example demonstrates the conversion of a report’s ```access-granting URL``` into a buyer-specific, session-specific ```unique URL``` when the link is opened:

```Access-granting URL```:

https://www.g2.com/reports/grid-report-for-buyer-intent-data-tools-winter-2022?secure%5Bpid%5D=25485&```secure%5Brid%5D=1960916&secure%5Btoken%5D=9599c1bfa5bd4e6fa0a5588c163cb094c98db5582874c977f10128735314c225```

```Unique URL```:

https://www.g2.com/reports/grid-report-for-buyer-intent-data-tools-winter-2022?```featured=g2-seller-solutions&secure%5Bgated_consumer%5D=6a21eba9-1d1e-4bb5-a9a4-1321e4565c49&secure%5Btoken%5D=5cfb27392b4164a96c6f760ef4717655ddb9139bdc77e6affa43e184ac368e61&utm_campaign=gate-809951```


#### Setting a custom starting point URL

If the license for your report expires and a buyer attempts to access your report via their ```unique URL```, they will be redirected to your G2 product profile page. Setting a custom starting point URL changes the location of this redirect. 

For example, to redirect buyers to your homepage if they attempt to access a report that has an expired license, enter your website’s homepage URL into the Custom Starting Point URL field, then select **Update** to confirm your new redirect location.

:::(Warning)

If you choose to change the custom starting point URL for a report, you must do so before your license expires. Once your license expires, the report is removed from the Documents page, and you must contact your G2 representative to make further changes.

:::


### Tracking report traffic 

To access report traffic data, select the name of a report in the Documents page, then scroll to the Button Analytics section. This analytics data is useful for tracking buyers who have accessed your reports, including the report shown on your G2 product profile page. 

![grid cta on profile](https://raw.githubusercontent.com/g2-documentation/images/654e4191b3902913a137d8104e3fa82bddcd7e11/grid_cta_on_profile.png "grid cta on profile")

#### Report analytics data

G2 collects several data points when a buyer views one of your reports, including their geographic location, the date of their first visit, the date of their most recent visit, and the number of times they reviewed your report. 

![analytics_table](https://raw.githubusercontent.com/g2-documentation/images/654e4191b3902913a137d8104e3fa82bddcd7e11/analytics_table.png "analytics table")

:::(Info)
Each line item in the analytics table represents a buyer’s navigation events to a specific ```unique URL```. For more information on ```unique URLs```, refer to the Access-granting URLs vs. unique URLs section.
:::


#### Identifying buyers

If a buyer is logged into their G2 account while viewing your report, the name of their company populates in the Logged In User column. To get more information about the buyer, select the value in this column to go to their G2 profile page.

![explore_logged_in_user](https://raw.githubusercontent.com/g2-documentation/images/654e4191b3902913a137d8104e3fa82bddcd7e11/explore_logged_in_user.gif "explore logged-in user")

If a buyer has not associated their G2 account with a company, this value displays as ```Unknown```. If a buyer was not logged in to G2 when viewing your report, this value displays as ```false```.

:::(Info)
G2 recognizes that internal users of your product might access your licensed reports. If members of your organization are logged in to their my.G2 admin portal while viewing a report, the Test User column will display a value of ```true```. To hide views committed by logged-in members of your organization, select the **Hide Test Visits** button.
:::

### G2 report dates
Refer to [G2's Research Agenda](https://research.g2.com/methodology/research-agenda){target="_blank"} to find key dates for upcoming G2 reports, including review submission deadlines and report publication dates.