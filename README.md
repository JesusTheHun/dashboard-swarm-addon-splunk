# Dashboard Swarm Add-on - Splunk

This is an add-on up to this chrome extension https://github.com/JesusTheHun/dashboard-swarm

It adds enhancement to the support of Splunk dashboards. So zoom & scroll are correctly applied once page is loaded.

Please fork this repo and edit the `contentScript.js` to create your own add-on.

# How it works

The add-on works in 3 steps :

1. Detection
2. Initialisation
3. Closure


When a new page is loaded it detect if it's supported by the add-on or not.
If it is, it sends to the core extension a message to notice it will emit a new message when the page is ready. 

This add-on listen DOM changes to detect when it is fully loaded, this add-on detects the apparition of a specific DOM node by it's class.
Once detected, it emit the message to the core extension to inform the page is ready