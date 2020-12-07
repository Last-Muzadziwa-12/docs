# BambooHR
<!---Tool docs are (1) to ensure all OpenFn can more quickly and easily integrate with common tools, and (2) to educate any OpenFn user/the wider sector.---> 
## Overview
BambooHR's leading cloud-based system is an intuitive, affordable way for growing companies to manage essential employee information in a personalized Human Resources Information System (HRIS).

## Configuring BambooHR to work with OpenFn
BambooHR has a webhook notification service that will send OpenFn real-time notifications when changes are made to employee records in Bamboo. 

Webhooks can be configured by an admin user in the tools section by clicking on the link "Webhooks". Webhooks are not turned on for all clients, but can be enabled at no charge by contacting BambooHR support.

By default, a BambooHR user can specify which fields they want to monitor. The list of fields that can be monitored is limited and can be accessed here: [BambooHR Webhooks](https://documentation.bamboohr.com/docs/webhooks)

### Integration Use Cases
Examples of possible ways that BambooHR workflows can be automated include:
1. Each time a new employee is added to BambooHR automate the creation of a new user in Identity and Access Management software like Azure AD, Okta, or Salesforce Identity. 

### Further Reading:
1. Links...

## Integration Options
1. Data integration via BambooHR Web API - link: ....

2. Webhook service to push data to OpenFn endpoint - link: ...
Notes about webhook setup...


## OpenFn Adaptor
Currently there is no tool-specific adaptor, so `language-http` can be implemented to integrate via HTTP requests to the web API. 

## Integration Examples 
Links to sample jobs/ code snippets...
