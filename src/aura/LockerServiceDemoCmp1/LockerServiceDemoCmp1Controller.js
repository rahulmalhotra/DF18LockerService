({
    doInit: function(component, event, helper) {
		console.log(window);
        console.log(window + '');
//		console.log(window.toString());
        console.log(document.toString());
		console.log(component.toString());
		console.log($A.toString());
        console.log(event.toString());
    },
    
    clickButton1 : function(component, event, helper) {
        console.log(document.getElementById('myDiv1').innerHTML);
        console.log('Getting myDiv');
        var myDiv = component.find('myDiv').getElement();
        console.log(myDiv.toString());
        console.log('Showing elements inside myDiv');
        console.log(myDiv.innerHTML);
		var button1 = component.find('button1');
        console.log('Getting Button 1');
        console.log(button1.toString());
        console.log(button1.get('v.name'));
        console.log('Getting Button 1 by event');
        var button1ByEvent = event.getSource();
        console.log(button1ByEvent.toString());
        console.log(button1ByEvent.get('v.name'));
        console.log('This is button 1 by event:- ');
        console.log(button1ByEvent);
        console.log('This is button 1:- ');
        console.log(button1);
//        button1.click();
//        event.getSource().click();
		var inputValue = component.find('myInput').get('v.value');
        console.log(inputValue);
        document.getElementById('myDiv1').innerHTML = inputValue;
        console.log(myDiv.childElementCount);
    }
})