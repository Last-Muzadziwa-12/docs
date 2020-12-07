# Microsoft Azure
<!---Tool docs are (1) to ensure all OpenFn can more quickly and easily integrate with common tools, and (2) to educate any OpenFn user/the wider sector.---> 
## Overview

### Azure
The Azure cloud platform is more than 200 products and cloud services designed to help you bring new solutions to life—to solve today’s challenges and create the future. Build, run, and manage applications across multiple clouds, on-premises, and at the edge, with the tools and frameworks of your choice.

### Azure Active Directory ("Azure AD") 
Azure AD is a comprehensive, highly available identity and access management cloud solution from Microsoft that combines core directory services, advanced identity governance, and application access management.

## Configuring Azure AD to work with OpenFn
In configuring OpenFn to integrate with Azure there are two important points to be considered:

 1. The user who will be authenticating with Azure must have the right level of authority to register OpenFn with Azure.
 2. According to what operations you want to make use of, you should be aware of the individual permissions / scopes that OpenFn will access and set these accordingly when you are authenticating your Azure account. Please refer to this Microsoft Active Directory help article for more information regarding permissions and consent: [Permissions and consent in the Microsoft identity platform endpoint](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent?WT.mc_id=Portal-Microsoft_AAD_RegisteredApps). Please see the picture below for a screenshot of Azure AD's `API Permissions` page

**![](https://lh4.googleusercontent.com/kv2jsSb1yK7HeUETwlvzDt3KrCul4mgZCD5vAaGVZYR_iwHhml-9QU4xveMftguFYd4jr_kBXxUi0_IcI2xDKuUiguxvK_loRExgdY1om-UqvePA2Lbahsx1Sou4lutLY3GlguAS)**

Once the permssions and authorizations are established, OpenFn is now ready to connect to your Azure AD environment. 

## Integration Options

Using the Microsoft Graph REST API, OpenFn's platform can create and update Azure AD user accounts. Please reference the Microsoft Graph API documentation here for further details: [Overview of Microsoft Graph](https://docs.microsoft.com/en-us/graph/overview?view=graph-rest-1.0)


## OpenFn Adaptor
Currently there is no tool-specific adaptor, so `language-http` has been implemented to integrate via HTTP requests with the Microsoft Graph API and will need to authorize with Azure AD on behalf of a user - [see docs here for how to do this](https://docs.microsoft.com/en-us/graph/auth-v2-user?context=graph/api/1.0). 

## Integration Examples 
Links to sample jobs/ code snippets
