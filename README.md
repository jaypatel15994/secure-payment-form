# secure-payment-form
A simple form in HTML which accepts payment data and validates it using Javasript. 

We will Complete 5 tasks and document the changes. 

### Task 1: Network Debugging 
Here we need to explain debugging steps for a web application in case of a form submission failure. 
We need to use browser's developer tools to identify the issue.

- Please check <code>task-1.txt</code> to know possible steps we can use, to navigate through this issue.
It includes steps to reproduce or identify most common issues with form submission. 

### Task 3: Payment Form creation
(We will complete Task 3 first so that we can use same form for task 2, which is form validation using JavaScript.)

We will create a simple HTML form (<code>payment-form.html</code>) for collecting payment information such as Name on Card, Credit Card Number, Expiration Data, and CVV.

Since we are not submitting the form to any other url, form submission will be handled by the same page.

### Task 2: JavaScript form validation
We will add some validation for the form we created in Task 2. 
Please check <code>form-validation.js</code> to see the validations used.

Here we are assuming Card number field is 13-19 digits long and CVV field is 3-4 digits long.

Since we are working with payment related data, we can also encrypt the data before sending it to server with available encryption tools/library. 

### Task 4: Add styling
We will add some CSS style to make form more user friendly and compatible for mobile devices.
Check <code>style.css</code> file for more information on style.