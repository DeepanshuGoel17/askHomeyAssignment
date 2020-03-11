

To run the application first do 'npm install' then use the 'npm start' command.

App structure :
src _________ assets(for the images and other stuff)
| |
| |   
| |__________components(used for the functional components ie. dump or stateless components)
|              |__(Container many UI and other presentational Components)
|
|
|____containers(used for the statefull components ie. who manages the state)
      |___Dashboard (which keeps moniter of the state for the dashboard component)
      |___Register(which keeps moniter the state of the register form)

Feature :

-You can register a new order either sell or buy.
-The item will listed in the live dashboard. 
-After the on live dashboard by clicking on cancel button, you can cancel the orders. 
-List will be sorted. 
-The sorting of list is taken at insertion time only. 

Bulk order cancel : 
 -on live board the order will merge so on clicking the cancel, all the order for the price will be cancel. 
Reason : 
 -Need to create a seperate screen for the specific order cancelation.
secondly the major reason for cancelling is price, so canceling the order with the particular price. 



Reasons for not using redux : 
 -Tight on schedule
 -Only dashboard component is maintaining the complete state of the application and other components are not managing the state. Hence decide to manage the state inside one component only. 

